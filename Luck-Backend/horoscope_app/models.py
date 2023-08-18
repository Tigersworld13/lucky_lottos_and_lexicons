from django.db import models
from user_app.models import CustomUser

# Create your models here.

class Horoscope(models.Model):
    zodiac_sign = models.CharField(max_length=20, unique=True)
    horoscope_data = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=1)