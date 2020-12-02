from django.db import models

# SEX = (
#     ('F', 'Female'),
#     ('M', 'Male'),
# )

class Patient(models.Model):
    case_id = models.CharField("Case ID", max_length=240,default="")
    age = models.IntegerField("Age")
    sex = models.CharField("Sex", max_length= 2)
    weight = models.IntegerField("Weight")
    ancestry = models.CharField("Ancestry", max_length=20)
    mod = models.CharField("Mode of Death", max_length=240)
    cod = models.CharField("Cause of Death", max_length=240)
    cod_type = models.TextField("CoD Info", blank=True, null=True)
    xray = models.CharField('X-Ray', max_length=1)
    belted = models.CharField('Belted', max_length=1)
    obese = models.CharField('Obese', max_length=1)
    cardio = models.CharField('Cardiovascular Issues', max_length=1)
    patho = models.CharField('Pathologies', max_length=1)
    tobacco = models.CharField('Cigarette/Tobacco Use', max_length=1)
    marijuana = models.CharField('Marijuana Use', max_length=1)
    alcohol = models.CharField('Alcohol Use', max_length=1)
    prescription = models.CharField('Prescription Medications', max_length=1)
    drug_use = models.CharField('Illicit Drug Use', max_length=1)
    health_notes = models.TextField('Health Notes', default=None)

    #registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.case_id