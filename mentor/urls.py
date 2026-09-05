from django.urls import path
from . import views

urlpatterns = [
    path('code-mentor/', views.code_mentor_view, name='code_mentor'),
    path('skill-verification/<int:user_skill_id>/start/', views.start_skill_verification_view, name='start_skill_verification'),
    path('skill-verification/<int:user_skill_id>/submit/', views.submit_skill_verification_view, name='submit_skill_verification'),
    path('session-quiz/<int:session_id>/start/', views.start_session_quiz_view, name='start_session_quiz'),
    path('session-quiz/<int:session_id>/submit/', views.submit_session_quiz_view, name='submit_session_quiz'),
]