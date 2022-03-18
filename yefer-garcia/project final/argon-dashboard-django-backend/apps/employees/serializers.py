from turtle import position
from rest_framework import serializers
from apps.employees.models import DocumentType, Employee, Gender, Position

class EmployeesSerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField(read_only=True)

    gender=serializers.StringRelatedField()
    document_type=serializers.StringRelatedField()
    position=serializers.StringRelatedField()


    class Meta:
        model = Employee
        fields = '__all__'

