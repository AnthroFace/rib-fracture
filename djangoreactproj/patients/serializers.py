from rest_framework import serializers
from .models import Patient
from .models import Fracture

class FractureSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fracture
        fields = ('pk', 'location', 'completeness', 'fracture_type', 'cpr')


class PatientSerializer(serializers.ModelSerializer):
    rib_fracture = FractureSerializer(many=True)

    class Meta:
        model = Patient
        fields = ('pk', 'case_id', 'age', 'sex', 'weight', 'height', 'ancestry', 'mod', 'cod', 'cod_type', 'xray', 'cpr','belted', 'obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 'prescription', 'drug_use', 'health_notes', 'notes', 'rib_fracture')

    def create(self, validated_data):
        fractures_data = validated_data.pop('rib_fracture')
        pat = Patient.objects.create(**validated_data)

        for fracture_data in fractures_data:
            Fracture.objects.create(patient=pat, **fracture_data)
        return pat

    def update(self, instance, validated_data):
        fractures_data = validated_data.pop('rib_fracture')
        fractures = (instance.rib_fracture).all()
        fractures = list(fractures)

        instance.case_id = validated_data.get('case_id', instance.case_id)
        instance.age = validated_data.get('age', instance.age)
        instance.sex = validated_data.get('sex', instance.sex)
        instance.weight = validated_data.get('weight', instance.weight)
        instance.height = validated_data.get('height', instance.height)
        instance.ancestry = validated_data.get('ancestry', instance.ancestry)
        instance.mod = validated_data.get('mod', instance.mod)
        instance.cod = validated_data.get('cod', instance.cod)
        instance.cod_type = validated_data.get('cod_type', instance.cod_type)
        instance.xray = validated_data.get('xray', instance.xray)
        instance.cpr = validated_data.get('cpr', instance.cpr)
        instance.belted = validated_data.get('belted', instance.belted)
        instance.obese = validated_data.get('obese', instance.obese)
        instance.cardio = validated_data.get('cardio', instance.cardio)
        instance.patho = validated_data.get('patho', instance.patho)
        instance.tobacco = validated_data.get('tobacco', instance.tobacco)
        instance.marijuana = validated_data.get('marijuana', instance.marijuana)
        instance.alcohol = validated_data.get('alcohol', instance.alcohol)
        instance.prescription = validated_data.get('prescription', instance.prescription)
        instance.drug_use = validated_data.get('drug_use', instance.drug_use)
        instance.health_notes = validated_data.get('health_notes', instance.health_notes)
        instance.notes = validated_data.get('notes', instance.notes)
        instance.save()

        for fracture_data in fractures_data:
                fracture = fractures.pop(0)
                fracture.location = fracture_data.get('location', fracture.location)
                fracture.completeness = fracture_data.get('completeness', fracture.completeness)
                fracture.fracture_type = fracture_data.get('fracture_type', fracture.fracture_type)
                fracture.cpr = fracture_data.get('cpr', fracture.cpr)
                fracture.save()
        return instance
