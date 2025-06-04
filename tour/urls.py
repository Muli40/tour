from django.urls import path
from tour import views

urlpatterns = [
    path('', views.helo),
    
]
