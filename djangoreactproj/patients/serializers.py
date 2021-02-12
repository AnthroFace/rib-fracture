from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ('pk', 'case_id', 'age', 'sex', 'weight', 'height', 'ancestry', 'mod', 'cod', 'cod_type', 
                  'xray', 'cpr','belted','obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 
                  'prescription', 'drug_use', 'health_notes', 'notes', 'sternum', 'cpr_sternum', 'lprib1',
                  'com_lprib1', 'type_lprib1', 'lplrib1', 'com_lplrib1', 'type_lplrib1','lalrib1', 'com_lalrib1', 
                  'type_lalrib1', 'lprib2', 'com_lprib2', 'type_lprib2', 'lplrib2', 'com_lplrib2', 'type_lplrib2',
                  'lalrib2', 'com_lalrib2', 'type_lalrib2', 'larib2', 'com_larib2', 'type_larib2', 'lprib3',
                  'com_lprib3', 'type_lprib2', 'lplrib2', 'com_lplrib2', 'type_lplrib2','lalrib3', 'com_lalrib3', 
                  'type_lalrib3', 'larib3', 'com_larib3', 'type_larib3', 'lprib4', 'com_lprib4', 'type_lprib4', 
                  'lplrib4', 'com_lplrib4', 'type_lplrib4','lalrib4', 'com_lalrib4', 'type_lalrib4', 'larib4', 
                  'com_larib4', 'type_larib4','lprib5', 'com_lprib5', 'type_lprib5', 'lplrib5', 'com_lplrib5', 
                  'type_lplrib5','lalrib5', 'com_lalrib5', 'type_lalrib5', 'larib5', 'com_larib5', 'type_larib5',
                  'lprib6', 'com_lprib6', 'type_lprib6', 'lplrib6', 'com_lplrib6', 'type_lplrib6','lalrib6', 
                  'com_lalrib6', 'type_lalrib6', 'larib6', 'com_larib6', 'type_larib6','lprib7', 'com_lprib7', 
                  'type_lprib7', 'lplrib7', 'com_lplrib7', 'type_lplrib7','lalrib7', 'com_lalrib7', 
                  'type_lalrib7', 'larib7', 'com_larib7', 'type_larib7', 'lprib8', 'com_lprib8', 'type_lprib8', 
                  'lplrib8', 'com_lplrib8', 'type_lplrib8','lalrib8', 'com_lalrib8', 'type_lalrib8', 'larib8', 
                  'com_larib8', 'type_larib8', 'lprib9', 'com_lprib9', 'type_lprib9', 'lplrib9', 'com_lplrib9', 
                  'type_lplrib9','lalrib9', 'com_lalrib9', 'type_lalrib9', 'larib9', 'com_larib9', 'type_larib9',
                  'lprib10', 'com_lprib10', 'type_lprib10', 'lplrib10', 'com_lplrib10', 'type_lplrib10',
                  'lalrib10', 'com_lalrib10', 'type_lalrib10', 'larib10', 'com_larib10', 'type_larib10',
                  'lprib11', 'com_lprib11', 'type_lprib11', 'lplrib11', 'com_lplrib11', 'type_lplrib11',
                  'lalrib11', 'com_lalrib11', 'type_lalrib11', 'lprib12', 'com_lprib12', 'type_lprib12', 
                  'lplrib12', 'com_lplrib12', 'type_lplrib12','lalrib12', 'com_lalrib12', 'type_lalrib12', 'rprib1',
                  'com_rprib1', 'type_rprib1', 'rplrib1', 'com_rplrib1', 'type_rplrib1','ralrib1', 'com_ralrib1', 
                  'type_ralrib1', 'rprib2', 'com_rprib2', 'type_rprib2', 'rplrib2', 'com_rplrib2', 'type_rplrib2',
                  'ralrib2', 'com_ralrib2', 'type_ralrib2', 'rarib2', 'com_rarib2', 'type_rarib2', 'rprib3',
                  'com_rprib3', 'type_rprib2', 'rplrib2', 'com_rplrib2', 'type_rplrib2','ralrib3', 'com_lalrib3', 
                  'type_ralrib3', 'rarib3', 'com_rarib3', 'type_rarib3', 'rprib4', 'com_rprib4', 'type_lprib4', 
                  'rplrib4', 'com_rplrib4', 'type_rplrib4','ralrib4', 'com_ralrib4', 'type_ralrib4', 'rarib4', 
                  'com_rarib4', 'type_rarib4','rprib5', 'com_rprib5', 'type_rprib5', 'rplrib5', 'com_rplrib5', 
                  'type_rplrib5','ralrib5', 'com_ralrib5', 'type_ralrib5', 'rarib5', 'com_rarib5', 'type_rarib5',
                  'rprib6', 'com_rprib6', 'type_rprib6', 'rplrib6', 'com_rplrib6', 'type_rplrib6','ralrib6', 
                  'com_ralrib6', 'type_ralrib6', 'rarib6', 'com_rarib6', 'type_rarib6','rprib7', 'com_rprib7', 
                  'type_rprib7', 'rplrib7', 'com_rplrib7', 'type_rplrib7','ralrib7', 'com_ralrib7', 
                  'type_ralrib7', 'rarib7', 'com_rarib7', 'type_rarib7', 'rprib8', 'com_rprib8', 'type_rprib8', 
                  'rplrib8', 'com_rplrib8', 'type_rplrib8','ralrib8', 'com_ralrib8', 'type_ralrib8', 'rarib8', 
                  'com_rarib8', 'type_rarib8', 'rprib9', 'com_rprib9', 'type_rprib9', 'rplrib9', 'com_rplrib9', 
                  'type_rplrib9','ralrib9', 'com_ralrib9', 'type_ralrib9', 'rarib9', 'com_rarib9', 'type_rarib9',
                  'rprib10', 'com_rprib10', 'type_rprib10', 'rplrib10', 'com_rplrib10', 'type_rplrib10',
                  'ralrib10', 'com_ralrib10', 'type_ralrib10', 'rarib10', 'com_rarib10', 'type_rarib10',
                  'rprib11', 'com_rprib11', 'type_rprib11', 'rplrib11', 'com_rplrib11', 'type_rplrib11',
                  'ralrib11', 'com_ralrib11', 'type_ralrib11','rprib12', 'com_rprib12', 'type_rprib12', 'rplrib12', 
                  'com_rplrib12', 'type_rplrib12','ralrib12', 'com_ralrib12', 'typerlalrib12')

    def to_internal_value(self,data):
        if data.get('age') == "":
            data['age'] = None
        if data.get('weight') == "":
            data['weight'] = None
        if data.get('height') == "":
            data['height'] = None
        if data.get('sternum') == "":
            data['sternum'] = None
        if data.get('lprib1') == "":
            data['lprib1'] = None
        if data.get('com_lprib1') == "":
            data['com_lprib1'] = None
        if data.get('lplrib1') == "":
            data['lplrib1'] = None
        if data.get('com_lplrib1') == "":
            data['com_lplrib1'] = None
        if data.get('lalrib1') == "":
            data['lalrib1'] = None
        if data.get('com_lalrib1') == "":
            data['com_lalrib1'] = None
        if data.get('lprib2') == "":
            data['lprib2'] = None
        if data.get('com_lprib2') == "":
            data['com_lprib2'] = None
        if data.get('lplrib2') == "":
            data['lplrib2'] = None
        if data.get('com_lplrib2') == "":
            data['com_lplrib2'] = None
        if data.get('lalrib2') == "":
            data['lalrib2'] = None
        if data.get('com_lalrib2') == "":
            data['com_lalrib2'] = None
        if data.get('larib2') == "":
            data['larib2'] = None
        if data.get('com_larib2') == "":
            data['com_larib2'] = None
        if data.get('lprib3') == "":
            data['lprib3'] = None
        if data.get('com_lprib3') == "":
            data['com_lprib3'] = None
        if data.get('lplrib3') == "":
            data['lplrib3'] = None
        if data.get('com_lplrib3') == "":
            data['com_lplrib3'] = None
        if data.get('lalrib3') == "":
            data['lalrib3'] = None
        if data.get('com_lalrib3') == "":
            data['com_lalrib3'] = None
        if data.get('larib3') == "":
            data['larib3'] = None
        if data.get('com_larib3') == "":
            data['com_larib3'] = None
        if data.get('lprib4') == "":
            data['lprib4'] = None
        if data.get('com_lprib4') == "":
            data['com_lprib4'] = None
        if data.get('lplrib4') == "":
            data['lplrib4'] = None
        if data.get('com_lplrib4') == "":
            data['com_lplrib4'] = None
        if data.get('lalrib4') == "":
            data['lalrib4'] = None
        if data.get('com_lalrib4') == "":
            data['com_lalrib4'] = None
        if data.get('larib4') == "":
            data['larib4'] = None
        if data.get('com_larib4') == "":
            data['com_larib4'] = None
        if data.get('lprib5') == "":
            data['lprib5'] = None
        if data.get('com_lprib5') == "":
            data['5'] = None
        if data.get('lplrib5') == "":
            data['lplrib5'] = None
        if data.get('com_lplrib5') == "":
            data['com_lplrib5'] = None
        if data.get('lalrib5') == "":
            data['lalrib5'] = None
        if data.get('com_lalrib5') == "":
            data['com_lalrib5'] = None
        if data.get('larib5') == "":
            data['larib5'] = None
        if data.get('com_larib5') == "":
            data['com_larib5'] = None
        if data.get('lprib6') == "":
            data['lprib6'] = None
        if data.get('com_lprib6') == "":
            data['com_lprib6'] = None
        if data.get('lplrib6') == "":
            data['lplrib6'] = None
        if data.get('com_lplrib6') == "":
            data['com_lplrib6'] = None
        if data.get('lalrib6') == "":
            data['lalrib6'] = None
        if data.get('com_lalrib6') == "":
            data['com_lalrib6'] = None
        if data.get('larib6') == "":
            data['larib6'] = None
        if data.get('com_larib6') == "":
            data['com_larib6'] = None
        if data.get('lprib7') == "":
            data['lprib7'] = None
        if data.get('com_lprib7') == "":
            data['com_lprib7'] = None
        if data.get('lplrib7') == "":
            data['lplrib7'] = None
        if data.get('com_lplrib7') == "":
            data['com_lplrib7'] = None
        if data.get('lalrib7') == "":
            data['lalrib7'] = None
        if data.get('com_lalrib7') == "":
            data['com_lalrib7'] = None
        if data.get('larib7') == "":
            data['larib7'] = None
        if data.get('com_larib7') == "":
            data['com_larib7'] = None
        if data.get('lprib8') == "":
            data['lprib8'] = None
        if data.get('com_lprib8') == "":
            data['com_lprib8'] = None
        if data.get('lplrib8') == "":
            data['lplrib8'] = None
        if data.get('com_lplrib8') == "":
            data['com_lplrib8'] = None
        if data.get('lalrib8') == "":
            data['lalrib8'] = None
        if data.get('com_lalrib8') == "":
            data['com_lalrib8'] = None
        if data.get('larib8') == "":
            data['larib8'] = None
        if data.get('com_larib8') == "":
            data['com_larib8'] = None
        if data.get('lprib9') == "":
            data['lprib9'] = None
        if data.get('com_lprib9') == "":
            data['com_lprib9'] = None
        if data.get('lplrib9') == "":
            data['lplrib9'] = None
        if data.get('com_lplrib9') == "":
            data['com_lplrib9'] = None
        if data.get('lalrib9') == "":
            data['lalrib9'] = None
        if data.get('com_lalrib9') == "":
            data['com_lalrib9'] = None
        if data.get('larib9') == "":
            data['larib9'] = None
        if data.get('com_larib9') == "":
            data['com_larib9'] = None
        if data.get('lprib10') == "":
            data['lprib10'] = None
        if data.get('com_lprib10') == "":
            data['com_lprib10'] = None
        if data.get('lplrib10') == "":
            data['lplrib10'] = None
        if data.get('com_lplrib10') == "":
            data['com_lplrib10'] = None
        if data.get('lalrib10') == "":
            data['lalrib10'] = None
        if data.get('com_lalrib10') == "":
            data['com_lalrib10'] = None
        if data.get('larib10') == "":
            data['larib10'] = None
        if data.get('com_larib10') == "":
            data['com_larib10'] = None
        if data.get('lprib11') == "":
            data['lprib11'] = None
        if data.get('com_lprib11') == "":
            data['com_lprib11'] = None
        if data.get('lplrib11') == "":
            data['lplrib11'] = None
        if data.get('com_lplrib11') == "":
            data['com_lplrib11'] = None
        if data.get('lalrib11') == "":
            data['lalrib11'] = None
        if data.get('com_lalrib11') == "":
            data['com_lalrib11'] = None
        if data.get('lprib12') == "":
            data['lprib12'] = None
        if data.get('com_lprib12') == "":
            data['com_lprib12'] = None
        if data.get('lplrib12') == "":
            data['lplrib12'] = None
        if data.get('com_lplrib12') == "":
            data['com_lplrib12'] = None
        if data.get('lalrib12') == "":
            data['lalrib12'] = None
        if data.get('com_lalrib12') == "":
            data['com_lalrib12'] = None
        return super(PatientSerializer,self).to_internal_value(data)
    
    def create(self, validated_data):
        return  Patient.objects.create(**validated_data)

    def update(self, instance, validated_data):
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
        instance.sternum = validated_data.get('sternum', instance.sternum)
        instance.cpr_sternum = validated_data.get('sternum', instance.cpr_sternum)
        instance.lprib1 = validated_data.get('lprib1', instance.lprib1)
        instance.com_lprib1 = validated_data.get('com_lprib1', instance.com_lprib1)
        instance.type_lprib1 = validated_data.get('type_lprib1', instance.type_lprib1)
        instance.lplrib1 = validated_data.get('lplrib1', instance.lplrib1)
        instance.com_lplrib1 = validated_data.get('com_lplrib1', instance.com_lplrib1)
        instance.type_lplrib1 = validated_data.get('type_lplrib1', instance.type_lplrib1)
        instance.lalrib1 = validated_data.get('lalrib1', instance.lalrib1)
        instance.com_lalrib1 = validated_data.get('com_lalrib1', instance.com_lalrib1)
        instance.type_lalrib1 = validated_data.get('type_lalrib1', instance.type_lalrib1)
        instance.lprib2 = validated_data.get('lprib2', instance.lprib2)
        instance.com_lprib2 = validated_data.get('com_lprib2', instance.com_lprib2)
        instance.type_lprib2 = validated_data.get('type_lprib2', instance.type_lprib2)
        instance.lplrib2 = validated_data.get('lplrib2', instance.lplrib2)
        instance.com_lplrib2 = validated_data.get('com_lplrib2', instance.com_lplrib2)
        instance.type_lplrib2 = validated_data.get('type_lplrib2', instance.type_lplrib2)
        instance.lalrib2 = validated_data.get('lalrib2', instance.lalrib2)
        instance.com_lalrib2 = validated_data.get('com_lalrib2', instance.com_lalrib2)
        instance.type_lalrib2 = validated_data.get('type_lalrib2', instance.type_lalrib2)
        instance.larib2 = validated_data.get('larib2', instance.larib2)
        instance.com_larib2 = validated_data.get('com_larib2', instance.com_lalrib2)
        instance.type_larib2 = validated_data.get('type_larib2', instance.type_larib2)
        instance.lprib3 = validated_data.get('lprib3', instance.lprib3)
        instance.com_lprib3 = validated_data.get('com_lprib3', instance.com_lprib3)
        instance.type_lprib3 = validated_data.get('type_lprib3', instance.type_lprib3)
        instance.lplrib3 = validated_data.get('lplrib3', instance.lplrib3)
        instance.com_lplrib3 = validated_data.get('com_lplrib3', instance.com_lplrib3)
        instance.type_lplrib3 = validated_data.get('type_lplrib3', instance.type_lplrib3)
        instance.lalrib3 = validated_data.get('lalrib3', instance.lalrib3)
        instance.com_lalrib3 = validated_data.get('com_lalrib3', instance.com_lalrib3)
        instance.type_lalrib3 = validated_data.get('type_lalrib3', instance.type_lalrib3)
        instance.larib3 = validated_data.get('larib2', instance.larib3)
        instance.com_larib3 = validated_data.get('com_larib3', instance.com_lalrib3)
        instance.type_larib3 = validated_data.get('type_larib2', instance.type_larib3)
        instance.lprib4 = validated_data.get('lprib2', instance.lprib2)
        instance.com_lprib4 = validated_data.get('com_lprib4', instance.com_lprib4)
        instance.type_lprib4 = validated_data.get('type_lprib4', instance.type_lprib4)
        instance.lplrib4 = validated_data.get('lplrib4', instance.lplrib4)
        instance.com_lplrib4 = validated_data.get('com_lplrib4', instance.com_lplrib4)
        instance.type_lplrib4 = validated_data.get('type_lplrib4', instance.type_lplrib4)
        instance.lalrib4 = validated_data.get('lalrib4', instance.lalrib4)
        instance.com_lalrib4 = validated_data.get('com_lalrib4', instance.com_lalrib4)
        instance.type_lalrib4 = validated_data.get('type_lalrib4', instance.type_lalrib4)
        instance.larib4 = validated_data.get('larib4', instance.larib4)
        instance.com_larib4 = validated_data.get('com_larib4', instance.com_lalrib4)
        instance.type_larib4 = validated_data.get('type_larib4', instance.type_larib4)
        instance.lprib5 = validated_data.get('lprib5', instance.lprib5)
        instance.com_lprib5 = validated_data.get('com_lprib5', instance.com_lprib5)
        instance.type_lprib5 = validated_data.get('type_lprib5', instance.type_lprib5)
        instance.lplrib5 = validated_data.get('lplrib5', instance.lplrib5)
        instance.com_lplrib5 = validated_data.get('com_lplrib5', instance.com_lplrib5)
        instance.type_lplrib5 = validated_data.get('type_lplrib5', instance.type_lplrib5)
        instance.lalrib5 = validated_data.get('lalrib5', instance.lalrib5)
        instance.com_lalrib5 = validated_data.get('com_lalrib5', instance.com_lalrib5)
        instance.type_lalrib5 = validated_data.get('type_lalrib5', instance.type_lalrib5)
        instance.larib5 = validated_data.get('larib5', instance.larib5)
        instance.com_larib5 = validated_data.get('com_larib5', instance.com_lalrib5)
        instance.type_larib5 = validated_data.get('type_larib5', instance.type_larib5)
        instance.lprib6 = validated_data.get('lprib6', instance.lprib6)
        instance.com_lprib6 = validated_data.get('com_lprib6', instance.com_lprib6)
        instance.type_lprib6 = validated_data.get('type_lprib6', instance.type_lprib6)
        instance.lplrib6 = validated_data.get('lplrib6', instance.lplrib6)
        instance.com_lplrib6 = validated_data.get('com_lplrib6', instance.com_lplrib6)
        instance.type_lplrib6 = validated_data.get('type_lplrib6', instance.type_lplrib6)
        instance.lalrib6 = validated_data.get('lalrib6', instance.lalrib6)
        instance.com_lalrib6 = validated_data.get('com_lalrib6', instance.com_lalrib6)
        instance.type_lalrib6 = validated_data.get('type_lalrib6', instance.type_lalrib6)
        instance.larib6 = validated_data.get('larib6', instance.larib6)
        instance.com_larib6 = validated_data.get('com_larib6', instance.com_lalrib6)
        instance.type_larib6 = validated_data.get('type_larib6', instance.type_larib6)
        instance.lprib7 = validated_data.get('lprib7', instance.lprib7)
        instance.com_lprib7 = validated_data.get('com_lprib7', instance.com_lprib7)
        instance.type_lprib7 = validated_data.get('type_lprib7', instance.type_lprib7)
        instance.lplrib7 = validated_data.get('lplrib7', instance.lplrib7)
        instance.com_lplrib7 = validated_data.get('com_lplrib7', instance.com_lplrib7)
        instance.type_lplrib7 = validated_data.get('type_lplrib7', instance.type_lplrib7)
        instance.lalrib7 = validated_data.get('lalrib7', instance.lalrib7)
        instance.com_lalrib7 = validated_data.get('com_lalrib7', instance.com_lalrib7)
        instance.type_lalrib7 = validated_data.get('type_lalrib7', instance.type_lalrib7)
        instance.larib7 = validated_data.get('larib7', instance.larib7)
        instance.com_larib7 = validated_data.get('com_larib7', instance.com_lalrib7)
        instance.type_larib7 = validated_data.get('type_larib7', instance.type_larib7)
        instance.lprib8 = validated_data.get('lprib8', instance.lprib8)
        instance.com_lprib8 = validated_data.get('com_lprib8', instance.com_lprib8)
        instance.type_lprib8 = validated_data.get('type_lprib8', instance.type_lprib8)
        instance.lplrib8 = validated_data.get('lplrib8', instance.lplrib8)
        instance.com_lplrib8 = validated_data.get('com_lplrib8', instance.com_lplrib8)
        instance.type_lplrib8 = validated_data.get('type_lplrib8', instance.type_lplrib8)
        instance.lalrib8 = validated_data.get('lalrib8', instance.lalrib8)
        instance.com_lalrib8 = validated_data.get('com_lalrib8', instance.com_lalrib8)
        instance.type_lalrib8 = validated_data.get('type_lalrib8', instance.type_lalrib8)
        instance.larib8 = validated_data.get('larib8', instance.larib8)
        instance.com_larib8 = validated_data.get('com_larib8', instance.com_lalrib8)
        instance.type_larib8 = validated_data.get('type_larib8', instance.type_larib8)
        instance.lprib9 = validated_data.get('lprib9', instance.lprib9)
        instance.com_lprib9 = validated_data.get('com_lprib9', instance.com_lprib9)
        instance.type_lprib9 = validated_data.get('type_lprib9', instance.type_lprib9)
        instance.lplrib9 = validated_data.get('lplrib9', instance.lplrib9)
        instance.com_lplrib9 = validated_data.get('com_lplrib9', instance.com_lplrib9)
        instance.type_lplrib9 = validated_data.get('type_lplrib9', instance.type_lplrib9)
        instance.lalrib9 = validated_data.get('lalrib9', instance.lalrib9)
        instance.com_lalrib9 = validated_data.get('com_lalrib9', instance.com_lalrib9)
        instance.type_lalrib9 = validated_data.get('type_lalrib9', instance.type_lalrib9)
        instance.larib9 = validated_data.get('larib9', instance.larib9)
        instance.com_larib9 = validated_data.get('com_larib9', instance.com_lalrib9)
        instance.type_larib9 = validated_data.get('type_larib9', instance.type_larib9)
        instance.lprib10 = validated_data.get('lprib10', instance.lprib10)
        instance.com_lprib10 = validated_data.get('com_lprib10', instance.com_lprib10)
        instance.type_lprib10 = validated_data.get('type_lprib10', instance.type_lprib10)
        instance.lplrib10 = validated_data.get('lplrib10', instance.lplrib10)
        instance.com_lplrib10 = validated_data.get('com_lplrib10', instance.com_lplrib10)
        instance.type_lplrib10 = validated_data.get('type_lplrib10', instance.type_lplrib10)
        instance.lalrib10 = validated_data.get('lalrib10', instance.lalrib10)
        instance.com_lalrib10 = validated_data.get('com_lalrib10', instance.com_lalrib10)
        instance.type_lalrib10 = validated_data.get('type_lalrib10', instance.type_lalrib10)
        instance.larib10 = validated_data.get('larib10', instance.larib10)
        instance.com_larib10 = validated_data.get('com_larib10', instance.com_lalrib10)
        instance.type_larib10 = validated_data.get('type_larib10', instance.type_larib10)
        instance.lprib11 = validated_data.get('lprib11', instance.lprib1)
        instance.com_lprib11 = validated_data.get('com_lprib11', instance.com_lprib11)
        instance.type_lprib11 = validated_data.get('type_lprib11', instance.type_lprib11)
        instance.lplrib11 = validated_data.get('lplrib11', instance.lplrib11)
        instance.com_lplrib11 = validated_data.get('com_lplrib11', instance.com_lplrib11)
        instance.type_lplrib11 = validated_data.get('type_lplrib11', instance.type_lplrib11)
        instance.lalrib11 = validated_data.get('lalrib11', instance.lalrib11)
        instance.com_lalrib11 = validated_data.get('com_lalrib11', instance.com_lalrib11)
        instance.type_lalrib11 = validated_data.get('type_lalrib11', instance.type_lalrib11)
        instance.lprib12 = validated_data.get('lprib12', instance.lprib12)
        instance.com_lprib12 = validated_data.get('com_lprib12', instance.com_lprib12)
        instance.type_lprib12 = validated_data.get('type_lprib12', instance.type_lprib12)
        instance.lplrib12 = validated_data.get('lplrib12', instance.lplrib12)
        instance.com_lplrib12 = validated_data.get('com_lplrib12', instance.com_lplrib12)
        instance.type_lplrib12 = validated_data.get('type_lplrib12', instance.type_lplrib12)
        instance.lalrib12 = validated_data.get('lalrib12', instance.lalrib12)
        instance.com_lalrib12 = validated_data.get('com_lalrib12', instance.com_lalrib12)
        instance.type_lalrib12 = validated_data.get('type_lalrib12', instance.type_lalrib12)
        instance.save()

        return instance
