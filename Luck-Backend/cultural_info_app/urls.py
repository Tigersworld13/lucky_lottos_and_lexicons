from django.urls import path
from .views import CulturalLuckInformationList, CulturalLuckInformationDetail

urlpatterns = [
    path('cultural-info/', CulturalLuckInformationList.as_view(), name='cultural-info-list'),
    path('cultural-info/<int:pk>/', CulturalLuckInformationDetail.as_view(), name='cultural-info-detail'),
]
