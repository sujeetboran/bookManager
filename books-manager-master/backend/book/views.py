from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import JsonResponse,HttpResponse
from rest_framework.parsers import JSONParser

def data(request):
    if request.method=="GET":
        books=Book.objects.all()
        serialized=BookSerializer(books,many=True)
        return JsonResponse(serialized.data,safe=False)
    elif request.method=="POST":
        data=JSONParser.parse(request.POST)
        serializer=BookSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        else:
            return JsonResponse(serializer.errors,status=400)
        
