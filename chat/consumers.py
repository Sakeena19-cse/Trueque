import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Message
from matches.models import Match


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.match_id = self.scope['url_route']['kwargs']['match_id']
        self.room_group_name = f'chat_{self.match_id}'
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        text = data.get('text')
        sender_id = data.get('sender_id')  # temporary: passed manually until JWT auth wires into WebSocket scope

        message = await self.save_message(sender_id, text)

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'text': text,
                'sender_id': sender_id,
                'timestamp': str(message.timestamp),
            }
        )

    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            'text': event['text'],
            'sender_id': event['sender_id'],
            'timestamp': event['timestamp'],
        }))

    @database_sync_to_async
    def save_message(self, sender_id, text):
        match = Match.objects.get(id=self.match_id)
        return Message.objects.create(match=match, sender_id=sender_id, text=text)