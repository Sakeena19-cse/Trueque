from django.db import models
from django.conf import settings


class Quiz(models.Model):
    STATUS_CHOICES = [
        ('waiting', 'Waiting'),
        ('live', 'Live'),
        ('ended', 'Ended'),
    ]
    LEVEL_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]
    SOURCE_CHOICES = [
        ('manual', 'Manual'),
        ('ai_generated', 'AI Generated'),
    ]

    room_code = models.CharField(max_length=6, unique=True)
    title = models.CharField(max_length=200)
    host_name = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='waiting')
    current_question_index = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    skill_tag = models.CharField(max_length=100, blank=True)
    level = models.CharField(max_length=15, choices=LEVEL_CHOICES, default='beginner')
    source = models.CharField(max_length=15, choices=SOURCE_CHOICES, default='manual')

    def __str__(self):
        return self.title


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name="questions")
    text = models.TextField()
    difficulty = models.CharField(
        max_length=10,
        choices=[("easy", "Easy"), ("medium", "Medium"), ("hard", "Hard")],
        default="medium"
    )
    correct_answer = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.quiz.title} - Q{self.order}"


class Player(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="quiz_profile")
    display_name = models.CharField(max_length=50, blank=True)
    total_battles = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.display_name or self.user.username

    def score_for_quiz(self, quiz):
        from django.db.models import Sum
        answers = self.answers.filter(question__quiz=quiz)
        total_points = answers.aggregate(Sum("points_earned"))["points_earned__sum"] or 0
        total_questions = answers.count()
        correct = answers.filter(is_correct=True).count()
        percentage = round((correct / total_questions) * 100, 1) if total_questions else 0
        return {"points": total_points, "correct": correct, "total": total_questions, "percentage": percentage}


class Answer(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name="answers")
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="answers")
    submitted_answer = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)
    points_earned = models.PositiveIntegerField(default=0)
    answered_at = models.DateTimeField(auto_now_add=True)