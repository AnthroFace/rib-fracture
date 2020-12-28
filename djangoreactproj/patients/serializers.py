from rest_framework import serializers
from .models import Patient
from .models import Fracture
from .models import Section

class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = ('id', 'section', 'completeness', 'fracture_type', 'cpr')

class FractureSerializer(serializers.ModelSerializer):
    rib_section = SectionSerializer(many=True)

    class Meta:
        model = Fracture
        fields = ('id', 'location', 'rib_section')

# Connect both serializers maybe have many=True
class PatientSerializer(serializers.ModelSerializer):
    rib_fracture = FractureSerializer(many=True)

    class Meta:
        model = Patient
        fields = ('pk', 'case_id', 'age', 'sex', 'weight', 'ancestry', 'mod', 'cod', 'cod_type', 'xray', 'belted', 'obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 'prescription', 'drug_use', 'health_notes', 'rib_fracture')
