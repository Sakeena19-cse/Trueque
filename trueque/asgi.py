"""
<<<<<<< HEAD
ASGI config for quizbattle project.
=======
ASGI config for trueque project.
>>>>>>> a8a466dec217b88dc27b4de0968cef64e358741e

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'trueque.settings')

<<<<<<< HEAD
django_asgi_app = get_asgi_application()

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from quiz.routing import websocket_urlpatterns

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)  
    ),
})
=======
application = get_asgi_application()
>>>>>>> a8a466dec217b88dc27b4de0968cef64e358741e
