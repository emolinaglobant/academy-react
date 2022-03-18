# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.contrib import admin
from django.urls import path, include  # add this

urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin route
    path("", include("apps.authentication.urls")),  # Auth routes - login / register
    path("", include("apps.home.urls")),  # UI Kits Html files
    path("api/v1/service/", include("apps.services.urls")),  # Api services
    path("api/v1/employee/", include("apps.employees.urls")),  # Api services
    path("api/service/", include("apps.services.urlsApi")),  # Api services
    path("api/employee/", include("apps.employees.urlsApi")),  # Api services

]
