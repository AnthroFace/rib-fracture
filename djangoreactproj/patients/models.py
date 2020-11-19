from django.db import models

#class Customer(models.Model):
#    first_name = models.CharField("First name", max_length=255)
#    last_name = models.CharField("Last name", max_length=255)
#    email = models.EmailField()
#    phone = models.CharField(max_length=20)
#    address =  models.TextField(blank=True, null=True)
#    description = models.TextField(blank=True, null=True)
#    createdAt = models.DateTimeField("Created At", auto_now_add=True)

#    def __str__(self):
#        return self.first_name

CATEGORIES = (
  ('HYP', 'hypertension'),
  ('CYST', 'cyst'),
  ('DERM', 'dermititis'),
  ('HEP', 'hepatomegaly'),
  ('DEM', 'dementia'),
  ('CYS', 'cyst'),
  ('PRO', 'prostate enlargement'),
  ('MEDS', 'cholestoral meds'),
  ('OBS', 'obsese'),
  ('DRG', 'drug use'),
  ('LIV', 'fatty liver'),
  ('HRT', 'heart anomaly'),
  ('HEA', 'healthy'),
  ('SMO', 'smoker'),
  ('SUR', 'past surgeries'),
  ('SUB', 'substance abuse'),
)

SEX = (
    ('F', 'Female'),
    ('M', 'Male'),
)

DECISION = (
  ('Y', 'Yes'),
  ('N', 'No'),
)

ANCESTRY = (
    ('WHT', 'White'),
    ('HIS', 'Hispanic'),
    ('BLK', 'Black'),
    ('AMI', 'American Indian'),
    ('ASN', 'Asian'),
    ('PCI', 'Pacific Islander'),
    ('FIL', 'Filipino'),
    ('WAS', 'West Asian'),
    ('ASI', 'Asian Indian'),
)

MOD = (
    ('ACC', 'accident'),
    ('SUI', 'suicide'),
    ('HOM', 'homicide'),
    ('UND', 'undeterminded'),
)

COD = (
    ('MVC', 'Motor Vehicle Crash'),
    ('FLL', 'Fall'),
    ('BFT', 'Blunt Force Trauma'), #if blunt bft, add an option to say where, option to say multiple?
    ('CRS', 'Crush'),
    # ('MBF', 'Multiple Blunt Force Trauma') needed?
    ('MAS', 'Mechanical Asphyxia'),
)

class Patient(models.Model):
    case_id = models.CharField("Case ID", max_length=255, unique = True)
    age = models.IntegerField("Age")
    sex = models.CharField("Sex", max_length= 1, choices=SEX)
    weight = models.IntegerField("Weight")
    ancestry = models.CharField("Ancestry", max_length=3, choices=ANCESTRY)
    mod = models.CharField("Mode of Death", max_length=3, choices=MOD)
    cod = models.CharField("Cause of Death", max_length=3, choices=COD)
    cod_type = models.TextField("CoD Info", blank=True, null=True)
    xray = models.CharField('X-Ray', max_length=1, choices=DECISION)
    belted = models.CharField('Belted', max_length=1, choices=DECISION)
    obese = models.CharField('Obese', max_length=1, choices=DECISION)
    cardio = models.CharField('Cardiovascular Issues', max_length=1, choices=DECISION)
    patho = models.CharField('Pathologies', max_length=1, choices=DECISION)
    tobacco = models.CharField('Cigarette/Tobacco Use', max_length=1, choices=DECISION)
    marijuana = models.CharField('Marijuana Use', max_length=1, choices=DECISION)
    alcohol = models.CharField('Alcohol Use', max_length=1, choices=DECISION)
    prescription = models.CharField('Prescription Medications', max_length=1, choices=DECISION)
    drug_use = models.CharField('Illicit Drug Use', max_length=1, choices=DECISION)
    health_notes = models.CharField('Health Notes', max_length=4, choices = CATEGORIES)
    add_notes = models.TextField("Additional Notes", blank=True, null=True)