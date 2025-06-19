from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
        return render(request,'tour/toursite.html')

def offers(request):
        return render(request,'tour/offers.html')

def contact(request):
        return render(request,'tour/Contact.html')

def search(request):
        return render(request,'tour/search.html')

def activities(request):
        return render(request,'tour/activities.html')

def anit(request):
        return render(request,'tour/anit.html')

def toursite(request):
        return render(request,'tour/toursite.html')

