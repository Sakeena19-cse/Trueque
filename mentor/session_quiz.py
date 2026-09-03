import json
from django.utils import timezone
from .ai_client import call_gemini
from skills.models import UserSkill


def generate_session_quiz_questions(session, num_questions=5):
    prompt = f"""A student just finished a peer learning session on "{session.match.user1_skill.skill.name if session.teacher == session.match.user1 else session.match.user2_skill.skill.name}".

Here are the teacher's notes on what was covered in this session:

{session.notes}

Generate {num_questions} multiple-choice questions that test whether the student understood these specific topics covered in the session.

Respond ONLY with strict JSON, no markdown fences, no preamble, in this exact shape:
{{
  "questions": [
    {{"text": "...", "correct_answer": "...", "difficulty": "easy" | "medium" | "hard"}}
  ]
}}"""

    text = call_gemini(prompt)
    clean = text.replace("```json", "").replace("```", "").strip()
    return json.loads(clean)["questions"]


def score_session_quiz(questions, submitted_answers):
    """submitted_answers: list of strings, same order as questions."""
    correct = sum(
        1 for q, a in zip(questions, submitted_answers)
        if a.strip().lower() == q["correct_answer"].strip().lower()
    )
    total = len(questions)
    percentage = round((correct / total) * 100, 1) if total else 0
    return percentage


def complete_session_quiz(session, score_percentage, passing_threshold=70):
    session.learning_confirmed = score_percentage >= passing_threshold
    session.save()

    if session.learning_confirmed:
        _update_learner_profile(session)

    return session.learning_confirmed


def _update_learner_profile(session):
    skill = session.match.user1_skill.skill if session.teacher == session.match.user1 else session.match.user2_skill.skill

    user_skill, created = UserSkill.objects.get_or_create(
        user=session.learner,
        skill=skill,
        defaults={"proficiency": "beginner", "skill_type": "offering"},
    )
    user_skill.is_verified = True
    user_skill.verified_at = timezone.now()
    if not created:
        user_skill.skill_type = "offering"
    user_skill.save()