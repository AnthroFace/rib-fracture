from rest_framework import serializers
from .models import Patient
from .models import Fracture

class FractureSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fracture
        fields = ('pk', 'location', 'completeness', 'fracture_type')

# Connect both serializers maybe have many=True
class PatientSerializer(serializers.ModelSerializer):
    rib_fracture = FractureSerializer(many=True)

    class Meta:
        model = Patient
        fields = ('pk', 'case_id', 'age', 'sex', 'weight', 'ancestry', 'mod', 'cod', 'cod_type', 'xray', 'belted', 'obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 'prescription', 'drug_use', 'health_notes', 'rib_fracture')
