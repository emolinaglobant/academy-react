from rest_framework.response import Response
from rest_framework.views import APIView
        
from apps.employees.models import Employee
from apps.employees.serializers import EmployeesSerializer

from rest_framework import viewsets

class EmployeesView(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeesSerializer


###################################################

from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from apps.employees.models import Gender,DocumentType,Employee, Position

import json

# Create your views here.
class Employees(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args,**kwargs):
        return super().dispatch(request, *args, **kwargs)
            
    def post (self,request,id=0,id_document=0,id_position=0):
        jd=json.loads(request.body)
        if (id>0):
            Employee.objects.get_or_create(name=jd['name'],last_name=jd['last_name'],gender=Gender(id=id),document_type=DocumentType(id=id_document),position=Position(id=id_position),date_birth=jd['date_birth'],cell=jd['cell'],img=jd['img'])
            datos={'message':'Success'}
            return JsonResponse(datos)
        else:
            datos={'message':'Los IDs tiene que ser > 0'}
            return JsonResponse(datos)
        # Service.objects.create(name=jd['name'],category_id=jd['category'])

    def delete (self,request,id):
        services=list(Employee.objects.filter(id=id).values())
        if len(services)>0:
            Employee.objects.filter(id=id).delete()
            datos={'message':'Success'}
        else:
            datos={'message':'service not found...'}
        return JsonResponse(datos)