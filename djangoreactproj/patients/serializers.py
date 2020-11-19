from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ('pk','case_id', 'age', 'sex', 'weight','ancestry','mod', 'cod', 'cod_type', 'xray', 'belted', 'obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alchohol', 'prescription', 'drug_use', 'health_notes', 'add_notes')