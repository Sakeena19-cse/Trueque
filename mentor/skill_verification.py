from quiz.quiz_helpers import create_ai_quiz
from django.utils import timezone
def start_verification_quiz(user_skill):
    """Generates an AI quiz for a UserSkill's claimed proficiency."""
    quiz = create_ai_quiz(
        skill=user_skill.skill.name,
        level=user_skill.proficiency,
        host_name=user_skill.user.username,
        num_questions=10,
    )
    return quiz
def complete_verification(user_skill, quiz, score_percentage, passing_threshold=50):
    """Call this once the student has answered the quiz questions and you've scored it."""
    if score_percentage >= passing_threshold:
        user_skill.is_verified = True
        user_skill.verified_at = timezone.now()
        user_skill.save()
        return True
    return False