from rest_framework import serializers
from apps.services.models import CategoryService,Service

class CategoryServiceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = CategoryService
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = Service
        fields = '__all__'