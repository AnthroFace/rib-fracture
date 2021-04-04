from rest_framework import serializers
from .models import Patient
from .models import Filter

class FilterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Filter
        fields = ('pk', 'age_start', 'age_end', 'weight_start', 'weight_end', 'height_start', 'height_end', 'sex', 'ancestry', 'xray', 'cpr', 'belted', 'obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 'prescription', 'drug_use',
                  'sternum', 'lprib1', 'lplrib1', 'lalrib1', 'lprib2', 'lplrib2', 'lalrib2', 'larib2', 'lprib3', 'lplrib3', 'lalrib3', 'larib3', 'lprib4',
                  'lplrib4', 'lalrib4', 'larib4', 'lprib5', 'lplrib5', 'lalrib5', 'larib5', 'lprib6', 'lplrib6', 'lalrib6', 'larib6', 'lprib7', 'lplrib7',
                  'lalrib7', 'larib7', 'lprib8', 'lplrib8', 'lalrib8', 'larib8', 'lprib9', 'lplrib9', 'lalrib9', 'larib9', 'lprib10', 'lplrib10', 'lalrib10',
                  'larib10', 'lprib11', 'lplrib11', 'lalrib11', 'lprib12', 'lplrib12', 'lalrib12', 'rprib1', 'rplrib1', 'ralrib1', 'rprib2', 'rplrib2', 
                  'ralrib2', 'rarib2', 'rprib3', 'rplrib3', 'ralrib3', 'rarib3', 'rprib4', 'rplrib4', 'ralrib4', 'rarib4', 'rprib5', 'rplrib5', 'ralrib5', 
                  'rarib5', 'rprib6', 'rplrib6', 'ralrib6', 'rarib6', 'rprib7', 'rplrib7', 'ralrib7', 'rarib7', 'rprib8', 'rplrib8', 'ralrib8', 'rarib8', 
                  'rprib9', 'rplrib9', 'ralrib9', 'rarib9', 'rprib10', 'rplrib10', 'ralrib10', 'rarib10', 'rprib11', 'rplrib11', 'ralrib11', 'rprib12', 'rplrib12', 
                  'ralrib12')

    def to_internal_value(self,data):
        if data.get('age_start') == "":
            data['age_start'] = None
        if data.get('age_end') == "":
            data['age_end'] = None    
        if data.get('weight_start') == "":
            data['weight_start'] = None
        if data.get('weight_end') == "":
            data['weight_end'] = None   
        if data.get('height_start') == "":
            data['height_start'] = None
        if data.get('height_end') == "":
            data['height_end'] = None   
        if data.get('sternum') == "":
            data['sternum'] = None
        if data.get('lprib1') == "":
            data['lprib1'] = None
        if data.get('lplrib1') == "":
            data['lplrib1'] = None
        if data.get('lalrib1') == "":
            data['lalrib1'] = None
        if data.get('lprib2') == "":
            data['lprib2'] = None
        if data.get('lplrib2') == "":
            data['lplrib2'] = None
        if data.get('lalrib2') == "":
            data['lalrib2'] = None
        if data.get('larib2') == "":
            data['larib2'] = None
        if data.get('lprib3') == "":
            data['lprib3'] = None
        if data.get('lplrib3') == "":
            data['lplrib3'] = None
        if data.get('lalrib3') == "":
            data['lalrib3'] = None
        if data.get('larib3') == "":
            data['larib3'] = None
        if data.get('lprib4') == "":
            data['lprib4'] = None
        if data.get('lplrib4') == "":
            data['lplrib4'] = None
        if data.get('lalrib4') == "":
            data['lalrib4'] = None
        if data.get('larib4') == "":
            data['larib4'] = None
        if data.get('lprib5') == "":
            data['lprib5'] = None
        if data.get('lplrib5') == "":
            data['lplrib5'] = None
        if data.get('lalrib5') == "":
            data['lalrib5'] = None
        if data.get('larib5') == "":
            data['larib5'] = None
        if data.get('lprib6') == "":
            data['lprib6'] = None
        if data.get('lplrib6') == "":
            data['lplrib6'] = None
        if data.get('lalrib6') == "":
            data['lalrib6'] = None
        if data.get('larib6') == "":
            data['larib6'] = None
        if data.get('lprib7') == "":
            data['lprib7'] = None
        if data.get('lplrib7') == "":
            data['lplrib7'] = None
        if data.get('lalrib7') == "":
            data['lalrib7'] = None
        if data.get('larib7') == "":
            data['larib7'] = None
        if data.get('lprib8') == "":
            data['lprib8'] = None
        if data.get('lplrib8') == "":
            data['lplrib8'] = None
        if data.get('lalrib8') == "":
            data['lalrib8'] = None
        if data.get('larib8') == "":
            data['larib8'] = None
        if data.get('lprib9') == "":
            data['lprib9'] = None
        if data.get('lplrib9') == "":
            data['lplrib9'] = None
        if data.get('lalrib9') == "":
            data['lalrib9'] = None
        if data.get('larib9') == "":
            data['larib9'] = None
        if data.get('lprib10') == "":
            data['lprib10'] = None
        if data.get('lplrib10') == "":
            data['lplrib10'] = None
        if data.get('lalrib10') == "":
            data['lalrib10'] = None
        if data.get('larib10') == "":
            data['larib10'] = None
        if data.get('lprib11') == "":
            data['lprib11'] = None
        if data.get('lplrib11') == "":
            data['lplrib11'] = None
        if data.get('lalrib11') == "":
            data['lalrib11'] = None
        if data.get('lprib12') == "":
            data['lprib12'] = None
        if data.get('lplrib12') == "":
            data['lplrib12'] = None
        if data.get('lalrib12') == "":
            data['lalrib12'] = None
        if data.get('rprib1') == "":
            data['rprib1'] = None
        if data.get('rplrib1') == "":
            data['rplrib1'] = None
        if data.get('ralrib1') == "":
            data['ralrib1'] = None
        if data.get('rprib2') == "":
            data['rprib2'] = None
        if data.get('rplrib2') == "":
            data['rplrib2'] = None
        if data.get('ralrib2') == "":
            data['ralrib2'] = None
        if data.get('rarib2') == "":
            data['rarib2'] = None
        if data.get('rprib3') == "":
            data['rprib3'] = None
        if data.get('rplrib3') == "":
            data['rplrib3'] = None
        if data.get('ralrib3') == "":
            data['ralrib3'] = None
        if data.get('rarib3') == "":
            data['rarib3'] = None
        if data.get('rprib4') == "":
            data['rprib4'] = None
        if data.get('rplrib4') == "":
            data['rplrib4'] = None
        if data.get('ralrib4') == "":
            data['ralrib4'] = None
        if data.get('rarib4') == "":
            data['rarib4'] = None
        if data.get('rprib5') == "":
            data['rprib5'] = None
        if data.get('rplrib5') == "":
            data['rplrib5'] = None
        if data.get('ralrib5') == "":
            data['ralrib5'] = None
        if data.get('rarib5') == "":
            data['rarib5'] = None
        if data.get('rprib6') == "":
            data['rprib6'] = None
        if data.get('rplrib6') == "":
            data['rplrib6'] = None
        if data.get('ralrib6') == "":
            data['ralrib6'] = None
        if data.get('rarib6') == "":
            data['rarib6'] = None
        if data.get('rprib7') == "":
            data['rprib7'] = None
        if data.get('rplrib7') == "":
            data['rplrib7'] = None
        if data.get('ralrib7') == "":
            data['ralrib7'] = None
        if data.get('rarib7') == "":
            data['rarib7'] = None
        if data.get('rprib8') == "":
            data['rprib8'] = None
        if data.get('rplrib8') == "":
            data['rplrib8'] = None
        if data.get('ralrib8') == "":
            data['ralrib8'] = None
        if data.get('rarib8') == "":
            data['rarib8'] = None
        if data.get('rprib9') == "":
            data['rprib9'] = None
        if data.get('rplrib9') == "":
            data['rplrib9'] = None
        if data.get('ralrib9') == "":
            data['ralrib9'] = None
        if data.get('rarib9') == "":
            data['rarib9'] = None
        if data.get('rprib10') == "":
            data['rprib10'] = None
        if data.get('rplrib10') == "":
            data['rplrib10'] = None
        if data.get('ralrib10') == "":
            data['ralrib10'] = None
        if data.get('rarib10') == "":
            data['rarib10'] = None
        if data.get('rprib11') == "":
            data['rprib11'] = None
        if data.get('rplrib11') == "":
            data['rplrib11'] = None
        if data.get('ralrib11') == "":
            data['ralrib11'] = None
        if data.get('rprib12') == "":
            data['rprib12'] = None
        if data.get('rplrib12') == "":
            data['rplrib12'] = None
        if data.get('ralrib12') == "":
            data['ralrib12'] = None
        return super(FilterSerializer,self).to_internal_value(data)
    
    def create(self, validated_data):
        return  Filter.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.age_start = validated_data.get('age_start', instance.age_start)
        instance.age_end = validated_data.get('age_end', instance.age_end)
        instance.weight_start = validated_data.get('weight_start', instance.weight_start)
        instance.weight_end = validated_data.get('weight_end', instance.weight_end)
        instance.sex = validated_data.get('sex', instance.sex)
        instance.ancestry = validated_data.get('ancestry', instance.ancestry)
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
        instance.sternum = validated_data.get('sternum', instance.sternum)
        instance.lprib1 = validated_data.get('lprib1', instance.lprib1)
        instance.lplrib1 = validated_data.get('lplrib1', instance.lplrib1)
        instance.lalrib1 = validated_data.get('lalrib1', instance.lalrib1)
        instance.lprib2 = validated_data.get('lprib2', instance.lprib2)
        instance.lplrib2 = validated_data.get('lplrib2', instance.lplrib2)
        instance.lalrib2 = validated_data.get('lalrib2', instance.lalrib2)
        instance.larib2 = validated_data.get('larib2', instance.larib2)
        instance.lprib3 = validated_data.get('lprib3', instance.lprib3)
        instance.lplrib3 = validated_data.get('lplrib3', instance.lplrib3)
        instance.lalrib3 = validated_data.get('lalrib3', instance.lalrib3)
        instance.larib3 = validated_data.get('larib2', instance.larib3)
        instance.lprib4 = validated_data.get('lprib4', instance.lprib4)
        instance.lplrib4 = validated_data.get('lplrib4', instance.lplrib4)
        instance.lalrib4 = validated_data.get('lalrib4', instance.lalrib4)
        instance.larib4 = validated_data.get('larib4', instance.larib4)
        instance.lprib5 = validated_data.get('lprib5', instance.lprib5)
        instance.lplrib5 = validated_data.get('lplrib5', instance.lplrib5)
        instance.lalrib5 = validated_data.get('lalrib5', instance.lalrib5)
        instance.larib5 = validated_data.get('larib5', instance.larib5)
        instance.lprib6 = validated_data.get('lprib6', instance.lprib6)
        instance.lplrib6 = validated_data.get('lplrib6', instance.lplrib6)
        instance.lalrib6 = validated_data.get('lalrib6', instance.lalrib6)
        instance.larib6 = validated_data.get('larib6', instance.larib6)
        instance.lprib7 = validated_data.get('lprib7', instance.lprib7)
        instance.lplrib7 = validated_data.get('lplrib7', instance.lplrib7)
        instance.lalrib7 = validated_data.get('lalrib7', instance.lalrib7)
        instance.larib7 = validated_data.get('larib7', instance.larib7)
        instance.lprib8 = validated_data.get('lprib8', instance.lprib8)
        instance.lplrib8 = validated_data.get('lplrib8', instance.lplrib8)
        instance.lalrib8 = validated_data.get('lalrib8', instance.lalrib8)
        instance.larib8 = validated_data.get('larib8', instance.larib8)
        instance.lprib9 = validated_data.get('lprib9', instance.lprib9)
        instance.lplrib9 = validated_data.get('lplrib9', instance.lplrib9)
        instance.lalrib9 = validated_data.get('lalrib9', instance.lalrib9)
        instance.larib9 = validated_data.get('larib9', instance.larib9)
        instance.lprib10 = validated_data.get('lprib10', instance.lprib10)
        instance.lplrib10 = validated_data.get('lplrib10', instance.lplrib10)
        instance.lalrib10 = validated_data.get('lalrib10', instance.lalrib10)
        instance.larib10 = validated_data.get('larib10', instance.larib10)
        instance.lprib11 = validated_data.get('lprib11', instance.lprib1)
        instance.lplrib11 = validated_data.get('lplrib11', instance.lplrib11)
        instance.lalrib11 = validated_data.get('lalrib11', instance.lalrib11)
        instance.lprib12 = validated_data.get('lprib12', instance.lprib12)
        instance.lplrib12 = validated_data.get('lplrib12', instance.lplrib12)
        instance.lalrib12 = validated_data.get('lalrib12', instance.lalrib12)
        instance.rprib1 = validated_data.get('rprib1', instance.rprib1)
        instance.rplrib1 = validated_data.get('rplrib1', instance.rplrib1)
        instance.ralrib1 = validated_data.get('ralrib1', instance.ralrib1)
        instance.rprib2 = validated_data.get('rprib2', instance.rprib2)
        instance.rplrib2 = validated_data.get('rplrib2', instance.rplrib2)
        instance.ralrib2 = validated_data.get('ralrib2', instance.ralrib2)
        instance.rarib2 = validated_data.get('rarib2', instance.rarib2)
        instance.rprib3 = validated_data.get('rprib3', instance.rprib3)
        instance.rplrib3 = validated_data.get('rplrib3', instance.rplrib3)
        instance.ralrib3 = validated_data.get('ralrib3', instance.ralrib3)
        instance.rarib3 = validated_data.get('rarib2', instance.rarib3)
        instance.rprib4 = validated_data.get('rprib4', instance.rprib4)
        instance.rplrib4 = validated_data.get('rplrib4', instance.rplrib4)
        instance.ralrib4 = validated_data.get('ralrib4', instance.ralrib4)
        instance.rarib4 = validated_data.get('rarib4', instance.rarib4)
        instance.rprib5 = validated_data.get('rprib5', instance.rprib5)
        instance.rplrib5 = validated_data.get('rplrib5', instance.rplrib5)
        instance.ralrib5 = validated_data.get('ralrib5', instance.ralrib5)
        instance.rarib5 = validated_data.get('rarib5', instance.rarib5)
        instance.rprib6 = validated_data.get('rprib6', instance.rprib6)
        instance.rplrib6 = validated_data.get('rplrib6', instance.rplrib6)
        instance.ralrib6 = validated_data.get('ralrib6', instance.ralrib6)
        instance.rarib6 = validated_data.get('rarib6', instance.rarib6)
        instance.rprib7 = validated_data.get('rprib7', instance.rprib7)
        instance.rplrib7 = validated_data.get('rplrib7', instance.rplrib7)
        instance.ralrib7 = validated_data.get('ralrib7', instance.ralrib7)
        instance.rarib7 = validated_data.get('rarib7', instance.rarib7)
        instance.rprib8 = validated_data.get('rprib8', instance.rprib8)
        instance.rplrib8 = validated_data.get('rplrib8', instance.rplrib8)
        instance.ralrib8 = validated_data.get('ralrib8', instance.ralrib8)
        instance.rarib8 = validated_data.get('rarib8', instance.rarib8)
        instance.rprib9 = validated_data.get('rprib9', instance.rprib9)
        instance.rplrib9 = validated_data.get('rplrib9', instance.rplrib9)
        instance.ralrib9 = validated_data.get('ralrib9', instance.ralrib9)
        instance.rarib9 = validated_data.get('rarib9', instance.rarib9)
        instance.rprib10 = validated_data.get('rprib10', instance.rprib10)
        instance.rplrib10 = validated_data.get('rplrib10', instance.rplrib10)
        instance.ralrib10 = validated_data.get('ralrib10', instance.ralrib10)
        instance.rarib10 = validated_data.get('rarib10', instance.rarib10)
        instance.rprib11 = validated_data.get('rprib11', instance.rprib1)
        instance.rplrib11 = validated_data.get('rplrib11', instance.rplrib11)
        instance.ralrib11 = validated_data.get('ralrib11', instance.ralrib11)
        instance.rprib12 = validated_data.get('rprib12', instance.rprib12)
        instance.rplrib12 = validated_data.get('rplrib12', instance.rplrib12)
        instance.ralrib12 = validated_data.get('ralrib12', instance.ralrib12)
        instance.save()

        return instance

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ('pk', 'case_id', 'age', 'sex', 'weight', 'height', 'ancestry', 'mod', 'cod', 'cod_type', 
                  'xray', 'cpr','belted','obese', 'cardio', 'patho', 'tobacco', 'marijuana', 'alcohol', 
                  'prescription', 'drug_use', 'health_notes', 'notes', 'sternum', 'cpr_sternum', 'lprib1',
                  'com_lprib1', 'type_lprib1', 'cpr_lprib1', 'lplrib1', 'com_lplrib1', 'type_lplrib1', 'cpr_lplrib1','lalrib1', 'com_lalrib1', 
                  'type_lalrib1', 'cpr_lalrib1', 'lprib2', 'com_lprib2', 'type_lprib2', 'cpr_lprib2','lplrib2', 'com_lplrib2', 'type_lplrib2',
                  'cpr_lplrib2', 'lalrib2', 'com_lalrib2', 'type_lalrib2', 'cpr_lalrib2', 'larib2', 'com_larib2', 'type_larib2',  'cpr_larib2', 'lprib3',
                  'com_lprib3', 'type_lprib3', 'cpr_lprib3', 'lplrib3', 'com_lplrib3', 'type_lplrib3', 'cpr_lplrib3','lalrib3', 'com_lalrib3', 
                  'type_lalrib3', 'cpr_lalrib3', 'larib3', 'com_larib3', 'type_larib3', 'cpr_larib3', 'lprib4', 'com_lprib4', 'type_lprib4', 'cpr_lprib4', 
                  'lplrib4', 'com_lplrib4', 'type_lplrib4', 'cpr_lplrib4', 'lalrib4', 'com_lalrib4', 'type_lalrib4', 'cpr_lalrib4', 'larib4', 
                  'com_larib4', 'type_larib4', 'cpr_larib4','lprib5', 'com_lprib5', 'type_lprib5', 'cpr_lprib5', 'lplrib5', 'com_lplrib5', 
                  'type_lplrib5', 'cpr_lplrib5', 'lalrib5', 'com_lalrib5', 'type_lalrib5', 'cpr_lalrib5','larib5', 'com_larib5', 'type_larib5', 'cpr_larib5',
                  'lprib6', 'com_lprib6', 'type_lprib6', 'cpr_lprib6', 'lplrib6', 'com_lplrib6', 'type_lplrib6','cpr_lplrib6','lalrib6', 
                  'com_lalrib6', 'type_lalrib6', 'cpr_lalrib6', 'larib6', 'com_larib6', 'type_larib6', 'cpr_larib6', 'lprib7', 'com_lprib7', 
                  'type_lprib7', 'cpr_lprib7', 'lplrib7', 'com_lplrib7', 'type_lplrib7', 'cpr_lplrib7','lalrib7', 'cpr_lalrib7', 'com_lalrib7', 
                  'type_lalrib7', 'cpr_lalrib7', 'larib7', 'com_larib7', 'type_larib7', 'cpr_larib7', 'lprib8', 'com_lprib8', 'type_lprib8',  'cpr_lprib8',
                  'lplrib8', 'com_lplrib8', 'type_lplrib8', 'cpr_lplrib8', 'lalrib8', 'com_lalrib8', 'type_lalrib8', 'cpr_lalrib8','larib8', 
                  'com_larib8', 'type_larib8', 'cpr_larib8', 'lprib9', 'com_lprib9', 'type_lprib9', 'cpr_lprib9', 'lplrib9', 'com_lplrib9', 
                  'type_lplrib9', 'cpr_lplrib9','lalrib9', 'com_lalrib9', 'type_lalrib9', 'cpr_lalrib9','larib9', 'com_larib9', 'type_larib9', 'cpr_larib9',
                  'lprib10', 'com_lprib10', 'type_lprib10', 'cpr_lprib10', 'lplrib10', 'com_lplrib10', 'type_lplrib10', 'cpr_lplrib10',
                  'lalrib10', 'com_lalrib10', 'type_lalrib10', 'cpr_lalrib10', 'larib10', 'com_larib10', 'type_larib10', 'cpr_larib10',
                  'lprib11', 'com_lprib11', 'type_lprib11', 'cpr_lprib11', 'lplrib11', 'com_lplrib11', 'type_lplrib11', 'cpr_lplrib11',
                  'lalrib11', 'com_lalrib11', 'type_lalrib11', 'cpr_lalrib11', 'lprib12', 'com_lprib12', 'type_lprib12', 'cpr_lprib12',
                  'lplrib12', 'com_lplrib12', 'type_lplrib12', 'cpr_lplrib12','lalrib12', 'com_lalrib12', 'type_lalrib12', 'cpr_lalrib12', 'rprib1',
                  'com_rprib1', 'type_rprib1', 'cpr_rprib1', 'rplrib1', 'com_rplrib1', 'type_rplrib1', 'cpr_rplrib1','ralrib1', 'com_ralrib1', 
                  'type_ralrib1', 'cpr_ralrib1', 'rprib2', 'com_rprib2', 'type_rprib2', 'cpr_rprib2', 'rplrib2', 'com_rplrib2', 'type_rplrib2', 'cpr_rplrib2',
                  'ralrib2', 'com_ralrib2', 'type_ralrib2', 'cpr_ralrib2', 'rarib2', 'com_rarib2', 'type_rarib2', 'cpr_rarib2', 'rprib3',
                  'com_rprib3', 'type_rprib3', 'cpr_rprib3', 'rplrib3', 'com_rplrib3', 'type_rplrib3', 'cpr_rplrib3','ralrib3', 'com_ralrib3', 
                  'type_ralrib3', 'cpr_ralrib3', 'rarib3', 'com_rarib3', 'type_rarib3', 'cpr_rarib3', 'rprib4', 'com_rprib4', 'type_rprib4', 'cpr_rprib4',
                  'rplrib4', 'com_rplrib4', 'type_rplrib4', 'cpr_rplrib4', 'ralrib4', 'com_ralrib4', 'type_ralrib4', 'cpr_ralrib4', 'rarib4', 
                  'com_rarib4', 'type_rarib4', 'cpr_rarib4','rprib5', 'com_rprib5', 'type_rprib5', 'cpr_rprib5', 'rplrib5', 'com_rplrib5', 
                  'type_rplrib5', 'cpr_rplrib5','ralrib5', 'com_ralrib5', 'type_ralrib5', 'cpr_ralrib5', 'rarib5', 'com_rarib5', 'type_rarib5', 'cpr_rarib5',
                  'rprib6', 'com_rprib6', 'type_rprib6', 'cpr_rprib6', 'rplrib6', 'com_rplrib6', 'type_rplrib6', 'cpr_rplrib6','ralrib6', 
                  'com_ralrib6', 'type_ralrib6',  'cpr_ralrib6', 'rarib6', 'com_rarib6', 'type_rarib6', 'cpr_rarib6','rprib7', 'com_rprib7', 
                  'type_rprib7', 'cpr_rprib7', 'rplrib7', 'com_rplrib7', 'type_rplrib7', 'cpr_rplrib7','ralrib7', 'com_ralrib7', 
                  'type_ralrib7', 'cpr_ralrib7', 'rarib7', 'com_rarib7', 'type_rarib7', 'cpr_rarib7', 'rprib8', 'com_rprib8', 'type_rprib8', 'cpr_rprib8',
                  'rplrib8', 'com_rplrib8', 'type_rplrib8', 'cpr_rplrib8','ralrib8', 'com_ralrib8', 'type_ralrib8', 'cpr_ralrib8', 'rarib8', 
                  'com_rarib8', 'type_rarib8', 'cpr_rarib8', 'rprib9', 'com_rprib9', 'type_rprib9', 'cpr_rprib9', 'rplrib9', 'com_rplrib9', 
                  'type_rplrib9', 'cpr_rplrib9','ralrib9', 'com_ralrib9', 'type_ralrib9', 'cpr_ralrib9', 'rarib9', 'com_rarib9', 'type_rarib9', 'cpr_rarib9',
                  'rprib10', 'com_rprib10', 'type_rprib10', 'cpr_rprib10', 'rplrib10', 'com_rplrib10', 'type_rplrib10', 'cpr_rplrib10',
                  'ralrib10', 'com_ralrib10', 'type_ralrib10', 'cpr_ralrib10', 'rarib10', 'com_rarib10', 'type_rarib10', 'cpr_rarib10',
                  'rprib11', 'com_rprib11', 'type_rprib11', 'cpr_rprib11', 'rplrib11', 'com_rplrib11', 'type_rplrib11', 'cpr_rplrib11',
                  'ralrib11', 'com_ralrib11', 'type_ralrib11', 'cpr_ralrib11','rprib12', 'com_rprib12', 'type_rprib12',  'cpr_rprib12','rplrib12', 
                  'com_rplrib12', 'type_rplrib12', 'cpr_rplrib12','ralrib12', 'com_ralrib12', 'type_ralrib12', 'cpr_ralrib12')

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
            data['com_lprib5'] = None
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
        if data.get('rprib1') == "":
            data['rprib1'] = None
        if data.get('com_rprib1') == "":
            data['com_rprib1'] = None
        if data.get('rplrib1') == "":
            data['rplrib1'] = None
        if data.get('com_rplrib1') == "":
            data['com_rplrib1'] = None
        if data.get('ralrib1') == "":
            data['ralrib1'] = None
        if data.get('com_ralrib1') == "":
            data['com_ralrib1'] = None
        if data.get('rprib2') == "":
            data['rprib2'] = None
        if data.get('com_rprib2') == "":
            data['com_rprib2'] = None
        if data.get('rplrib2') == "":
            data['rplrib2'] = None
        if data.get('com_rplrib2') == "":
            data['com_rplrib2'] = None
        if data.get('ralrib2') == "":
            data['ralrib2'] = None
        if data.get('com_ralrib2') == "":
            data['com_ralrib2'] = None
        if data.get('rarib2') == "":
            data['rarib2'] = None
        if data.get('com_rarib2') == "":
            data['com_rarib2'] = None
        if data.get('rprib3') == "":
            data['rprib3'] = None
        if data.get('com_rprib3') == "":
            data['com_rprib3'] = None
        if data.get('rplrib3') == "":
            data['rplrib3'] = None
        if data.get('com_rplrib3') == "":
            data['com_rplrib3'] = None
        if data.get('ralrib3') == "":
            data['ralrib3'] = None
        if data.get('com_ralrib3') == "":
            data['com_ralrib3'] = None
        if data.get('rarib3') == "":
            data['rarib3'] = None
        if data.get('com_rarib3') == "":
            data['com_rarib3'] = None
        if data.get('rprib4') == "":
            data['rprib4'] = None
        if data.get('com_rprib4') == "":
            data['com_rprib4'] = None
        if data.get('rplrib4') == "":
            data['rplrib4'] = None
        if data.get('com_rplrib4') == "":
            data['com_rplrib4'] = None
        if data.get('ralrib4') == "":
            data['ralrib4'] = None
        if data.get('com_ralrib4') == "":
            data['com_ralrib4'] = None
        if data.get('rarib4') == "":
            data['rarib4'] = None
        if data.get('com_rarib4') == "":
            data['com_rarib4'] = None
        if data.get('rprib5') == "":
            data['rprib5'] = None
        if data.get('com_rprib5') == "":
            data['com_rprib5'] = None
        if data.get('rplrib5') == "":
            data['rplrib5'] = None
        if data.get('com_rplrib5') == "":
            data['com_rplrib5'] = None
        if data.get('ralrib5') == "":
            data['ralrib5'] = None
        if data.get('com_ralrib5') == "":
            data['com_ralrib5'] = None
        if data.get('rarib5') == "":
            data['rarib5'] = None
        if data.get('com_rarib5') == "":
            data['com_rarib5'] = None
        if data.get('rprib6') == "":
            data['rprib6'] = None
        if data.get('com_rprib6') == "":
            data['com_rprib6'] = None
        if data.get('rplrib6') == "":
            data['rplrib6'] = None
        if data.get('com_rplrib6') == "":
            data['com_rplrib6'] = None
        if data.get('ralrib6') == "":
            data['ralrib6'] = None
        if data.get('com_ralrib6') == "":
            data['com_ralrib6'] = None
        if data.get('rarib6') == "":
            data['rarib6'] = None
        if data.get('com_rarib6') == "":
            data['com_rarib6'] = None
        if data.get('rprib7') == "":
            data['rprib7'] = None
        if data.get('com_rprib7') == "":
            data['com_rprib7'] = None
        if data.get('rplrib7') == "":
            data['rplrib7'] = None
        if data.get('com_rplrib7') == "":
            data['com_rplrib7'] = None
        if data.get('ralrib7') == "":
            data['ralrib7'] = None
        if data.get('com_ralrib7') == "":
            data['com_ralrib7'] = None
        if data.get('rarib7') == "":
            data['rarib7'] = None
        if data.get('com_rarib7') == "":
            data['com_rarib7'] = None
        if data.get('rprib8') == "":
            data['rprib8'] = None
        if data.get('com_rprib8') == "":
            data['com_rprib8'] = None
        if data.get('rplrib8') == "":
            data['rplrib8'] = None
        if data.get('com_rplrib8') == "":
            data['com_rplrib8'] = None
        if data.get('ralrib8') == "":
            data['ralrib8'] = None
        if data.get('com_ralrib8') == "":
            data['com_ralrib8'] = None
        if data.get('rarib8') == "":
            data['rarib8'] = None
        if data.get('com_rarib8') == "":
            data['com_rarib8'] = None
        if data.get('rprib9') == "":
            data['rprib9'] = None
        if data.get('com_rprib9') == "":
            data['com_rprib9'] = None
        if data.get('rplrib9') == "":
            data['rplrib9'] = None
        if data.get('com_rplrib9') == "":
            data['com_rplrib9'] = None
        if data.get('ralrib9') == "":
            data['ralrib9'] = None
        if data.get('com_ralrib9') == "":
            data['com_ralrib9'] = None
        if data.get('rarib9') == "":
            data['rarib9'] = None
        if data.get('com_rarib9') == "":
            data['com_rarib9'] = None
        if data.get('rprib10') == "":
            data['rprib10'] = None
        if data.get('com_rprib10') == "":
            data['com_rprib10'] = None
        if data.get('rplrib10') == "":
            data['rplrib10'] = None
        if data.get('com_rplrib10') == "":
            data['com_rplrib10'] = None
        if data.get('ralrib10') == "":
            data['ralrib10'] = None
        if data.get('com_ralrib10') == "":
            data['com_ralrib10'] = None
        if data.get('rarib10') == "":
            data['rarib10'] = None
        if data.get('com_rarib10') == "":
            data['com_rarib10'] = None
        if data.get('rprib11') == "":
            data['rprib11'] = None
        if data.get('com_rprib11') == "":
            data['com_rprib11'] = None
        if data.get('rplrib11') == "":
            data['rplrib11'] = None
        if data.get('com_rplrib11') == "":
            data['com_rplrib11'] = None
        if data.get('ralrib11') == "":
            data['ralrib11'] = None
        if data.get('com_ralrib11') == "":
            data['com_ralrib11'] = None
        if data.get('rprib12') == "":
            data['rprib12'] = None
        if data.get('com_rprib12') == "":
            data['com_rprib12'] = None
        if data.get('rplrib12') == "":
            data['rplrib12'] = None
        if data.get('com_rplrib12') == "":
            data['com_rplrib12'] = None
        if data.get('ralrib12') == "":
            data['ralrib12'] = None
        if data.get('com_ralrib12') == "":
            data['com_ralrib12'] = None
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
        instance.cpr_lprib1 = validated_data.get('cpr_lprib1', instance.cpr_lprib1)
        instance.lplrib1 = validated_data.get('lplrib1', instance.lplrib1)
        instance.com_lplrib1 = validated_data.get('com_lplrib1', instance.com_lplrib1)
        instance.type_lplrib1 = validated_data.get('type_lplrib1', instance.type_lplrib1)
        instance.cpr_lplrib1 = validated_data.get('cpr_lplrib1', instance.cpr_lplrib1)
        instance.lalrib1 = validated_data.get('lalrib1', instance.lalrib1)
        instance.com_lalrib1 = validated_data.get('com_lalrib1', instance.com_lalrib1)
        instance.type_lalrib1 = validated_data.get('type_lalrib1', instance.type_lalrib1)
        instance.cpr_lalrib1 = validated_data.get('cpr_lalrib1', instance.cpr_lalrib1)
        instance.lprib2 = validated_data.get('lprib2', instance.lprib2)
        instance.com_lprib2 = validated_data.get('com_lprib2', instance.com_lprib2)
        instance.type_lprib2 = validated_data.get('type_lprib2', instance.type_lprib2)
        instance.cpr_lprib2 = validated_data.get('cpr_lprib2', instance.cpr_lprib2)
        instance.lplrib2 = validated_data.get('lplrib2', instance.lplrib2)
        instance.com_lplrib2 = validated_data.get('com_lplrib2', instance.com_lplrib2)
        instance.type_lplrib2 = validated_data.get('type_lplrib2', instance.type_lplrib2)
        instance.cpr_lplrib2 = validated_data.get('cpr_lplrib2', instance.cpr_lplrib2)
        instance.lalrib2 = validated_data.get('lalrib2', instance.lalrib2)
        instance.com_lalrib2 = validated_data.get('com_lalrib2', instance.com_lalrib2)
        instance.type_lalrib2 = validated_data.get('type_lalrib2', instance.type_lalrib2)
        instance.cpr_lalrib2 = validated_data.get('cpr_lalrib2', instance.cpr_lalrib2)
        instance.larib2 = validated_data.get('larib2', instance.larib2)
        instance.com_larib2 = validated_data.get('com_larib2', instance.com_larib2)
        instance.type_larib2 = validated_data.get('type_larib2', instance.type_larib2)
        instance.cpr_larib2 = validated_data.get('cpr_larib2', instance.cpr_larib2)
        instance.lprib3 = validated_data.get('lprib3', instance.lprib3)
        instance.com_lprib3 = validated_data.get('com_lprib3', instance.com_lprib3)
        instance.type_lprib3 = validated_data.get('type_lprib3', instance.type_lprib3)
        instance.cpr_lprib3 = validated_data.get('cpr_lprib3', instance.cpr_lprib3)
        instance.lplrib3 = validated_data.get('lplrib3', instance.lplrib3)
        instance.com_lplrib3 = validated_data.get('com_lplrib3', instance.com_lplrib3)
        instance.type_lplrib3 = validated_data.get('type_lplrib3', instance.type_lplrib3)
        instance.cpr_lplrib3 = validated_data.get('cpr_lplrib3', instance.cpr_lplrib3)
        instance.lalrib3 = validated_data.get('lalrib3', instance.lalrib3)
        instance.com_lalrib3 = validated_data.get('com_lalrib3', instance.com_lalrib3)
        instance.type_lalrib3 = validated_data.get('type_lalrib3', instance.type_lalrib3)
        instance.cpr_lalrib3 = validated_data.get('cpr_lalrib3', instance.cpr_lalrib3)
        instance.larib3 = validated_data.get('larib2', instance.larib3)
        instance.com_larib3 = validated_data.get('com_larib3', instance.com_larib3)
        instance.type_larib3 = validated_data.get('type_larib2', instance.type_larib3)
        instance.cpr_larib3 = validated_data.get('cpr_larib3', instance.cpr_larib3)
        instance.lprib4 = validated_data.get('lprib4', instance.lprib4)
        instance.com_lprib4 = validated_data.get('com_lprib4', instance.com_lprib4)
        instance.type_lprib4 = validated_data.get('type_lprib4', instance.type_lprib4)
        instance.cpr_lprib4 = validated_data.get('cpr_lprib4', instance.cpr_lprib4)
        instance.lplrib4 = validated_data.get('lplrib4', instance.lplrib4)
        instance.com_lplrib4 = validated_data.get('com_lplrib4', instance.com_lplrib4)
        instance.type_lplrib4 = validated_data.get('type_lplrib4', instance.type_lplrib4)
        instance.cpr_lplrib4 = validated_data.get('cpr_lplrib4', instance.cpr_lplrib4)
        instance.lalrib4 = validated_data.get('lalrib4', instance.lalrib4)
        instance.com_lalrib4 = validated_data.get('com_lalrib4', instance.com_lalrib4)
        instance.type_lalrib4 = validated_data.get('type_lalrib4', instance.type_lalrib4)
        instance.cpr_lalrib4 = validated_data.get('cpr_lalrib4', instance.cpr_lalrib4)
        instance.larib4 = validated_data.get('larib4', instance.larib4)
        instance.com_larib4 = validated_data.get('com_larib4', instance.com_lalrib4)
        instance.type_larib4 = validated_data.get('type_larib4', instance.type_larib4)
        instance.cpr_larib4 = validated_data.get('cpr_larib4', instance.cpr_larib4)
        instance.lprib5 = validated_data.get('lprib5', instance.lprib5)
        instance.com_lprib5 = validated_data.get('com_lprib5', instance.com_lprib5)
        instance.type_lprib5 = validated_data.get('type_lprib5', instance.type_lprib5)
        instance.cpr_lprib5 = validated_data.get('cpr_lprib5', instance.cpr_lprib5)
        instance.lplrib5 = validated_data.get('lplrib5', instance.lplrib5)
        instance.com_lplrib5 = validated_data.get('com_lplrib5', instance.com_lplrib5)
        instance.type_lplrib5 = validated_data.get('type_lplrib5', instance.type_lplrib5)
        instance.cpr_lplrib5 = validated_data.get('cpr_lplrib5', instance.cpr_lplrib5)
        instance.lalrib5 = validated_data.get('lalrib5', instance.lalrib5)
        instance.com_lalrib5 = validated_data.get('com_lalrib5', instance.com_lalrib5)
        instance.type_lalrib5 = validated_data.get('type_lalrib5', instance.type_lalrib5)
        instance.cpr_lalrib5 = validated_data.get('cpr_lalrib5', instance.cpr_lalrib5)
        instance.larib5 = validated_data.get('larib5', instance.larib5)
        instance.com_larib5 = validated_data.get('com_larib5', instance.com_larib5)
        instance.type_larib5 = validated_data.get('type_larib5', instance.type_larib5)
        instance.cpr_larib5 = validated_data.get('cpr_larib5', instance.cpr_larib5)
        instance.lprib6 = validated_data.get('lprib6', instance.lprib6)
        instance.com_lprib6 = validated_data.get('com_lprib6', instance.com_lprib6)
        instance.type_lprib6 = validated_data.get('type_lprib6', instance.type_lprib6)
        instance.cpr_lprib6 = validated_data.get('cpr_lprib6', instance.cpr_lprib6)
        instance.lplrib6 = validated_data.get('lplrib6', instance.lplrib6)
        instance.com_lplrib6 = validated_data.get('com_lplrib6', instance.com_lplrib6)
        instance.type_lplrib6 = validated_data.get('type_lplrib6', instance.type_lplrib6)
        instance.cpr_lplrib6 = validated_data.get('cpr_lplrib6', instance.cpr_lplrib6)
        instance.lalrib6 = validated_data.get('lalrib6', instance.lalrib6)
        instance.com_lalrib6 = validated_data.get('com_lalrib6', instance.com_lalrib6)
        instance.type_lalrib6 = validated_data.get('type_lalrib6', instance.type_lalrib6)
        instance.cpr_lalrib6 = validated_data.get('cpr_lalrib6', instance.cpr_lalrib6)
        instance.larib6 = validated_data.get('larib6', instance.larib6)
        instance.com_larib6 = validated_data.get('com_larib6', instance.com_larib6)
        instance.type_larib6 = validated_data.get('type_larib6', instance.type_larib6)
        instance.cpr_larib6 = validated_data.get('cpr_larib6', instance.cpr_larib6)
        instance.lprib7 = validated_data.get('lprib7', instance.lprib7)
        instance.com_lprib7 = validated_data.get('com_lprib7', instance.com_lprib7)
        instance.type_lprib7 = validated_data.get('type_lprib7', instance.type_lprib7)
        instance.cpr_lprib7 = validated_data.get('cpr_lprib7', instance.cpr_lprib7)
        instance.lplrib7 = validated_data.get('lplrib7', instance.lplrib7)
        instance.com_lplrib7 = validated_data.get('com_lplrib7', instance.com_lplrib7)
        instance.type_lplrib7 = validated_data.get('type_lplrib7', instance.type_lplrib7)
        instance.cpr_lplrib7 = validated_data.get('cpr_lplrib7', instance.cpr_lplrib7)
        instance.lalrib7 = validated_data.get('lalrib7', instance.lalrib7)
        instance.com_lalrib7 = validated_data.get('com_lalrib7', instance.com_lalrib7)
        instance.type_lalrib7 = validated_data.get('type_lalrib7', instance.type_lalrib7)
        instance.cpr_lalrib7 = validated_data.get('cpr_lalrib7', instance.cpr_lalrib7)
        instance.larib7 = validated_data.get('larib7', instance.larib7)
        instance.com_larib7 = validated_data.get('com_larib7', instance.com_larib7)
        instance.type_larib7 = validated_data.get('type_larib7', instance.type_larib7)
        instance.cpr_larib7 = validated_data.get('cpr_larib7', instance.cpr_larib7)
        instance.lprib8 = validated_data.get('lprib8', instance.lprib8)
        instance.com_lprib8 = validated_data.get('com_lprib8', instance.com_lprib8)
        instance.type_lprib8 = validated_data.get('type_lprib8', instance.type_lprib8)
        instance.cpr_lprib8 = validated_data.get('cpr_lprib8', instance.cpr_lprib8)
        instance.lplrib8 = validated_data.get('lplrib8', instance.lplrib8)
        instance.com_lplrib8 = validated_data.get('com_lplrib8', instance.com_lplrib8)
        instance.type_lplrib8 = validated_data.get('type_lplrib8', instance.type_lplrib8)
        instance.cpr_lplrib8 = validated_data.get('cpr_lplrib8', instance.cpr_lplrib8)
        instance.lalrib8 = validated_data.get('lalrib8', instance.lalrib8)
        instance.com_lalrib8 = validated_data.get('com_lalrib8', instance.com_lalrib8)
        instance.type_lalrib8 = validated_data.get('type_lalrib8', instance.type_lalrib8)
        instance.cpr_lalrib8 = validated_data.get('cpr_lalrib8', instance.cpr_lalrib8)
        instance.larib8 = validated_data.get('larib8', instance.larib8)
        instance.com_larib8 = validated_data.get('com_larib8', instance.com_larib8)
        instance.type_larib8 = validated_data.get('type_larib8', instance.type_larib8)
        instance.cpr_larib8 = validated_data.get('cpr_larib8', instance.cpr_larib8)
        instance.lprib9 = validated_data.get('lprib9', instance.lprib9)
        instance.com_lprib9 = validated_data.get('com_lprib9', instance.com_lprib9)
        instance.type_lprib9 = validated_data.get('type_lprib9', instance.type_lprib9)
        instance.cpr_lprib9 = validated_data.get('cpr_lprib9', instance.cpr_lprib9)
        instance.lplrib9 = validated_data.get('lplrib9', instance.lplrib9)
        instance.com_lplrib9 = validated_data.get('com_lplrib9', instance.com_lplrib9)
        instance.type_lplrib9 = validated_data.get('type_lplrib9', instance.type_lplrib9)
        instance.cpr_lplrib9 = validated_data.get('cpr_lplrib9', instance.cpr_lplrib9)
        instance.lalrib9 = validated_data.get('lalrib9', instance.lalrib9)
        instance.com_lalrib9 = validated_data.get('com_lalrib9', instance.com_lalrib9)
        instance.type_lalrib9 = validated_data.get('type_lalrib9', instance.type_lalrib9)
        instance.cpr_lalrib9 = validated_data.get('cpr_lalrib9', instance.cpr_lalrib9)
        instance.larib9 = validated_data.get('larib9', instance.larib9)
        instance.com_larib9 = validated_data.get('com_larib9', instance.com_larib9)
        instance.type_larib9 = validated_data.get('type_larib9', instance.type_larib9)
        instance.cpr_larib9 = validated_data.get('cpr_larib9', instance.cpr_larib9)
        instance.lprib10 = validated_data.get('lprib10', instance.lprib10)
        instance.com_lprib10 = validated_data.get('com_lprib10', instance.com_lprib10)
        instance.type_lprib10 = validated_data.get('type_lprib10', instance.type_lprib10)
        instance.cpr_lprib10 = validated_data.get('cpr_lprib10', instance.cpr_lprib10)
        instance.lplrib10 = validated_data.get('lplrib10', instance.lplrib10)
        instance.com_lplrib10 = validated_data.get('com_lplrib10', instance.com_lplrib10)
        instance.type_lplrib10 = validated_data.get('type_lplrib10', instance.type_lplrib10)
        instance.cpr_lplrib10 = validated_data.get('cpr_lplrib10', instance.cpr_lplrib10)
        instance.lalrib10 = validated_data.get('lalrib10', instance.lalrib10)
        instance.com_lalrib10 = validated_data.get('com_lalrib10', instance.com_lalrib10)
        instance.type_lalrib10 = validated_data.get('type_lalrib10', instance.type_lalrib10)
        instance.cpr_lalrib10 = validated_data.get('cpr_lalrib10', instance.cpr_lalrib10)
        instance.larib10 = validated_data.get('larib10', instance.larib10)
        instance.com_larib10 = validated_data.get('com_larib10', instance.com_larib10)
        instance.type_larib10 = validated_data.get('type_larib10', instance.type_larib10)
        instance.cpr_larib10 = validated_data.get('cpr_larib10', instance.cpr_larib10)
        instance.lprib11 = validated_data.get('lprib11', instance.lprib1)
        instance.com_lprib11 = validated_data.get('com_lprib11', instance.com_lprib11)
        instance.type_lprib11 = validated_data.get('type_lprib11', instance.type_lprib11)
        instance.cpr_lprib11 = validated_data.get('cpr_lprib11', instance.cpr_lprib11)
        instance.lplrib11 = validated_data.get('lplrib11', instance.lplrib11)
        instance.com_lplrib11 = validated_data.get('com_lplrib11', instance.com_lplrib11)
        instance.type_lplrib11 = validated_data.get('type_lplrib11', instance.type_lplrib11)
        instance.cpr_lplrib11 = validated_data.get('cpr_lplrib11', instance.cpr_lplrib11)
        instance.lalrib11 = validated_data.get('lalrib11', instance.lalrib11)
        instance.com_lalrib11 = validated_data.get('com_lalrib11', instance.com_lalrib11)
        instance.type_lalrib11 = validated_data.get('type_lalrib11', instance.type_lalrib11)
        instance.cpr_lalrib11 = validated_data.get('cpr_lalrib11', instance.cpr_lalrib11)
        instance.lprib12 = validated_data.get('lprib12', instance.lprib12)
        instance.com_lprib12 = validated_data.get('com_lprib12', instance.com_lprib12)
        instance.type_lprib12 = validated_data.get('type_lprib12', instance.type_lprib12)
        instance.cpr_lprib12 = validated_data.get('cpr_lprib12', instance.cpr_lprib12)
        instance.lplrib12 = validated_data.get('lplrib12', instance.lplrib12)
        instance.com_lplrib12 = validated_data.get('com_lplrib12', instance.com_lplrib12)
        instance.type_lplrib12 = validated_data.get('type_lplrib12', instance.type_lplrib12)
        instance.cpr_lplrib12 = validated_data.get('cpr_lplrib12', instance.cpr_lplrib12)
        instance.lalrib12 = validated_data.get('lalrib12', instance.lalrib12)
        instance.com_lalrib12 = validated_data.get('com_lalrib12', instance.com_lalrib12)
        instance.type_lalrib12 = validated_data.get('type_lalrib12', instance.type_lalrib12)
        instance.cpr_lalrib12 = validated_data.get('cpr_lalrib12', instance.cpr_lalrib12)
        instance.rprib1 = validated_data.get('rprib1', instance.rprib1)
        instance.com_rprib1 = validated_data.get('com_rprib1', instance.com_rprib1)
        instance.type_rprib1 = validated_data.get('type_rprib1', instance.type_rprib1)
        instance.cpr_rprib1 = validated_data.get('cpr_rprib1', instance.cpr_rprib1)
        instance.rplrib1 = validated_data.get('rplrib1', instance.rplrib1)
        instance.com_rplrib1 = validated_data.get('com_rplrib1', instance.com_rplrib1)
        instance.type_rplrib1 = validated_data.get('type_rplrib1', instance.type_rplrib1)
        instance.cpr_rplrib1 = validated_data.get('cpr_rplrib1', instance.cpr_rplrib1)
        instance.ralrib1 = validated_data.get('ralrib1', instance.ralrib1)
        instance.com_ralrib1 = validated_data.get('com_ralrib1', instance.com_ralrib1)
        instance.type_ralrib1 = validated_data.get('type_ralrib1', instance.type_ralrib1)
        instance.cpr_ralrib1 = validated_data.get('cpr_ralrib1', instance.cpr_ralrib1)
        instance.rprib2 = validated_data.get('rprib2', instance.rprib2)
        instance.com_rprib2 = validated_data.get('com_rprib2', instance.com_rprib2)
        instance.type_rprib2 = validated_data.get('type_rprib2', instance.type_rprib2)
        instance.cpr_rprib2 = validated_data.get('cpr_rprib2', instance.cpr_rprib2)
        instance.rplrib2 = validated_data.get('rplrib2', instance.rplrib2)
        instance.com_rplrib2 = validated_data.get('com_rplrib2', instance.com_rplrib2)
        instance.type_rplrib2 = validated_data.get('type_rplrib2', instance.type_rplrib2)
        instance.cpr_rplrib2 = validated_data.get('cpr_rplrib2', instance.cpr_rplrib2)
        instance.ralrib2 = validated_data.get('ralrib2', instance.ralrib2)
        instance.com_ralrib2 = validated_data.get('com_ralrib2', instance.com_ralrib2)
        instance.type_ralrib2 = validated_data.get('type_ralrib2', instance.type_ralrib2)
        instance.cpr_ralrib2 = validated_data.get('cpr_ralrib2', instance.cpr_ralrib2)
        instance.rarib2 = validated_data.get('rarib2', instance.rarib2)
        instance.com_rarib2 = validated_data.get('com_rarib2', instance.com_rarib2)
        instance.type_rarib2 = validated_data.get('type_rarib2', instance.type_rarib2)
        instance.cpr_rarib2 = validated_data.get('cpr_rarib2', instance.cpr_rarib2)
        instance.rprib3 = validated_data.get('rprib3', instance.rprib3)
        instance.com_rprib3 = validated_data.get('com_rprib3', instance.com_rprib3)
        instance.type_rprib3 = validated_data.get('type_rprib3', instance.type_rprib3)
        instance.cpr_rprib3 = validated_data.get('cpr_rprib3', instance.cpr_rprib3)
        instance.rplrib3 = validated_data.get('rplrib3', instance.rplrib3)
        instance.com_rplrib3 = validated_data.get('com_rplrib3', instance.com_rplrib3)
        instance.type_rplrib3 = validated_data.get('type_rplrib3', instance.type_rplrib3)
        instance.cpr_rplrib3 = validated_data.get('cpr_rplrib3', instance.cpr_rplrib3)
        instance.ralrib3 = validated_data.get('ralrib3', instance.ralrib3)
        instance.com_ralrib3 = validated_data.get('com_ralrib3', instance.com_ralrib3)
        instance.type_ralrib3 = validated_data.get('type_ralrib3', instance.type_ralrib3)
        instance.cpr_ralrib3 = validated_data.get('cpr_ralrib3', instance.cpr_ralrib3)
        instance.rarib3 = validated_data.get('rarib2', instance.rarib3)
        instance.com_rarib3 = validated_data.get('com_rarib3', instance.com_rarib3)
        instance.type_rarib3 = validated_data.get('type_rarib2', instance.type_rarib3)
        instance.cpr_rarib3 = validated_data.get('cpr_rarib3', instance.cpr_rarib3)
        instance.rprib4 = validated_data.get('rprib4', instance.rprib4)
        instance.com_rprib4 = validated_data.get('com_rprib4', instance.com_rprib4)
        instance.type_rprib4 = validated_data.get('type_rprib4', instance.type_rprib4)
        instance.cpr_rprib4 = validated_data.get('cpr_rprib4', instance.cpr_rprib4)
        instance.rplrib4 = validated_data.get('rplrib4', instance.rplrib4)
        instance.com_rplrib4 = validated_data.get('com_rplrib4', instance.com_rplrib4)
        instance.type_rplrib4 = validated_data.get('type_rplrib4', instance.type_rplrib4)
        instance.cpr_rplrib4 = validated_data.get('cpr_rplrib4', instance.cpr_rplrib4)
        instance.ralrib4 = validated_data.get('ralrib4', instance.ralrib4)
        instance.com_ralrib4 = validated_data.get('com_ralrib4', instance.com_ralrib4)
        instance.type_ralrib4 = validated_data.get('type_ralrib4', instance.type_ralrib4)
        instance.cpr_ralrib4 = validated_data.get('cpr_ralrib4', instance.cpr_ralrib4)
        instance.rarib4 = validated_data.get('rarib4', instance.rarib4)
        instance.com_rarib4 = validated_data.get('com_rarib4', instance.com_ralrib4)
        instance.type_rarib4 = validated_data.get('type_rarib4', instance.type_rarib4)
        instance.cpr_rarib4 = validated_data.get('cpr_rarib4', instance.cpr_rarib4)
        instance.rprib5 = validated_data.get('rprib5', instance.rprib5)
        instance.com_rprib5 = validated_data.get('com_rprib5', instance.com_rprib5)
        instance.type_rprib5 = validated_data.get('type_rprib5', instance.type_rprib5)
        instance.cpr_rprib5 = validated_data.get('cpr_rprib5', instance.cpr_rprib5)
        instance.rplrib5 = validated_data.get('rplrib5', instance.rplrib5)
        instance.com_rplrib5 = validated_data.get('com_rplrib5', instance.com_rplrib5)
        instance.type_rplrib5 = validated_data.get('type_rplrib5', instance.type_rplrib5)
        instance.cpr_rplrib5 = validated_data.get('cpr_rplrib5', instance.cpr_rplrib5)
        instance.ralrib5 = validated_data.get('ralrib5', instance.ralrib5)
        instance.com_ralrib5 = validated_data.get('com_ralrib5', instance.com_ralrib5)
        instance.type_ralrib5 = validated_data.get('type_ralrib5', instance.type_ralrib5)
        instance.cpr_ralrib5 = validated_data.get('cpr_ralrib5', instance.cpr_ralrib5)
        instance.rarib5 = validated_data.get('rarib5', instance.rarib5)
        instance.com_rarib5 = validated_data.get('com_rarib5', instance.com_rarib5)
        instance.type_rarib5 = validated_data.get('type_rarib5', instance.type_rarib5)
        instance.cpr_rarib5 = validated_data.get('cpr_rarib5', instance.cpr_rarib5)
        instance.rprib6 = validated_data.get('rprib6', instance.rprib6)
        instance.com_rprib6 = validated_data.get('com_rprib6', instance.com_rprib6)
        instance.type_rprib6 = validated_data.get('type_rprib6', instance.type_rprib6)
        instance.cpr_rprib6 = validated_data.get('cpr_rprib6', instance.cpr_rprib6)
        instance.rplrib6 = validated_data.get('rplrib6', instance.rplrib6)
        instance.com_rplrib6 = validated_data.get('com_rplrib6', instance.com_rplrib6)
        instance.type_rplrib6 = validated_data.get('type_rplrib6', instance.type_rplrib6)
        instance.cpr_rplrib6 = validated_data.get('cpr_rplrib6', instance.cpr_rplrib6)
        instance.ralrib6 = validated_data.get('ralrib6', instance.ralrib6)
        instance.com_ralrib6 = validated_data.get('com_ralrib6', instance.com_ralrib6)
        instance.type_ralrib6 = validated_data.get('type_ralrib6', instance.type_ralrib6)
        instance.cpr_ralrib6 = validated_data.get('cpr_ralrib6', instance.cpr_ralrib6)
        instance.rarib6 = validated_data.get('rarib6', instance.rarib6)
        instance.com_rarib6 = validated_data.get('com_rarib6', instance.com_rarib6)
        instance.type_rarib6 = validated_data.get('type_rarib6', instance.type_rarib6)
        instance.cpr_rarib6 = validated_data.get('cpr_rarib6', instance.cpr_rarib6)
        instance.rprib7 = validated_data.get('rprib7', instance.rprib7)
        instance.com_rprib7 = validated_data.get('com_rprib7', instance.com_rprib7)
        instance.type_rprib7 = validated_data.get('type_rprib7', instance.type_rprib7)
        instance.cpr_rprib7 = validated_data.get('cpr_rprib7', instance.cpr_rprib7)
        instance.rplrib7 = validated_data.get('rplrib7', instance.rplrib7)
        instance.com_rplrib7 = validated_data.get('com_rplrib7', instance.com_rplrib7)
        instance.type_rplrib7 = validated_data.get('type_rplrib7', instance.type_rplrib7)
        instance.cpr_rplrib7 = validated_data.get('cpr_rplrib7', instance.cpr_rplrib7)
        instance.ralrib7 = validated_data.get('ralrib7', instance.ralrib7)
        instance.com_ralrib7 = validated_data.get('com_ralrib7', instance.com_ralrib7)
        instance.type_ralrib7 = validated_data.get('type_ralrib7', instance.type_ralrib7)
        instance.cpr_ralrib7 = validated_data.get('cpr_ralrib7', instance.cpr_ralrib7)
        instance.rarib7 = validated_data.get('rarib7', instance.rarib7)
        instance.com_rarib7 = validated_data.get('com_rarib7', instance.com_rarib7)
        instance.type_rarib7 = validated_data.get('type_rarib7', instance.type_rarib7)
        instance.cpr_rarib7 = validated_data.get('cpr_rarib7', instance.cpr_rarib7)
        instance.rprib8 = validated_data.get('rprib8', instance.rprib8)
        instance.com_rprib8 = validated_data.get('com_rprib8', instance.com_rprib8)
        instance.type_rprib8 = validated_data.get('type_rprib8', instance.type_rprib8)
        instance.cpr_rprib8 = validated_data.get('cpr_rprib8', instance.cpr_rprib8)
        instance.rplrib8 = validated_data.get('rplrib8', instance.rplrib8)
        instance.com_rplrib8 = validated_data.get('com_rplrib8', instance.com_rplrib8)
        instance.type_rplrib8 = validated_data.get('type_rplrib8', instance.type_rplrib8)
        instance.cpr_rplrib8 = validated_data.get('cpr_rplrib8', instance.cpr_rplrib8)
        instance.ralrib8 = validated_data.get('ralrib8', instance.ralrib8)
        instance.com_ralrib8 = validated_data.get('com_ralrib8', instance.com_ralrib8)
        instance.type_ralrib8 = validated_data.get('type_ralrib8', instance.type_ralrib8)
        instance.cpr_ralrib8 = validated_data.get('cpr_ralrib8', instance.cpr_ralrib8)
        instance.rarib8 = validated_data.get('rarib8', instance.rarib8)
        instance.com_rarib8 = validated_data.get('com_rarib8', instance.com_rarib8)
        instance.type_rarib8 = validated_data.get('type_rarib8', instance.type_rarib8)
        instance.cpr_rarib8 = validated_data.get('cpr_rarib8', instance.cpr_rarib8)
        instance.rprib9 = validated_data.get('rprib9', instance.rprib9)
        instance.com_rprib9 = validated_data.get('com_rprib9', instance.com_rprib9)
        instance.type_rprib9 = validated_data.get('type_rprib9', instance.type_rprib9)
        instance.cpr_rprib9 = validated_data.get('cpr_rprib9', instance.cpr_rprib9)
        instance.rplrib9 = validated_data.get('rplrib9', instance.rplrib9)
        instance.com_rplrib9 = validated_data.get('com_rplrib9', instance.com_rplrib9)
        instance.type_rplrib9 = validated_data.get('type_rplrib9', instance.type_rplrib9)
        instance.cpr_rplrib9 = validated_data.get('cpr_rplrib9', instance.cpr_rplrib9)
        instance.ralrib9 = validated_data.get('ralrib9', instance.ralrib9)
        instance.com_ralrib9 = validated_data.get('com_ralrib9', instance.com_ralrib9)
        instance.type_ralrib9 = validated_data.get('type_ralrib9', instance.type_ralrib9)
        instance.cpr_ralrib9 = validated_data.get('cpr_ralrib9', instance.cpr_ralrib9)
        instance.rarib9 = validated_data.get('rarib9', instance.rarib9)
        instance.com_rarib9 = validated_data.get('com_rarib9', instance.com_rarib9)
        instance.type_rarib9 = validated_data.get('type_rarib9', instance.type_rarib9)
        instance.cpr_rarib9 = validated_data.get('cpr_rarib9', instance.cpr_rarib9)
        instance.rprib10 = validated_data.get('rprib10', instance.rprib10)
        instance.com_rprib10 = validated_data.get('com_rprib10', instance.com_rprib10)
        instance.type_rprib10 = validated_data.get('type_rprib10', instance.type_rprib10)
        instance.cpr_rprib10 = validated_data.get('cpr_rprib10', instance.cpr_rprib10)
        instance.rplrib10 = validated_data.get('rplrib10', instance.rplrib10)
        instance.com_rplrib10 = validated_data.get('com_rplrib10', instance.com_rplrib10)
        instance.type_rplrib10 = validated_data.get('type_rplrib10', instance.type_rplrib10)
        instance.cpr_rplrib10 = validated_data.get('cpr_rplrib10', instance.cpr_rplrib10)
        instance.ralrib10 = validated_data.get('ralrib10', instance.ralrib10)
        instance.com_ralrib10 = validated_data.get('com_ralrib10', instance.com_ralrib10)
        instance.type_ralrib10 = validated_data.get('type_ralrib10', instance.type_ralrib10)
        instance.cpr_ralrib10 = validated_data.get('cpr_ralrib10', instance.cpr_ralrib10)
        instance.rarib10 = validated_data.get('rarib10', instance.rarib10)
        instance.com_rarib10 = validated_data.get('com_rarib10', instance.com_rarib10)
        instance.type_rarib10 = validated_data.get('type_rarib10', instance.type_rarib10)
        instance.cpr_rarib10 = validated_data.get('cpr_rarib10', instance.cpr_rarib10)
        instance.rprib11 = validated_data.get('rprib11', instance.rprib1)
        instance.com_rprib11 = validated_data.get('com_rprib11', instance.com_rprib11)
        instance.type_rprib11 = validated_data.get('type_rprib11', instance.type_rprib11)
        instance.cpr_rprib11 = validated_data.get('cpr_rprib11', instance.cpr_rprib11)
        instance.rplrib11 = validated_data.get('rplrib11', instance.rplrib11)
        instance.com_rplrib11 = validated_data.get('com_rplrib11', instance.com_rplrib11)
        instance.type_rplrib11 = validated_data.get('type_rplrib11', instance.type_rplrib11)
        instance.cpr_rplrib11 = validated_data.get('cpr_rplrib11', instance.cpr_rplrib11)
        instance.ralrib11 = validated_data.get('ralrib11', instance.ralrib11)
        instance.com_ralrib11 = validated_data.get('com_ralrib11', instance.com_ralrib11)
        instance.type_ralrib11 = validated_data.get('type_ralrib11', instance.type_ralrib11)
        instance.cpr_ralrib11 = validated_data.get('cpr_ralrib11', instance.cpr_ralrib11)
        instance.rprib12 = validated_data.get('rprib12', instance.rprib12)
        instance.com_rprib12 = validated_data.get('com_rprib12', instance.com_rprib12)
        instance.type_rprib12 = validated_data.get('type_rprib12', instance.type_rprib12)
        instance.cpr_rprib12 = validated_data.get('cpr_rprib12', instance.cpr_rprib12)
        instance.rplrib12 = validated_data.get('rplrib12', instance.rplrib12)
        instance.com_rplrib12 = validated_data.get('com_rplrib12', instance.com_rplrib12)
        instance.type_rplrib12 = validated_data.get('type_rplrib12', instance.type_rplrib12)
        instance.cpr_rplrib12 = validated_data.get('cpr_rplrib12', instance.cpr_rplrib12)
        instance.ralrib12 = validated_data.get('ralrib12', instance.ralrib12)
        instance.com_ralrib12 = validated_data.get('com_ralrib12', instance.com_ralrib12)
        instance.type_ralrib12 = validated_data.get('type_ralrib12', instance.type_ralrib12)
        instance.cpr_ralrib12 = validated_data.get('cpr_ralrib12', instance.cpr_ralrib12)
        instance.save()

        return instance
