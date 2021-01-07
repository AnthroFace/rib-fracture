# Generated by Django 3.1.3 on 2021-01-07 00:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('case_id', models.CharField(default='', max_length=240, verbose_name='Case ID')),
                ('age', models.IntegerField(blank=True, default=None, null=True, verbose_name='Age')),
                ('sex', models.CharField(blank=True, max_length=2, verbose_name='Sex')),
                ('weight', models.IntegerField(blank=True, null=True, verbose_name='Weight')),
                ('height', models.IntegerField(blank=True, null=True, verbose_name='Height')),
                ('ancestry', models.CharField(blank=True, max_length=20, verbose_name='Ancestry')),
                ('mod', models.CharField(blank=True, max_length=240, verbose_name='Mode of Death')),
                ('cod', models.CharField(blank=True, max_length=240, verbose_name='Cause of Death')),
                ('cod_type', models.TextField(blank=True, verbose_name='CoD Info')),
                ('xray', models.CharField(blank=True, max_length=1, verbose_name='X-Ray')),
                ('cpr', models.CharField(blank=True, max_length=1, verbose_name='CPR')),
                ('belted', models.CharField(blank=True, max_length=1, verbose_name='Belted')),
                ('obese', models.CharField(blank=True, max_length=1, verbose_name='Obese')),
                ('cardio', models.CharField(blank=True, max_length=1, verbose_name='Cardiovascular Issues')),
                ('patho', models.CharField(blank=True, max_length=1, verbose_name='Pathologies')),
                ('tobacco', models.CharField(blank=True, max_length=1, verbose_name='Cigarette/Tobacco Use')),
                ('marijuana', models.CharField(blank=True, max_length=1, verbose_name='Marijuana Use')),
                ('alcohol', models.CharField(blank=True, max_length=1, verbose_name='Alcohol Use')),
                ('prescription', models.CharField(blank=True, max_length=1, verbose_name='Prescription Medications')),
                ('drug_use', models.CharField(blank=True, max_length=1, verbose_name='Illicit Drug Use')),
                ('health_notes', models.TextField(blank=True, default=None, verbose_name='Health Notes')),
                ('notes', models.TextField(blank=True, default=None, verbose_name='Notes')),
            ],
        ),
        migrations.CreateModel(
            name='Fracture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(blank=True, max_length=20, verbose_name='Location')),
                ('completeness', models.FloatField(blank=True, null=True, verbose_name='Completeness')),
                ('fracture_type', models.CharField(blank=True, max_length=20, verbose_name='Fracture Type')),
                ('cpr', models.CharField(blank=True, max_length=1, verbose_name='CPR')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rib_fracture', to='patients.patient')),
            ],
        ),
    ]
