from django.urls import path
from apps.employees.views import Employees 

urlpatterns = [
    path('employees/<int:id>/<int:id_document>/<int:id_position>',Employees.as_view(),name='employees_new'),
    path('employees/<int:id>',Employees.as_view(),name='employees_delete'),
]