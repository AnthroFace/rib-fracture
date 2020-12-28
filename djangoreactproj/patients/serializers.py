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

    def create(self, validated_data):
        fractures_data = validated_data.pop('rib_fracture')
        pat = Patient.objects.create(**validated_data)

        for fracture_data in fractures_data:
            sections_data = fracture_data.pop('rib_section')

            for section_data in sections_data:
                Section.objects.create(fracture=Fracture.objects.create(patient=pat, **fracture_data), **section_data)
        
        return pat
