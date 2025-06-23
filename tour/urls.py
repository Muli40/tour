from django.urls import path
from tour import views
app_name = 'tour'

urlpatterns = [
    path('', views.home, name='home'),          
    path('contact/', views.contact, name='contact'),  # Contact page
]