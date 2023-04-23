from django.shortcuts import render
from django.shortcuts import HttpResponse


def about(request):
    # return HttpResponse('Hi There, i,am Saeed')
    return render(request, 'about.html')

def home(request):
    # return HttpResponse('Hi There, This Is Home Page')
    return render(request, 'Home.html')