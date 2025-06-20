from django.urls import path
from tour import views

urlpatterns = [
    path('', views.home,name='home'),
    path('toursite/', views.toursite,name='toursite'),
    path('offers/', views.offers,name='offers'),
    path('contact/', views.contact,name='contact'),
    path('search/', views.search,name='search'),
    path('activities/', views.activities,name='activities'),
    path('anit/', views.anit,name='anit'),
]