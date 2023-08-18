from rest_framework import serializers
from .models import CulturalLuckInformation

class CulturalLuckInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalLuckInformation
        fields = '__all__'

