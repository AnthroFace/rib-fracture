from django.db import models

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
    health_notes = models.TextField('Health Notes', default=None, blank=True)
    notes = models.TextField('Notes', default=None, blank=True)

    #registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.case_id


class Fracture(models.Model):
    location = models.CharField("Location", max_length=20, blank=True)
    completeness = models.FloatField("Completeness", blank=True, null=True)
    fracture_type = models.CharField("Fracture Type", max_length=20, blank=True)
    cpr = models.CharField('CPR', max_length=1, blank=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name="rib_fracture")

    def __str__(self):
        return self.patient.case_id

class Filter(models.Model):
    fil = models.CharField("Filter", max_length=100, blank=True)
    value = models.CharField("Value", max_length=100, blank=True)