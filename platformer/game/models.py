from django.contrib.auth.models import User
from django.db import models


class FinalScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    score = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

