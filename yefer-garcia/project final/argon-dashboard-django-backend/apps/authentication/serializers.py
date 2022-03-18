from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _
from apps.accounts.models import User


class AuthCustomTokenSerializer(serializers.Serializer):
    email = serializers.CharField(
        label=_("Email"),
        write_only=True
    )
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    token = serializers.CharField(
        label=_("Token"),
        read_only=True
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'),
                                username=email, password=password)

            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')

            if not user.is_active:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')

        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')
            # raise serializers.ValidationError({
            #     'address': _('Another user has already been registered under this address.')
            # })

        attrs['user'] = user
        return attrs


class RegisterCustomSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password], )
    password2 = serializers.CharField(write_only=True, required=True, validators=[validate_password], )
    token = serializers.CharField(read_only=True, )

    def validate_email(self, value):  # validacion especifica
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError({'email': 'Email exist!'})

        return value.lower()

    def validate(self, attrs):  # todos los campos
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({'password': "Password fields didn't match"})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'],
                                   first_name=validated_data['first_name'],
                                   last_name=validated_data['last_name'], )
        user.set_password(validated_data['password'])
        user.save()

        token, created = Token.objects.get_or_create(user=user)
        user.token = token
        return user

    class Meta:
        model = User
        fields = ('password', 'password2', 'email', 'token', 'first_name', 'last_name',)
