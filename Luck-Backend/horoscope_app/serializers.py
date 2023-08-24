from rest_framework import serializers
from .models import Horoscope

class HoroscopeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horoscope
        fields = '__all__'
