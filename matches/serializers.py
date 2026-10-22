from rest_framework import serializers
from .models import Match, Session, Review

class MatchSerializer(serializers.ModelSerializer):
    user1_username = serializers.CharField(source='user1.username', read_only=True)
    user2_username = serializers.CharField(source='user2.username', read_only=True)

    class Meta:
        model = Match
        fields = ['id', 'user1', 'user1_username', 'user2', 'user2_username',
                  'user1_skill', 'user2_skill', 'status', 'is_chain_match',
                  'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class SessionSerializer(serializers.ModelSerializer):
    video_call_url = serializers.ReadOnlyField()

    class Meta:
        model = Session
        fields = ['id', 'match', 'scheduled_time', 'status', 'notes',
                  'created_at', 'room_id', 'video_call_url', 'learning_confirmed']
        read_only_fields = ['id', 'created_at', 'room_id',
                            'video_call_url', 'learning_confirmed']

class ReviewSerializer(serializers.ModelSerializer):
    reviewer_username = serializers.CharField(source='reviewer.username', read_only=True)
    reviewee_username = serializers.CharField(source='reviewee.username', read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'session', 'reviewer', 'reviewer_username', 'reviewee',
                  'reviewee_username', 'rating', 'feedback', 'created_at']
        read_only_fields = ['id', 'created_at']