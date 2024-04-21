from rest_framework import serializers
from .models import Obesity

class obs(serializers.ModelSerializer):
    class Meta:
        model = Obesity
        fields = '__all__'