from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CulturalLuckInformation
from .serializers import CulturalLuckInformationSerializer



# Create your views here!

# NOTES: I've created two views: ****CulturalLuckInformationList**** 
# and ****CulturalLuckInformationDetail****. The CulturalLuckInformationList view 
# handles listing all cultural luck information and creating new ones, 
# while the CulturalLuckInformationDetail view handles retrieving, 
# updating, and deleting individual instances.




# REMINDER  
# The CulturalLuckInformationList view 
# handles listing all cultural luck information and creating new ones,
class CulturalLuckInformationList(APIView):
    """
    List all cultural luck information or create a new one.
    """
    def get(self, request):
        cultural_info = CulturalLuckInformation.objects.all()
        serializer = CulturalLuckInformationSerializer(cultural_info, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CulturalLuckInformationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# REMINDER
# the CulturalLuckInformationDetail view handles retrieving, 
# updating, and deleting individual instances.

class CulturalLuckInformationDetail(APIView):
    """
    Retrieve, update or delete a cultural luck information instance.
    """
    def get_object(self, pk):
        try:
            return CulturalLuckInformation.objects.get(pk=pk)
        except CulturalLuckInformation.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        cultural_info = self.get_object(pk)
        serializer = CulturalLuckInformationSerializer(cultural_info)
        return Response(serializer.data)

    def put(self, request, pk):
        cultural_info = self.get_object(pk)
        serializer = CulturalLuckInformationSerializer(cultural_info, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        cultural_info = self.get_object(pk)
        cultural_info.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






