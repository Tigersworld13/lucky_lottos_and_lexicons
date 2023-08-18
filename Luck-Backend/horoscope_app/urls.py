from django.urls import path
from .views import HoroscopeView

urlpatterns = [
    path('horoscopes/', HoroscopeView.as_view(), name='horoscope'),
]
