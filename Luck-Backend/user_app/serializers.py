from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    zodiac_sign = serializers.CharField(read_only=True)  # This field is calculated, not provided by user

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'birthdate', 'zodiac_sign', 'saved_lucky_numbers']
