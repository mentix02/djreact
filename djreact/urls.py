from django.urls import path
from django.contrib import admin

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', obtain_auth_token),
]
