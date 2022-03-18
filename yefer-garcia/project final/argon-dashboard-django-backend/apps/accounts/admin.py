from .models import Profile, User

from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import (UserCreationForm)
from django.contrib.auth.forms import ReadOnlyPasswordHashField


class UserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['email']


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'password', 'is_active',)


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    # add_form = UserCreationForm
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'id', 'first_name', 'last_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')

    search_fields = ('email', 'last_name')
    ordering = ('email', 'date_joined')


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    pass



# admin.site.register(Testimony, TestimonyAdmin)
# admin.site.register(Profile)
