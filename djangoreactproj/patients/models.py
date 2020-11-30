from django.db import models

class Patient(models.Model):
    case_id = models.CharField("Case ID", max_length=240)
    age = models.IntegerField("Age")
    #sex
    #ancestry
    weight = models.IntegerField("Weight")
    mod = models.CharField("Mode of Death", max_length=240)
    cod = models.CharField("Cause of Death", max_length=240)
    add_notes = models.TextField("Additional Health Notes", default=None)

    #registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.case_id