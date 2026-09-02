from django.db import models
from django.contrib.auth.models import User

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming'),
        ('design', 'Design'),
        ('language', 'Language'),
        ('music', 'Music'),
        ('business', 'Business'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UserSkill(models.Model):
    PROFICIENCY_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('expert', 'Expert'),
    ]
    TYPE_CHOICES = [
        ('offering', 'Offering'),
        ('wanting', 'Wanting'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_skills')
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE, related_name='user_skills')
    proficiency = models.CharField(max_length=20, choices=PROFICIENCY_CHOICES, default='beginner')
    skill_type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    is_verified = models.BooleanField(default=False)
    verified_at = models.DateTimeField(null=True, blank=True)