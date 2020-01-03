from rest_framework import serializers
from . models import *

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=["title","author","genre","height","publisher"]

    def create(self,data):
        pass