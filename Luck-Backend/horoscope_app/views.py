from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime


from .models import Horoscope
from .serializers import HoroscopeSerializer

class HoroscopeView(APIView):
    """
    Retrieve and store horoscope data.
    """
    def get(self, request, zodiac_sign):  # Modified to accept zodiac_sign parameter
        
        # Save horoscope data in the database
        horoscope, created = Horoscope.objects.get_or_create(
            user=request.user,
            zodiac_sign=zodiac_sign,
            defaults={'horoscope_data': ''}
        )
 
        serializer = HoroscopeSerializer(horoscope)
        return Response(serializer.data)

# def determine_zodiac_sign(birthdate):
#     # Use birthdate to determine the user's zodiac sign
#     # Return the zodiac sign (e.g., 'aries', 'taurus', etc.)
#     # Implement the logic to compare birthdate with zodiac date ranges
#     pass







# def fetch_horoscope_data(zodiac_sign, day):
#     aztro_url = f'https://aztro.sameerkumar.website/?sign={zodiac_sign}&day={day}'
#     response = request.post(aztro_url)
    
#     if response.status_code == 200:
#         data = response.json()
#         return data
#     else:
#         # Handle API error
#         return None

# Create your views here.
