from rest_framework import serializers
from .models import Patient
from .models import Fracture
from .models import Section

class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = ('id', 'section', 'completeness', 'fracture_type', 'cpr')


class FractureSerializer(serializers.ModelSerializer):
    #rib_section = SectionSerializer(many=True)

    class Meta:
        model = Fracture
        #fields = ('id', 'location', 'rib_section')
        fields = ('id', 'location')

# Connect both serializers maybe have many=True
class PatientSerializer(serializers.ModelSerializer):
    rib_fracture = FractureSerializer(many=True)

    class Meta:
        model = Patient
        fields = ('pk', 'case_id', 'age', 'sex', 'weight', 'ancestry', 'mod', 'cod', 'cod_type', 'xray', 'belted', 'obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 'prescription', 'drug_use', 'health_notes', 'rib_fracture')

    #def create(self, validated_data):
    #    fractures_data = validated_data.pop('rib_fracture')
    #    pat = Patient.objects.create(**validated_data)

    #    for fracture_data in fractures_data:
    #        sections_data = fracture_data.pop('rib_section')
    #        for section_data in sections_data:
    #            Section.objects.create(fracture=Fracture.objects.create(patient=pat, **fracture_data), **section_data)
    #    return pat

    def create(self, validated_data):
        fractures_data = validated_data.pop('rib_fracture')
        pat = Patient.objects.create(**validated_data)
        for fracture_data in fractures_data:
            Fracture.objects.create(patient=pat, **fracture_data)
        return pat

    #def update(self, instance, validated_data):
    #    fractures_data = validated_data.pop('rib_fracture')
    #    fractures = (instance.rib_fracture).all()
    #    fractures = list(fractures)

    #    instance.case_id = validated_data.get('case_id', instance.case_id)
    #    instance.age = validated_data.get('age', instance.age)
    #    instance.sex = validated_data.get('sex', instance.sex)
    #    instance.weight = validated_data.get('weight', instance.weight)
    #    instance.ancestry = validated_data.get('ancestry', instance.ancestry)
    #    instance.mod = validated_data.get('mod', instance.mod)
    #    instance.cod = validated_data.get('cod', instance.cod)
    #    instance.cod_type = validated_data.get('cod_type', instance.cod_type)
    #    instance.xray = validated_data.get('xray', instance.xray)
    #    instance.belted = validated_data.get('belted', instance.belted)
    #    instance.obese = validated_data.get('obese', instance.obese)
    #    instance.cardio = validated_data.get('cardio', instance.cardio)
    #    instance.patho = validated_data.get('patho', instance.patho)
    #    instance.tobacco = validated_data.get('tobacco', instance.tobacco)
    #    instance.marijuana = validated_data.get('marijuana', instance.marijuana)
    #    instance.alcohol = validated_data.get('alcohol', instance.alcohol)
    #    instance.prescription = validated_data.get('prescription', instance.prescription)
    #    instance.drug_use = validated_data.get('drug_use', instance.drug_use)
    #    instance.health_notes = validated_data.get('health_notes', instance.health_notes)
    #    instance.save()

    #    for fracture_data in fractures_data:
    #        fracture = fractures.pop(0)
    #        fracture.location = fractures_data.get('location', fracture.location)

    #        sections_data = fracture_data.pop('rib_section')
    #        sections = (facture.rib_section).all()
    #        sections = list(sections)
    #        for section_data in sections_data:
    #            section = sections.pop(0)

    #            section.section = section_data.get('section', section.section)
    #            section.completeness = section_data.get('completeness', section.completeness)
    #            section.fracture_type = section_data.get('fracture_type', section.fracture_type)
    #            section.cpr = section_data.get('cpr', section.cpr)

    #            section.save()
    #        fracture.save()