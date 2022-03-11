from django.urls import path
from apps.services.views import Services

urlpatterns = [
    path('services',Services.as_view(),name='services'),
    path('services/<int:id>',Services.as_view(),name='service'),
]