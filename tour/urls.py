from django.urls import path
from tour import views

urlpatterns = [
    path('', views.home,name='home'),
    path('toursite/', views.offers,name='toursite'),
    path('offers/', views.offers,name='offers'),
    path('contact/', views.offers,name='contact'),
    path('search/', views.offers,name='search'),
    path('activities/', views.offers,name='activities'),
    path('anit/', views.offers,name='anit'),
]