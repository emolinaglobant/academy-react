from django.contrib import admin
from apps.services.models import Service,CategoryService
# Register your models here.
class CategoryServiceAdmin(admin.ModelAdmin):
    list_display= ('name_service',)

class ServiceAdmin(admin.ModelAdmin):
    list_display=('name','category','img')

admin.site.register(CategoryService,CategoryServiceAdmin)
admin.site.register(Service,ServiceAdmin)