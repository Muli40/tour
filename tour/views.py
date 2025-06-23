from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'tour/Home.html')

def contact(request):
    return render(request, 'tour/contact.html')