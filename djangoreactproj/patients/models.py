from django.db import models
from django.core.exceptions import ValidationError

class Patient(models.Model):
    case_id = models.CharField("Case ID", max_length=240,default="", unique=True)
    age = models.IntegerField("Age", blank=True, null=True)
    sex = models.CharField("Sex", max_length= 2, blank=True)
    weight = models.IntegerField("Weight", blank=True, null=True)
    height = models.IntegerField("Height", blank=True, null=True)
    ancestry = models.CharField("Ancestry", max_length=20, blank=True)
    mod = models.CharField("Mode of Death", max_length=240, blank=True)
    cod = models.CharField("Cause of Death", max_length=240, blank=True)
    cod_type = models.TextField("CoD Info", blank=True)
    xray = models.CharField('X-Ray', max_length=1, blank=True)
    cpr = models.CharField('CPR', max_length=1, blank=True)
    belted = models.CharField('Belted', max_length=1, blank=True)
    obese = models.CharField('Obese', max_length=1,blank=True)
    cardio = models.CharField('Cardiovascular Issues', max_length=1, blank=True)
    patho = models.CharField('Pathologies', max_length=1, blank=True)
    tobacco = models.CharField('Cigarette/Tobacco Use', max_length=1, blank=True)
    marijuana = models.CharField('Marijuana Use', max_length=1, blank=True)
    alcohol = models.CharField('Alcohol Use', max_length=1, blank=True)
    prescription = models.CharField('Prescription Medications', max_length=1, blank=True)
    drug_use = models.CharField('Illicit Drug Use', max_length=1, blank=True)
    health_notes = models.TextField('Health Notes', blank=True)
    notes = models.TextField('Notes', blank=True, null=True)
    sternum = models.IntegerField(blank=True, null=True)
    cpr_sternum = models.CharField(max_length=2, blank=True)
    lprib1 = models.IntegerField(blank=True, null=True)
    com_lprib1 = models.FloatField(blank=True, null=True)
    type_lprib1 = models.CharField(max_length=20, blank=True)
    cpr_lprib1 = models.CharField(max_length=2, blank=True)
    lplrib1 = models.IntegerField(blank=True, null=True)
    com_lplrib1 = models.FloatField(blank=True, null=True)
    type_lplrib1 = models.CharField(max_length=20, blank=True)
    cpr_lplrib1 = models.CharField(max_length=2, blank=True)
    lalrib1 = models.IntegerField(blank=True, null=True)
    com_lalrib1 = models.FloatField(blank=True, null=True)
    type_lalrib1 = models.CharField(max_length=20, blank=True)
    cpr_lalrib1 = models.CharField(max_length=2, blank=True)
    lprib2 = models.IntegerField(blank=True, null=True)
    com_lprib2 = models.FloatField(blank=True, null=True)
    type_lprib2 = models.CharField(max_length=20, blank=True)
    cpr_lprib2 = models.CharField(max_length=2, blank=True)
    lplrib2 = models.IntegerField(blank=True, null=True)
    com_lplrib2 = models.FloatField(blank=True, null=True)
    type_lplrib2 = models.CharField(max_length=20, blank=True)
    cpr_lplrib2 = models.CharField(max_length=2, blank=True)
    lalrib2 = models.IntegerField(blank=True, null=True)
    com_lalrib2 = models.FloatField(blank=True, null=True)
    type_lalrib2 = models.CharField(max_length=20, blank=True)
    cpr_lalrib2 = models.CharField(max_length=2, blank=True)
    larib2 = models.IntegerField(blank=True, null=True)
    com_larib2 = models.FloatField(blank=True, null=True)
    type_larib2 = models.CharField(max_length=20, blank=True)
    cpr_larib2 = models.CharField(max_length=2, blank=True)
    lprib3 = models.IntegerField(blank=True, null=True)
    com_lprib3 = models.FloatField(blank=True, null=True)
    type_lprib3 = models.CharField(max_length=20, blank=True)
    cpr_lprib3 = models.CharField(max_length=2, blank=True)
    lplrib3 = models.IntegerField(blank=True, null=True)
    com_lplrib3 = models.FloatField(blank=True, null=True)
    type_lplrib3 = models.CharField(max_length=20, blank=True)
    cpr_lplrib3 = models.CharField(max_length=2, blank=True)
    lalrib3 = models.IntegerField(blank=True, null=True)
    com_lalrib3 = models.FloatField(blank=True, null=True)
    type_lalrib3 = models.CharField(max_length=20, blank=True)
    cpr_lalrib3 = models.CharField(max_length=2, blank=True)
    larib3 = models.IntegerField(blank=True, null=True)
    com_larib3 = models.FloatField(blank=True, null=True)
    type_larib3 = models.CharField(max_length=20, blank=True)
    cpr_larib3 = models.CharField(max_length=2, blank=True)
    lprib4 = models.IntegerField(blank=True, null=True)
    com_lprib4 = models.FloatField(blank=True, null=True)
    type_lprib4 = models.CharField(max_length=20, blank=True)
    cpr_lprib4 = models.CharField(max_length=2, blank=True)
    lplrib4 = models.IntegerField(blank=True, null=True)
    com_lplrib4 = models.FloatField(blank=True, null=True)
    type_lplrib4 = models.CharField(max_length=20, blank=True)
    cpr_lplrib4 = models.CharField(max_length=2, blank=True)
    lalrib4 = models.IntegerField(blank=True, null=True)
    com_lalrib4 = models.FloatField(blank=True, null=True)
    type_lalrib4 = models.CharField(max_length=20, blank=True)
    cpr_lalrib4 = models.CharField(max_length=2, blank=True)
    larib4 = models.IntegerField(blank=True, null=True)
    com_larib4 = models.FloatField(blank=True, null=True)
    type_larib4 = models.CharField(max_length=20, blank=True)
    cpr_larib4 = models.CharField(max_length=2, blank=True)
    lprib5 = models.IntegerField(blank=True, null=True)
    com_lprib5 = models.FloatField(blank=True, null=True)
    type_lprib5 = models.CharField(max_length=20, blank=True)
    cpr_lprib5 = models.CharField(max_length=2, blank=True)
    lplrib5 = models.IntegerField(blank=True, null=True)
    com_lplrib5 = models.FloatField(blank=True, null=True)
    type_lplrib5 = models.CharField(max_length=20, blank=True)
    cpr_lplrib5 = models.CharField(max_length=2, blank=True)
    lalrib5 = models.IntegerField(blank=True, null=True)
    com_lalrib5 = models.FloatField(blank=True, null=True)
    type_lalrib5 = models.CharField(max_length=20, blank=True)
    cpr_lalrib5 = models.CharField(max_length=2, blank=True)
    larib5 = models.IntegerField(blank=True, null=True)
    com_larib5 = models.FloatField(blank=True, null=True)
    type_larib5 = models.CharField(max_length=20, blank=True)
    cpr_larib5 = models.CharField(max_length=2, blank=True)
    lprib6 = models.IntegerField(blank=True, null=True)
    com_lprib6 = models.FloatField(blank=True, null=True)
    type_lprib6 = models.CharField(max_length=20, blank=True)
    cpr_lprib6 = models.CharField(max_length=2, blank=True)
    lplrib6 = models.IntegerField(blank=True, null=True)
    com_lplrib6 = models.FloatField(blank=True, null=True)
    type_lplrib6 = models.CharField(max_length=20, blank=True)
    cpr_lplrib6 = models.CharField(max_length=2, blank=True)
    lalrib6 = models.IntegerField(blank=True, null=True)
    com_lalrib6 = models.FloatField(blank=True, null=True)
    type_lalrib6 = models.CharField(max_length=20, blank=True)
    cpr_lalrib6 = models.CharField(max_length=2, blank=True)
    larib6 = models.IntegerField(blank=True, null=True)
    com_larib6 = models.FloatField(blank=True, null=True)
    type_larib6 = models.CharField(max_length=20, blank=True)
    cpr_larib6 = models.CharField(max_length=2, blank=True)
    lprib7 = models.IntegerField(blank=True, null=True)
    com_lprib7 = models.FloatField(blank=True, null=True)
    type_lprib7 = models.CharField(max_length=20, blank=True)
    cpr_lprib7 = models.CharField(max_length=2, blank=True)
    lplrib7 = models.IntegerField(blank=True, null=True)
    com_lplrib7 = models.FloatField(blank=True, null=True)
    type_lplrib7 = models.CharField(max_length=20, blank=True)
    cpr_lplrib7 = models.CharField(max_length=2, blank=True)
    lalrib7 = models.IntegerField(blank=True, null=True)
    com_lalrib7 = models.FloatField(blank=True, null=True)
    type_lalrib7 = models.CharField(max_length=20, blank=True)
    cpr_lalrib7 = models.CharField(max_length=2, blank=True)
    larib7 = models.IntegerField(blank=True, null=True)
    com_larib7 = models.FloatField(blank=True, null=True)
    type_larib7 = models.CharField(max_length=20, blank=True)
    cpr_larib7 = models.CharField(max_length=2, blank=True)
    lprib8 = models.IntegerField(blank=True, null=True)
    com_lprib8 = models.FloatField(blank=True, null=True)
    type_lprib8 = models.CharField(max_length=20, blank=True)
    cpr_lprib8 = models.CharField(max_length=2, blank=True)
    lplrib8 = models.IntegerField(blank=True, null=True)
    com_lplrib8 = models.FloatField(blank=True, null=True)
    type_lplrib8 = models.CharField(max_length=20, blank=True)
    cpr_lplrib8 = models.CharField(max_length=2, blank=True)
    lalrib8 = models.IntegerField(blank=True, null=True)
    com_lalrib8 = models.FloatField(blank=True, null=True)
    type_lalrib8 = models.CharField(max_length=20, blank=True)
    cpr_lalrib8 = models.CharField(max_length=2, blank=True)
    larib8 = models.IntegerField(blank=True, null=True)
    com_larib8 = models.FloatField(blank=True, null=True)
    type_larib8 = models.CharField(max_length=20, blank=True)
    cpr_larib8 = models.CharField(max_length=2, blank=True)
    lprib9 = models.IntegerField(blank=True, null=True)
    com_lprib9 = models.FloatField(blank=True, null=True)
    type_lprib9 = models.CharField(max_length=20, blank=True)
    cpr_lprib9 = models.CharField(max_length=2, blank=True)
    lplrib9 = models.IntegerField(blank=True, null=True)
    com_lplrib9 = models.FloatField(blank=True, null=True)
    type_lplrib9 = models.CharField(max_length=20, blank=True)
    cpr_lplrib9 = models.CharField(max_length=2, blank=True)
    lalrib9 = models.IntegerField(blank=True, null=True)
    com_lalrib9 = models.FloatField(blank=True, null=True)
    type_lalrib9 = models.CharField(max_length=20, blank=True)
    cpr_lalrib9 = models.CharField(max_length=2, blank=True)
    larib9 = models.IntegerField(blank=True, null=True)
    com_larib9 = models.FloatField(blank=True, null=True)
    type_larib9 = models.CharField(max_length=20, blank=True)
    cpr_larib9 = models.CharField(max_length=2, blank=True)
    lprib10 = models.IntegerField(blank=True, null=True)
    com_lprib10 = models.FloatField(blank=True, null=True)
    type_lprib10 = models.CharField(max_length=20, blank=True)
    cpr_lprib10 = models.CharField(max_length=2, blank=True)
    lplrib10 = models.IntegerField(blank=True, null=True)
    com_lplrib10 = models.FloatField(blank=True, null=True)
    type_lplrib10 = models.CharField(max_length=20, blank=True)
    cpr_lplrib10 = models.CharField(max_length=2, blank=True)
    lalrib10 = models.IntegerField(blank=True, null=True)
    com_lalrib10 = models.FloatField(blank=True, null=True)
    type_lalrib10 = models.CharField(max_length=20, blank=True)
    cpr_lalrib10 = models.CharField(max_length=2, blank=True)
    larib10 = models.IntegerField(blank=True, null=True)
    com_larib10 = models.FloatField(blank=True, null=True)
    type_larib10 = models.CharField(max_length=20, blank=True)
    cpr_larib10 = models.CharField(max_length=2, blank=True)
    lprib11 = models.IntegerField(blank=True, null=True)
    com_lprib11 = models.FloatField(blank=True, null=True)
    type_lprib11 = models.CharField(max_length=20, blank=True)
    cpr_lprib11 = models.CharField(max_length=2, blank=True)
    lplrib11 = models.IntegerField(blank=True, null=True)
    com_lplrib11 = models.FloatField(blank=True, null=True)
    type_lplrib11 = models.CharField(max_length=20, blank=True)
    cpr_lplrib11 = models.CharField(max_length=2, blank=True)
    lalrib11 = models.IntegerField(blank=True, null=True)
    com_lalrib11 = models.FloatField(blank=True, null=True)
    type_lalrib11 = models.CharField(max_length=20, blank=True)
    cpr_lalrib11 = models.CharField(max_length=2, blank=True)
    lprib12 = models.IntegerField(blank=True, null=True)
    com_lprib12 = models.FloatField(blank=True, null=True)
    type_lprib12 = models.CharField(max_length=20, blank=True)
    cpr_lprib12 = models.CharField(max_length=2, blank=True)
    lplrib12 = models.IntegerField(blank=True, null=True)
    com_lplrib12 = models.FloatField(blank=True, null=True)
    type_lplrib12 = models.CharField(max_length=20, blank=True)
    cpr_lplrib12 = models.CharField(max_length=2, blank=True)
    lalrib12 = models.IntegerField(blank=True, null=True)
    com_lalrib12 = models.FloatField(blank=True, null=True)
    type_lalrib12 = models.CharField(max_length=20, blank=True)
    cpr_lalrib12 = models.CharField(max_length=2, blank=True)
    rprib1 = models.IntegerField(blank=True, null=True)
    com_rprib1 = models.FloatField(blank=True, null=True)
    type_rprib1 = models.CharField(max_length=20, blank=True)
    cpr_rprib1 = models.CharField(max_length=2, blank=True)
    rplrib1 = models.IntegerField(blank=True, null=True)
    com_rplrib1 = models.FloatField(blank=True, null=True)
    type_rplrib1 = models.CharField(max_length=20, blank=True)
    cpr_rplrib1 = models.CharField(max_length=2, blank=True)
    ralrib1 = models.IntegerField(blank=True, null=True)
    com_ralrib1 = models.FloatField(blank=True, null=True)
    type_ralrib1 = models.CharField(max_length=20, blank=True)
    cpr_ralrib1 = models.CharField(max_length=2, blank=True)
    rprib2 = models.IntegerField(blank=True, null=True)
    com_rprib2 = models.FloatField(blank=True, null=True)
    type_rprib2 = models.CharField(max_length=20, blank=True)
    cpr_rprib2 = models.CharField(max_length=2, blank=True)
    rplrib2 = models.IntegerField(blank=True, null=True)
    com_rplrib2 = models.FloatField(blank=True, null=True)
    type_rplrib2 = models.CharField(max_length=20, blank=True)
    cpr_rplrib2 = models.CharField(max_length=2, blank=True)
    ralrib2 = models.IntegerField(blank=True, null=True)
    com_ralrib2 = models.FloatField(blank=True, null=True)
    type_ralrib2 = models.CharField(max_length=20, blank=True)
    cpr_ralrib2 = models.CharField(max_length=2, blank=True)
    rarib2 = models.IntegerField(blank=True, null=True)
    com_rarib2 = models.FloatField(blank=True, null=True)
    type_rarib2 = models.CharField(max_length=20, blank=True)
    cpr_rarib2 = models.CharField(max_length=2, blank=True)
    rprib3 = models.IntegerField(blank=True, null=True)
    com_rprib3 = models.FloatField(blank=True, null=True)
    type_rprib3 = models.CharField(max_length=20, blank=True)
    cpr_rprib3 = models.CharField(max_length=2, blank=True)
    rplrib3 = models.IntegerField(blank=True, null=True)
    com_rplrib3 = models.FloatField(blank=True, null=True)
    type_rplrib3 = models.CharField(max_length=20, blank=True)
    cpr_rplrib3 = models.CharField(max_length=2, blank=True)
    ralrib3 = models.IntegerField(blank=True, null=True)
    com_ralrib3 = models.FloatField(blank=True, null=True)
    type_ralrib3 = models.CharField(max_length=20, blank=True)
    cpr_ralrib3 = models.CharField(max_length=2, blank=True)
    rarib3 = models.IntegerField(blank=True, null=True)
    com_rarib3 = models.FloatField(blank=True, null=True)
    type_rarib3 = models.CharField(max_length=20, blank=True)
    cpr_rarib3 = models.CharField(max_length=2, blank=True)
    rprib4 = models.IntegerField(blank=True, null=True)
    com_rprib4 = models.FloatField(blank=True, null=True)
    type_rprib4 = models.CharField(max_length=20, blank=True)
    cpr_rprib4 = models.CharField(max_length=2, blank=True)
    rplrib4 = models.IntegerField(blank=True, null=True)
    com_rplrib4 = models.FloatField(blank=True, null=True)
    type_rplrib4 = models.CharField(max_length=20, blank=True)
    cpr_rplrib4 = models.CharField(max_length=2, blank=True)
    ralrib4 = models.IntegerField(blank=True, null=True)
    com_ralrib4 = models.FloatField(blank=True, null=True)
    type_ralrib4 = models.CharField(max_length=20, blank=True)
    cpr_ralrib4 = models.CharField(max_length=2, blank=True)
    rarib4 = models.IntegerField(blank=True, null=True)
    com_rarib4 = models.FloatField(blank=True, null=True)
    type_rarib4 = models.CharField(max_length=20, blank=True)
    cpr_rarib4 = models.CharField(max_length=2, blank=True)
    rprib5 = models.IntegerField(blank=True, null=True)
    com_rprib5 = models.FloatField(blank=True, null=True)
    type_rprib5 = models.CharField(max_length=20, blank=True)
    cpr_rprib5 = models.CharField(max_length=2, blank=True)
    rplrib5 = models.IntegerField(blank=True, null=True)
    com_rplrib5 = models.FloatField(blank=True, null=True)
    type_rplrib5 = models.CharField(max_length=20, blank=True)
    cpr_rplrib5 = models.CharField(max_length=2, blank=True)
    ralrib5 = models.IntegerField(blank=True, null=True)
    com_ralrib5 = models.FloatField(blank=True, null=True)
    type_ralrib5 = models.CharField(max_length=20, blank=True)
    cpr_ralrib5 = models.CharField(max_length=2, blank=True)
    rarib5 = models.IntegerField(blank=True, null=True)
    com_rarib5 = models.FloatField(blank=True, null=True)
    type_rarib5 = models.CharField(max_length=20, blank=True)
    cpr_rarib5 = models.CharField(max_length=2, blank=True)
    rprib6 = models.IntegerField(blank=True, null=True)
    com_rprib6 = models.FloatField(blank=True, null=True)
    type_rprib6 = models.CharField(max_length=20, blank=True)
    cpr_rprib6 = models.CharField(max_length=2, blank=True)
    rplrib6 = models.IntegerField(blank=True, null=True)
    com_rplrib6 = models.FloatField(blank=True, null=True)
    type_rplrib6 = models.CharField(max_length=20, blank=True)
    cpr_rplrib6 = models.CharField(max_length=2, blank=True)
    ralrib6 = models.IntegerField(blank=True, null=True)
    com_ralrib6 = models.FloatField(blank=True, null=True)
    type_ralrib6 = models.CharField(max_length=20, blank=True)
    cpr_ralrib6 = models.CharField(max_length=2, blank=True)
    rarib6 = models.IntegerField(blank=True, null=True)
    com_rarib6 = models.FloatField(blank=True, null=True)
    type_rarib6 = models.CharField(max_length=20, blank=True)
    cpr_rarib6 = models.CharField(max_length=2, blank=True)
    rprib7 = models.IntegerField(blank=True, null=True)
    com_rprib7 = models.FloatField(blank=True, null=True)
    type_rprib7 = models.CharField(max_length=20, blank=True)
    cpr_rprib7 = models.CharField(max_length=2, blank=True)
    rplrib7 = models.IntegerField(blank=True, null=True)
    com_rplrib7 = models.FloatField(blank=True, null=True)
    type_rplrib7 = models.CharField(max_length=20, blank=True)
    cpr_rplrib7 = models.CharField(max_length=2, blank=True)
    ralrib7 = models.IntegerField(blank=True, null=True)
    com_ralrib7 = models.FloatField(blank=True, null=True)
    type_ralrib7 = models.CharField(max_length=20, blank=True)
    cpr_ralrib7 = models.CharField(max_length=2, blank=True)
    rarib7 = models.IntegerField(blank=True, null=True)
    com_rarib7 = models.FloatField(blank=True, null=True)
    type_rarib7 = models.CharField(max_length=20, blank=True)
    cpr_rarib7 = models.CharField(max_length=2, blank=True)
    rprib8 = models.IntegerField(blank=True, null=True)
    com_rprib8 = models.FloatField(blank=True, null=True)
    type_rprib8 = models.CharField(max_length=20, blank=True)
    cpr_rprib8 = models.CharField(max_length=2, blank=True)
    rplrib8 = models.IntegerField(blank=True, null=True)
    com_rplrib8 = models.FloatField(blank=True, null=True)
    type_rplrib8 = models.CharField(max_length=20, blank=True)
    cpr_rplrib8 = models.CharField(max_length=2, blank=True)
    ralrib8 = models.IntegerField(blank=True, null=True)
    com_ralrib8 = models.FloatField(blank=True, null=True)
    type_ralrib8 = models.CharField(max_length=20, blank=True)
    cpr_ralrib8 = models.CharField(max_length=2, blank=True)
    rarib8 = models.IntegerField(blank=True, null=True)
    com_rarib8 = models.FloatField(blank=True, null=True)
    type_rarib8 = models.CharField(max_length=20, blank=True)
    cpr_rarib8 = models.CharField(max_length=2, blank=True)
    rprib9 = models.IntegerField(blank=True, null=True)
    com_rprib9 = models.FloatField(blank=True, null=True)
    type_rprib9 = models.CharField(max_length=20, blank=True)
    cpr_rprib9 = models.CharField(max_length=2, blank=True)
    rplrib9 = models.IntegerField(blank=True, null=True)
    com_rplrib9 = models.FloatField(blank=True, null=True)
    type_rplrib9 = models.CharField(max_length=20, blank=True)
    cpr_rplrib9 = models.CharField(max_length=2, blank=True)
    ralrib9 = models.IntegerField(blank=True, null=True)
    com_ralrib9 = models.FloatField(blank=True, null=True)
    type_ralrib9 = models.CharField(max_length=20, blank=True)
    cpr_ralrib9 = models.CharField(max_length=2, blank=True)
    rarib9 = models.IntegerField(blank=True, null=True)
    com_rarib9 = models.FloatField(blank=True, null=True)
    type_rarib9 = models.CharField(max_length=20, blank=True)
    cpr_rarib9 = models.CharField(max_length=2, blank=True)
    rprib10 = models.IntegerField(blank=True, null=True)
    com_rprib10 = models.FloatField(blank=True, null=True)
    type_rprib10 = models.CharField(max_length=20, blank=True)
    cpr_rprib10 = models.CharField(max_length=2, blank=True)
    rplrib10 = models.IntegerField(blank=True, null=True)
    com_rplrib10 = models.FloatField(blank=True, null=True)
    type_rplrib10 = models.CharField(max_length=20, blank=True)
    cpr_rplrib10 = models.CharField(max_length=2, blank=True)
    ralrib10 = models.IntegerField(blank=True, null=True)
    com_ralrib10 = models.FloatField(blank=True, null=True)
    type_ralrib10 = models.CharField(max_length=20, blank=True)
    cpr_ralrib10 = models.CharField(max_length=2, blank=True)
    rarib10 = models.IntegerField(blank=True, null=True)
    com_rarib10 = models.FloatField(blank=True, null=True)
    type_rarib10 = models.CharField(max_length=20, blank=True)
    cpr_rarib10 = models.CharField(max_length=2, blank=True)
    rprib11 = models.IntegerField(blank=True, null=True)
    com_rprib11 = models.FloatField(blank=True, null=True)
    type_rprib11 = models.CharField(max_length=20, blank=True)
    cpr_rprib11 = models.CharField(max_length=2, blank=True)
    rplrib11 = models.IntegerField(blank=True, null=True)
    com_rplrib11 = models.FloatField(blank=True, null=True)
    type_rplrib11 = models.CharField(max_length=20, blank=True)
    cpr_rplrib11 = models.CharField(max_length=2, blank=True)
    ralrib11 = models.IntegerField(blank=True, null=True)
    com_ralrib11 = models.FloatField(blank=True, null=True)
    type_ralrib11 = models.CharField(max_length=20, blank=True)
    cpr_ralrib11 = models.CharField(max_length=2, blank=True)
    rprib12 = models.IntegerField(blank=True, null=True)
    com_rprib12 = models.FloatField(blank=True, null=True)
    type_rprib12 = models.CharField(max_length=20, blank=True)
    cpr_rprib12 = models.CharField(max_length=2, blank=True)
    rplrib12 = models.IntegerField(blank=True, null=True)
    com_rplrib12 = models.FloatField(blank=True, null=True)
    type_rplrib12 = models.CharField(max_length=20, blank=True)
    cpr_rplrib12 = models.CharField(max_length=2, blank=True)
    ralrib12 = models.IntegerField(blank=True, null=True)
    com_ralrib12 = models.FloatField(blank=True, null=True)
    type_ralrib12 = models.CharField(max_length=20, blank=True)
    cpr_ralrib12 = models.CharField(max_length=2, blank=True)

    def __str__(self):
        return self.case_id

class Filter(models.Model):
    # case_id = models.CharField("Case ID", max_length=240,default="", unique=True)
    # age = models.IntegerField("Age", blank=True, null=True)
    sex = models.CharField("Sex", max_length= 2, blank=True)
    # weight = models.IntegerField("Weight", blank=True, null=True)
    # height = models.IntegerField("Height", blank=True, null=True)
    ancestry = models.CharField("Ancestry", max_length=100, blank=True)
    # mod = models.CharField("Mode of Death", max_length=240, blank=True)
    # cod = models.CharField("Cause of Death", max_length=240, blank=True)
    # cod_type = models.TextField("CoD Info", blank=True)
    xray = models.CharField('X-Ray', max_length=1, blank=True)
    cpr = models.CharField('CPR', max_length=1, blank=True)
    belted = models.CharField('Belted', max_length=1, blank=True)
    obese = models.CharField('Obese', max_length=1,blank=True)
    cardio = models.CharField('Cardiovascular Issues', max_length=1, blank=True)
    patho = models.CharField('Pathologies', max_length=1, blank=True)
    tobacco = models.CharField('Cigarette/Tobacco Use', max_length=1, blank=True)
    marijuana = models.CharField('Marijuana Use', max_length=1, blank=True)
    alcohol = models.CharField('Alcohol Use', max_length=1, blank=True)
    prescription = models.CharField('Prescription Medications', max_length=1, blank=True)
    drug_use = models.CharField('Illicit Drug Use', max_length=1, blank=True)
    sternum = models.IntegerField(blank=True, null=True)
    lprib1 = models.IntegerField(blank=True, null=True)
    lplrib1 = models.IntegerField(blank=True, null=True)
    lalrib1 = models.IntegerField(blank=True, null=True)
    lprib2 = models.IntegerField(blank=True, null=True)
    lplrib2 = models.IntegerField(blank=True, null=True)
    lalrib2 = models.IntegerField(blank=True, null=True)
    larib2 = models.IntegerField(blank=True, null=True)
    lprib3 = models.IntegerField(blank=True, null=True)
    lplrib3 = models.IntegerField(blank=True, null=True)
    lalrib3 = models.IntegerField(blank=True, null=True)
    larib3 = models.IntegerField(blank=True, null=True)
    lprib4 = models.IntegerField(blank=True, null=True)
    lplrib4 = models.IntegerField(blank=True, null=True)
    lalrib4 = models.IntegerField(blank=True, null=True)
    larib4 = models.IntegerField(blank=True, null=True)
    lprib5 = models.IntegerField(blank=True, null=True)
    lplrib5 = models.IntegerField(blank=True, null=True)
    lalrib5 = models.IntegerField(blank=True, null=True)
    larib5 = models.IntegerField(blank=True, null=True)
    lprib6 = models.IntegerField(blank=True, null=True)
    lplrib6 = models.IntegerField(blank=True, null=True)
    lalrib6 = models.IntegerField(blank=True, null=True)
    larib6 = models.IntegerField(blank=True, null=True)
    lprib7 = models.IntegerField(blank=True, null=True)
    lplrib7 = models.IntegerField(blank=True, null=True)
    lalrib7 = models.IntegerField(blank=True, null=True)
    larib7 = models.IntegerField(blank=True, null=True)
    lprib8 = models.IntegerField(blank=True, null=True)
    lplrib8 = models.IntegerField(blank=True, null=True)
    lalrib8 = models.IntegerField(blank=True, null=True)
    larib8 = models.IntegerField(blank=True, null=True)
    lprib9 = models.IntegerField(blank=True, null=True)
    lplrib9 = models.IntegerField(blank=True, null=True)
    lalrib9 = models.IntegerField(blank=True, null=True)
    larib9 = models.IntegerField(blank=True, null=True)
    lprib10 = models.IntegerField(blank=True, null=True)
    lplrib10 = models.IntegerField(blank=True, null=True)
    lalrib10 = models.IntegerField(blank=True, null=True)
    larib10 = models.IntegerField(blank=True, null=True)
    lprib11 = models.IntegerField(blank=True, null=True)
    lplrib11 = models.IntegerField(blank=True, null=True)
    lalrib11 = models.IntegerField(blank=True, null=True)
    lprib12 = models.IntegerField(blank=True, null=True)
    lplrib12 = models.IntegerField(blank=True, null=True)
    lalrib12 = models.IntegerField(blank=True, null=True)
    rprib1 = models.IntegerField(blank=True, null=True)
    rplrib1 = models.IntegerField(blank=True, null=True)
    ralrib1 = models.IntegerField(blank=True, null=True)
    rprib2 = models.IntegerField(blank=True, null=True)
    rplrib2 = models.IntegerField(blank=True, null=True)
    ralrib2 = models.IntegerField(blank=True, null=True)
    rarib2 = models.IntegerField(blank=True, null=True)
    rprib3 = models.IntegerField(blank=True, null=True)
    rplrib3 = models.IntegerField(blank=True, null=True)
    ralrib3 = models.IntegerField(blank=True, null=True)
    rarib3 = models.IntegerField(blank=True, null=True)
    rprib4 = models.IntegerField(blank=True, null=True)
    rplrib4 = models.IntegerField(blank=True, null=True)
    ralrib4 = models.IntegerField(blank=True, null=True)
    rarib4 = models.IntegerField(blank=True, null=True)
    rprib5 = models.IntegerField(blank=True, null=True)
    rplrib5 = models.IntegerField(blank=True, null=True)
    ralrib5 = models.IntegerField(blank=True, null=True)
    rarib5 = models.IntegerField(blank=True, null=True)
    rprib6 = models.IntegerField(blank=True, null=True)
    rplrib6 = models.IntegerField(blank=True, null=True)
    ralrib6 = models.IntegerField(blank=True, null=True)
    rarib6 = models.IntegerField(blank=True, null=True)
    rprib7 = models.IntegerField(blank=True, null=True)
    rplrib7 = models.IntegerField(blank=True, null=True)
    ralrib7 = models.IntegerField(blank=True, null=True)
    rarib7 = models.IntegerField(blank=True, null=True)
    rprib8 = models.IntegerField(blank=True, null=True)
    rplrib8 = models.IntegerField(blank=True, null=True)
    ralrib8 = models.IntegerField(blank=True, null=True)
    rarib8 = models.IntegerField(blank=True, null=True)
    rprib9 = models.IntegerField(blank=True, null=True)
    rplrib9 = models.IntegerField(blank=True, null=True)
    ralrib9 = models.IntegerField(blank=True, null=True)
    rarib9 = models.IntegerField(blank=True, null=True)
    rprib10 = models.IntegerField(blank=True, null=True)
    rplrib10 = models.IntegerField(blank=True, null=True)
    ralrib10 = models.IntegerField(blank=True, null=True)
    rarib10 = models.IntegerField(blank=True, null=True)
    rprib11 = models.IntegerField(blank=True, null=True)
    rplrib11 = models.IntegerField(blank=True, null=True)
    ralrib11 = models.IntegerField(blank=True, null=True)
    rprib12 = models.IntegerField(blank=True, null=True)
    rplrib12 = models.IntegerField(blank=True, null=True)
    ralrib12 = models.IntegerField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.pk and Filter.objects.exists():
        # if you'll not check for self.pk 
        # then error will also raised in update of exists model
            raise ValidationError('There is can be only one Filter instance')
        return super(Filter, self).save(*args, **kwargs)
