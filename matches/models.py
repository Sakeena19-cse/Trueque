from django.db import models
from django.contrib.auth.models import User
from skills.models import UserSkill
import uuid

class Match(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed'),
    ]

    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='matches_initiated')
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='matches_received')
    user1_skill = models.ForeignKey(UserSkill, on_delete=models.CASCADE, related_name='matches_as_user1_skill')
    user2_skill = models.ForeignKey(UserSkill, on_delete=models.CASCADE, related_name='matches_as_user2_skill')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    is_chain_match = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user1.username} <-> {self.user2.username} ({self.status})"


class Session(models.Model):
    STATUS_CHOICES = [
        ('scheduled', 'Scheduled'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    match = models.ForeignKey(Match, on_delete=models.CASCADE, related_name='sessions')
    scheduled_time = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='scheduled')
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    room_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    learning_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"Session for {self.match} at {self.scheduled_time}"

    @property
    def video_call_url(self):
        return f"https://meet.jit.si/trueque-{self.room_id}"

    @property
    def teacher(self):
        return self.match.user1 if self.match.user1_skill.skill_type == 'offering' else self.match.user2

    @property
    def learner(self):
        return self.match.user1 if self.match.user1_skill.skill_type == 'wanting' else self.match.user2
    


class Review(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='reviews')
    reviewer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_given')
    reviewee = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_received')
    rating = models.PositiveSmallIntegerField()  # 1-5
    feedback = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.reviewer.username} -> {self.reviewee.username}: {self.rating}★"