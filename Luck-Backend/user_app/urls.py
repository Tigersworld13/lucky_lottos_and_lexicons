from django.urls import path
from .views import CustomUserList, CustomUserDetail, ZodiacSignView, Log_in, Log_out, Sign_up 

urlpatterns = [
    path('signup/', Sign_up.as_view(), name='user-signup'),
    path('signin/', Log_in.as_view(), name='user-signin'),
    path('signout/', Log_out.as_view(), name='user-signout'),
    path('', CustomUserList.as_view(), name='user-list'),
    path('<int:pk>/', CustomUserDetail.as_view(), name='user-detail'),
    path('<int:pk>/zodiac/', ZodiacSignView.as_view(), name='user-zodiac'),
]


# users/: This URL will be used to list all users and create a new user. It's handled by the CustomUserList view.
# users/<int:pk>/: This URL pattern includes the user's primary key and will be used to retrieve, update, or delete a specific user. It's handled by the CustomUserDetail view.
# users/<int:pk>/zodiac/: This URL pattern is used to retrieve the calculated zodiac sign for a specific user. It's handled by the ZodiacSignView view.

# TO DO
# define these views (CustomUserList, CustomUserDetail, and ZodiacSignView) based on your application's requirements. Make sure to import these views in your urls.py file as well.
# complete