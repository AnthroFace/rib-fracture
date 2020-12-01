# Generated by Django 2.2.7 on 2019-11-29 13:47

from django.db import migrations

def create_data(apps, schema_editor):
    Patient = apps.get_model('patients', 'Patient')
    Patient(case_id="0000000", age=50, sex="M", weight=147, ancestry="ASI", mod="dead", cod="dead", add_notes="N/A").save()

class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
    	migrations.RunPython(create_data),
    ]
