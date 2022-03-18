from django.contrib import admin
from apps.employees.models import Employee,Gender,DocumentType,Position

# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
    list_display=('id','name','last_name','gender','document_type','position','date_birth','cell','img')
class GenderAdmin(admin.ModelAdmin):
    list_display=('id','short_name','long_name')
class DocumentTypeAdmin(admin.ModelAdmin):
    list_display=('id','long_name','short_name','character_length','type_character')
class PositionAdmin(admin.ModelAdmin):
    list_display=('id','name',)

admin.site.register(Employee,EmployeeAdmin)
admin.site.register(Gender,GenderAdmin)
admin.site.register(DocumentType,DocumentTypeAdmin)
admin.site.register(Position,PositionAdmin)