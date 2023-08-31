from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.status import ( HTTP_201_CREATED,
    HTTP_404_NOT_FOUND, HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT) 
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from .models import CustomUser
from horoscope_app.models import Horoscope
from horoscope_app.serializers import HoroscopeSerializer
from user_app.serializers import CustomUserSerializer 


# List all users and create a new user.
class CustomUserList(APIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

# CREATE A USER
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# GET ALL USERS
    def get(self, request):
        users= CustomUser.objects.all()
        serializer= CustomUserSerializer(users, many=True)
        return Response(serializer.data)

# Retrieve, update, or delete a specific user.
class CustomUserDetail(APIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        return instance
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = CustomUserSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_400_BAD_REQUEST)

# USER SIGN IN, SIGN OUT, SIGN UP------------------------------------------------------------------------
class Sign_up(APIView):
    def post(self, request):
        # Define the required fields directly here
        email = request.data.get("email")
        password = request.data.get("password")
        

        # Check if all required fields are provided
        if not email or not password:
            return Response({"message": "Email, and password are required fields."}, status=status.HTTP_400_BAD_REQUEST)

        # Create the user
        user = CustomUser.objects.create_user(
            username=email,
            email=email,
            password=password,
            # You can add other fields here as well
        )

# You can add additional logic or validation here
        token, created = Token.objects.get_or_create(user=user)
        return Response({"message": "User registered successfully.", "token" : token.key}, status=status.HTTP_201_CREATED)    
        
        
        
        
        
        
        
        
        
        
        # request.data["username"] = request.data["email"]
        # user = CustomUser.objects.create_user(**request.data)
        # token = Token.objects.create(user=user)
        # return Response(
        #     {"username": user.email, "token": token.key}, status=HTTP_201_CREATED
        # )



class Log_in(APIView):

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(username=email, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "user": user.email})
        else:
            return Response("No user matching credentials", status=HTTP_404_NOT_FOUND)

class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(username=email, password=password)
        request.user.auth_token.delete()
        return Response("Signed out successfully", status=HTTP_204_NO_CONTENT)







class ZodiacSignView(APIView):
    def get(self, request, pk):
        try:
            user = CustomUser.objects.get(pk=pk)
            zodiac_sign = user.calculate_zodiac_sign()  # Implement this method in your CustomUser model
            return Response({'zodiac_sign': zodiac_sign})
        except CustomUser.DoesNotExist:
            return Response({'detail': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)





class UserHoroscopeView(APIView):
    """
    Save and retrieve user horoscope data.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        try:
            horoscope = Horoscope.objects.get(user=user)
            serializer = CustomUserSerializer(horoscope)
            return Response(serializer.data)
        except Horoscope.DoesNotExist:
            return Response({'detail': 'Horoscope data not found.'}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        user = request.user
        horoscope_data = request.data.get('horoscope_data')  # Replace with the actual field name
        
        # Save horoscope data in the database
        horoscope, created = Horoscope.objects.get_or_create(
            user=user,
            defaults={'horoscope_data': horoscope_data}
        )

        serializer = CustomUserSerializer(horoscope)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class UserLuckyNumbersView(APIView):
    """
    Save and retrieve user lucky numbers.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        try:
            user_data = CustomUser.objects.get(pk=user.pk)
            lucky_numbers = user_data.saved_lucky_numbers
            return Response({'lucky_numbers': lucky_numbers})
        except CustomUser.DoesNotExist:
            return Response({'detail': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        user = request.user
        lucky_numbers = request.data.get('lucky_numbers')  # Replace with the actual field name
        
        # Update user's lucky numbers
        user.saved_lucky_numbers = lucky_numbers
        user.save()

        return Response({'detail': 'Lucky numbers saved successfully.'}, status=status.HTTP_200_OK)

# Create your views here.
