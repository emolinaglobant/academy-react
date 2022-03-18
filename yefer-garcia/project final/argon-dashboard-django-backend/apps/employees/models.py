from django.db import models

# Create your models here.
class Gender(models.Model):
    short_name = models.CharField(max_length=5, )
    long_name = models.CharField(max_length=100, )
    is_active = models.BooleanField(default=True, )

    def __str__(self):
        return self.long_name


class DocumentType(models.Model):
    long_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=55)
    character_length = models.SmallIntegerField()
    type_character = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.short_name

class Position(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Employee(models.Model):
    name=models.CharField(max_length=100,blank=False)
    last_name=models.CharField(max_length=100,blank=False)
    gender = models.ForeignKey(Gender,on_delete=models.CASCADE)
    document_type = models.ForeignKey(DocumentType,on_delete=models.CASCADE)
    position = models.ForeignKey(Position,on_delete=models.CASCADE)
    date_birth=models.DateField(blank=False)
    cell=models.IntegerField(blank=False)
    img=models.URLField(max_length=255)

    def __str__(self):
        return f"{self.name}<-->{self.last_name}" # TODO
        
    def _gender(self):
        return self.gender.long_name

    def _document_type(self):
        return self.document_type.short_name