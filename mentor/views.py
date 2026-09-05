from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from skills.models import UserSkill
from matches.models import Session
from .code_mentor import analyze_code_error
from .skill_verification import start_verification_quiz, complete_verification
from .session_quiz import generate_session_quiz_questions, score_session_quiz, complete_session_quiz


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def code_mentor_view(request):
    code = request.data.get('code')
    error_message = request.data.get('error_message')
    if not code or not error_message:
        return Response({'error': 'code and error_message are required'}, status=400)
    result = analyze_code_error(code, error_message)
    return Response(result)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def start_skill_verification_view(request, user_skill_id):
    user_skill = get_object_or_404(UserSkill, id=user_skill_id, user=request.user)
    quiz = start_verification_quiz(user_skill)
    questions = [
        {"id": q.id, "text": q.text, "difficulty": q.difficulty}
        for q in quiz.questions.all()
    ]
    return Response({"quiz_id": quiz.id, "room_code": quiz.room_code, "questions": questions})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_skill_verification_view(request, user_skill_id):
    from quiz.models import Quiz
    user_skill = get_object_or_404(UserSkill, id=user_skill_id, user=request.user)
    quiz_id = request.data.get('quiz_id')
    answers = request.data.get('answers')  # {question_id: submitted_answer}

    quiz = get_object_or_404(Quiz, id=quiz_id)
    questions = quiz.questions.all()
    correct = sum(
        1 for q in questions
        if answers.get(str(q.id), '').strip().lower() == q.correct_answer.strip().lower()
    )
    percentage = round((correct / questions.count()) * 100, 1) if questions.count() else 0
    passed = complete_verification(user_skill, quiz, percentage)

    return Response({"score": percentage, "passed": passed})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def start_session_quiz_view(request, session_id):
    session = get_object_or_404(Session, id=session_id)
    questions = generate_session_quiz_questions(session)
    return Response({"questions": questions})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_session_quiz_view(request, session_id):
    session = get_object_or_404(Session, id=session_id)
    questions = request.data.get('questions')  
    submitted_answers = request.data.get('answers')

    percentage = score_session_quiz(questions, submitted_answers)
    passed = complete_session_quiz(session, percentage)

    return Response({"score": percentage, "passed": passed})