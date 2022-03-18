from django.db import models

# Create your models here.
class CategoryService(models.Model):
    name_service=models.CharField(max_length=255,blank=False)

    def __str__(self):
        return self.name_service # TODO

class Service(models.Model):
    name=models.CharField(max_length=100,blank=True)
    img=models.URLField(max_length=255,blank=True)
    category=models.ForeignKey(CategoryService,on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.name}<-->{self.category}" # TODO