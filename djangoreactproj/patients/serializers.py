from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient 
        fields = ('pk', 'case_id', 'age', 'weight', 'mod', 'cod', 'add_notes')
