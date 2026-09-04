"""
<<<<<<< HEAD
WSGI config for quizbattle project.
=======
WSGI config for trueque project.
>>>>>>> a8a466dec217b88dc27b4de0968cef64e358741e

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'trueque.settings')

application = get_wsgi_application()
