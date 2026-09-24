from .models import Quiz, Question
from .quiz_ai import generate_quiz_questions
import random, string


def create_ai_quiz(skill, level, host_name, num_questions=10):
    room_code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    quiz = Quiz.objects.create(
        room_code=room_code,
        title=f"{skill} ({level.capitalize()}) Verification",
        host_name=host_name,
        skill_tag=skill,
        level=level,
        source="ai_generated",
    )
    questions = generate_quiz_questions(skill, level, num_questions=num_questions)
    for i, q in enumerate(questions):
        Question.objects.create(
            quiz=quiz,
            text=q["text"],
            correct_answer=q["correct_answer"],
            difficulty=q["difficulty"],
            order=i,
        )
    return quiz