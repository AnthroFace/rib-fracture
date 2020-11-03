from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ('pk','first_name', 'last_name', 'email', 'phone','address','description')