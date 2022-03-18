from rest_framework.response import Response
from rest_framework.views import APIView
from apps.services.models import CategoryService,Service
from apps.services.serializers import CategoryServiceSerializer,ServiceSerializer
from rest_framework import viewsets

class CatServicesView(viewsets.ModelViewSet):
    queryset = CategoryService.objects.all()
    serializer_class = CategoryServiceSerializer

class ServicesView(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

##############################################################
from django.shortcuts import render
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from apps.services.models import CategoryService,Service
import json

class Services(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args,**kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post (self,request,id=0):
        jd=json.loads(request.body)
        if (id>0):
            Service.objects.get_or_create(name=jd['name'],img=jd['img'],category=CategoryService(id=id))
            datos={'message':'Success'}
            return JsonResponse(datos)
        else:
            datos={'message':'El id tiene que ser > 0'}
            return JsonResponse(datos)
        # Service.objects.create(name=jd['name'],category_id=jd['category'])
       
    def put (self,request,id):
        jd=json.loads(request.body)
        services=list(Service.objects.filter(id=id).values())
        if len(services)>0:
            service=Service.objects.get(id=id)
            service.name=jd['name']
            service.img=jd['img']
            service.save()
            datos={'message':'Success'}
        else:
            datos={'message':'services not found...'}
        return JsonResponse(datos)
        
    def delete (self,request,id):
        services=list(Service.objects.filter(id=id).values())
        if len(services)>0:
            Service.objects.filter(id=id).delete()
            datos={'message':'Success'}
        else:
            datos={'message':'service not found...'}
        return JsonResponse(datos)
        
        