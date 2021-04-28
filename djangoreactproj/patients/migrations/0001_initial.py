# Generated by Django 3.1.7 on 2021-04-28 07:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Filter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age_start', models.IntegerField(blank=True, null=True, verbose_name='Age Start')),
                ('age_end', models.IntegerField(blank=True, null=True, verbose_name='Age End')),
                ('weight_start', models.IntegerField(blank=True, null=True, verbose_name='Age Start')),
                ('weight_end', models.IntegerField(blank=True, null=True, verbose_name='Age End')),
                ('height_start', models.IntegerField(blank=True, null=True, verbose_name='Age Start')),
                ('height_end', models.IntegerField(blank=True, null=True, verbose_name='Age End')),
                ('sex', models.CharField(blank=True, max_length=2, verbose_name='Sex')),
                ('ancestry', models.CharField(blank=True, max_length=100, verbose_name='Ancestry')),
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
                ('sternum', models.IntegerField(blank=True, null=True)),
                ('lprib1', models.IntegerField(blank=True, null=True)),
                ('lplrib1', models.IntegerField(blank=True, null=True)),
                ('lalrib1', models.IntegerField(blank=True, null=True)),
                ('lprib2', models.IntegerField(blank=True, null=True)),
                ('lplrib2', models.IntegerField(blank=True, null=True)),
                ('lalrib2', models.IntegerField(blank=True, null=True)),
                ('larib2', models.IntegerField(blank=True, null=True)),
                ('lprib3', models.IntegerField(blank=True, null=True)),
                ('lplrib3', models.IntegerField(blank=True, null=True)),
                ('lalrib3', models.IntegerField(blank=True, null=True)),
                ('larib3', models.IntegerField(blank=True, null=True)),
                ('lprib4', models.IntegerField(blank=True, null=True)),
                ('lplrib4', models.IntegerField(blank=True, null=True)),
                ('lalrib4', models.IntegerField(blank=True, null=True)),
                ('larib4', models.IntegerField(blank=True, null=True)),
                ('lprib5', models.IntegerField(blank=True, null=True)),
                ('lplrib5', models.IntegerField(blank=True, null=True)),
                ('lalrib5', models.IntegerField(blank=True, null=True)),
                ('larib5', models.IntegerField(blank=True, null=True)),
                ('lprib6', models.IntegerField(blank=True, null=True)),
                ('lplrib6', models.IntegerField(blank=True, null=True)),
                ('lalrib6', models.IntegerField(blank=True, null=True)),
                ('larib6', models.IntegerField(blank=True, null=True)),
                ('lprib7', models.IntegerField(blank=True, null=True)),
                ('lplrib7', models.IntegerField(blank=True, null=True)),
                ('lalrib7', models.IntegerField(blank=True, null=True)),
                ('larib7', models.IntegerField(blank=True, null=True)),
                ('lprib8', models.IntegerField(blank=True, null=True)),
                ('lplrib8', models.IntegerField(blank=True, null=True)),
                ('lalrib8', models.IntegerField(blank=True, null=True)),
                ('larib8', models.IntegerField(blank=True, null=True)),
                ('lprib9', models.IntegerField(blank=True, null=True)),
                ('lplrib9', models.IntegerField(blank=True, null=True)),
                ('lalrib9', models.IntegerField(blank=True, null=True)),
                ('larib9', models.IntegerField(blank=True, null=True)),
                ('lprib10', models.IntegerField(blank=True, null=True)),
                ('lplrib10', models.IntegerField(blank=True, null=True)),
                ('lalrib10', models.IntegerField(blank=True, null=True)),
                ('larib10', models.IntegerField(blank=True, null=True)),
                ('lprib11', models.IntegerField(blank=True, null=True)),
                ('lplrib11', models.IntegerField(blank=True, null=True)),
                ('lalrib11', models.IntegerField(blank=True, null=True)),
                ('lprib12', models.IntegerField(blank=True, null=True)),
                ('lplrib12', models.IntegerField(blank=True, null=True)),
                ('lalrib12', models.IntegerField(blank=True, null=True)),
                ('rprib1', models.IntegerField(blank=True, null=True)),
                ('rplrib1', models.IntegerField(blank=True, null=True)),
                ('ralrib1', models.IntegerField(blank=True, null=True)),
                ('rprib2', models.IntegerField(blank=True, null=True)),
                ('rplrib2', models.IntegerField(blank=True, null=True)),
                ('ralrib2', models.IntegerField(blank=True, null=True)),
                ('rarib2', models.IntegerField(blank=True, null=True)),
                ('rprib3', models.IntegerField(blank=True, null=True)),
                ('rplrib3', models.IntegerField(blank=True, null=True)),
                ('ralrib3', models.IntegerField(blank=True, null=True)),
                ('rarib3', models.IntegerField(blank=True, null=True)),
                ('rprib4', models.IntegerField(blank=True, null=True)),
                ('rplrib4', models.IntegerField(blank=True, null=True)),
                ('ralrib4', models.IntegerField(blank=True, null=True)),
                ('rarib4', models.IntegerField(blank=True, null=True)),
                ('rprib5', models.IntegerField(blank=True, null=True)),
                ('rplrib5', models.IntegerField(blank=True, null=True)),
                ('ralrib5', models.IntegerField(blank=True, null=True)),
                ('rarib5', models.IntegerField(blank=True, null=True)),
                ('rprib6', models.IntegerField(blank=True, null=True)),
                ('rplrib6', models.IntegerField(blank=True, null=True)),
                ('ralrib6', models.IntegerField(blank=True, null=True)),
                ('rarib6', models.IntegerField(blank=True, null=True)),
                ('rprib7', models.IntegerField(blank=True, null=True)),
                ('rplrib7', models.IntegerField(blank=True, null=True)),
                ('ralrib7', models.IntegerField(blank=True, null=True)),
                ('rarib7', models.IntegerField(blank=True, null=True)),
                ('rprib8', models.IntegerField(blank=True, null=True)),
                ('rplrib8', models.IntegerField(blank=True, null=True)),
                ('ralrib8', models.IntegerField(blank=True, null=True)),
                ('rarib8', models.IntegerField(blank=True, null=True)),
                ('rprib9', models.IntegerField(blank=True, null=True)),
                ('rplrib9', models.IntegerField(blank=True, null=True)),
                ('ralrib9', models.IntegerField(blank=True, null=True)),
                ('rarib9', models.IntegerField(blank=True, null=True)),
                ('rprib10', models.IntegerField(blank=True, null=True)),
                ('rplrib10', models.IntegerField(blank=True, null=True)),
                ('ralrib10', models.IntegerField(blank=True, null=True)),
                ('rarib10', models.IntegerField(blank=True, null=True)),
                ('rprib11', models.IntegerField(blank=True, null=True)),
                ('rplrib11', models.IntegerField(blank=True, null=True)),
                ('ralrib11', models.IntegerField(blank=True, null=True)),
                ('rprib12', models.IntegerField(blank=True, null=True)),
                ('rplrib12', models.IntegerField(blank=True, null=True)),
                ('ralrib12', models.IntegerField(blank=True, null=True)),
                ('dataset', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('case_id', models.CharField(default='', max_length=240, verbose_name='Case ID')),
                ('age', models.IntegerField(blank=True, null=True, verbose_name='Age')),
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
                ('health_notes', models.TextField(blank=True, verbose_name='Health Notes')),
                ('notes', models.TextField(blank=True, null=True, verbose_name='Notes')),
                ('sternum', models.IntegerField(blank=True, null=True)),
                ('cpr_sternum', models.CharField(blank=True, max_length=2, null=True)),
                ('lprib1', models.IntegerField(blank=True, null=True)),
                ('com_lprib1', models.FloatField(blank=True, null=True)),
                ('type_lprib1', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib1', models.CharField(blank=True, max_length=2)),
                ('lplrib1', models.IntegerField(blank=True, null=True)),
                ('com_lplrib1', models.FloatField(blank=True, null=True)),
                ('type_lplrib1', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib1', models.CharField(blank=True, max_length=2)),
                ('lalrib1', models.IntegerField(blank=True, null=True)),
                ('com_lalrib1', models.FloatField(blank=True, null=True)),
                ('type_lalrib1', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib1', models.CharField(blank=True, max_length=2)),
                ('lprib2', models.IntegerField(blank=True, null=True)),
                ('com_lprib2', models.FloatField(blank=True, null=True)),
                ('type_lprib2', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib2', models.CharField(blank=True, max_length=2)),
                ('lplrib2', models.IntegerField(blank=True, null=True)),
                ('com_lplrib2', models.FloatField(blank=True, null=True)),
                ('type_lplrib2', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib2', models.CharField(blank=True, max_length=2)),
                ('lalrib2', models.IntegerField(blank=True, null=True)),
                ('com_lalrib2', models.FloatField(blank=True, null=True)),
                ('type_lalrib2', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib2', models.CharField(blank=True, max_length=2)),
                ('larib2', models.IntegerField(blank=True, null=True)),
                ('com_larib2', models.FloatField(blank=True, null=True)),
                ('type_larib2', models.CharField(blank=True, max_length=20)),
                ('cpr_larib2', models.CharField(blank=True, max_length=2)),
                ('lprib3', models.IntegerField(blank=True, null=True)),
                ('com_lprib3', models.FloatField(blank=True, null=True)),
                ('type_lprib3', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib3', models.CharField(blank=True, max_length=2)),
                ('lplrib3', models.IntegerField(blank=True, null=True)),
                ('com_lplrib3', models.FloatField(blank=True, null=True)),
                ('type_lplrib3', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib3', models.CharField(blank=True, max_length=2)),
                ('lalrib3', models.IntegerField(blank=True, null=True)),
                ('com_lalrib3', models.FloatField(blank=True, null=True)),
                ('type_lalrib3', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib3', models.CharField(blank=True, max_length=2)),
                ('larib3', models.IntegerField(blank=True, null=True)),
                ('com_larib3', models.FloatField(blank=True, null=True)),
                ('type_larib3', models.CharField(blank=True, max_length=20)),
                ('cpr_larib3', models.CharField(blank=True, max_length=2)),
                ('lprib4', models.IntegerField(blank=True, null=True)),
                ('com_lprib4', models.FloatField(blank=True, null=True)),
                ('type_lprib4', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib4', models.CharField(blank=True, max_length=2)),
                ('lplrib4', models.IntegerField(blank=True, null=True)),
                ('com_lplrib4', models.FloatField(blank=True, null=True)),
                ('type_lplrib4', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib4', models.CharField(blank=True, max_length=2)),
                ('lalrib4', models.IntegerField(blank=True, null=True)),
                ('com_lalrib4', models.FloatField(blank=True, null=True)),
                ('type_lalrib4', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib4', models.CharField(blank=True, max_length=2)),
                ('larib4', models.IntegerField(blank=True, null=True)),
                ('com_larib4', models.FloatField(blank=True, null=True)),
                ('type_larib4', models.CharField(blank=True, max_length=20)),
                ('cpr_larib4', models.CharField(blank=True, max_length=2)),
                ('lprib5', models.IntegerField(blank=True, null=True)),
                ('com_lprib5', models.FloatField(blank=True, null=True)),
                ('type_lprib5', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib5', models.CharField(blank=True, max_length=2)),
                ('lplrib5', models.IntegerField(blank=True, null=True)),
                ('com_lplrib5', models.FloatField(blank=True, null=True)),
                ('type_lplrib5', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib5', models.CharField(blank=True, max_length=2)),
                ('lalrib5', models.IntegerField(blank=True, null=True)),
                ('com_lalrib5', models.FloatField(blank=True, null=True)),
                ('type_lalrib5', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib5', models.CharField(blank=True, max_length=2)),
                ('larib5', models.IntegerField(blank=True, null=True)),
                ('com_larib5', models.FloatField(blank=True, null=True)),
                ('type_larib5', models.CharField(blank=True, max_length=20)),
                ('cpr_larib5', models.CharField(blank=True, max_length=2)),
                ('lprib6', models.IntegerField(blank=True, null=True)),
                ('com_lprib6', models.FloatField(blank=True, null=True)),
                ('type_lprib6', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib6', models.CharField(blank=True, max_length=2)),
                ('lplrib6', models.IntegerField(blank=True, null=True)),
                ('com_lplrib6', models.FloatField(blank=True, null=True)),
                ('type_lplrib6', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib6', models.CharField(blank=True, max_length=2)),
                ('lalrib6', models.IntegerField(blank=True, null=True)),
                ('com_lalrib6', models.FloatField(blank=True, null=True)),
                ('type_lalrib6', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib6', models.CharField(blank=True, max_length=2)),
                ('larib6', models.IntegerField(blank=True, null=True)),
                ('com_larib6', models.FloatField(blank=True, null=True)),
                ('type_larib6', models.CharField(blank=True, max_length=20)),
                ('cpr_larib6', models.CharField(blank=True, max_length=2)),
                ('lprib7', models.IntegerField(blank=True, null=True)),
                ('com_lprib7', models.FloatField(blank=True, null=True)),
                ('type_lprib7', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib7', models.CharField(blank=True, max_length=2)),
                ('lplrib7', models.IntegerField(blank=True, null=True)),
                ('com_lplrib7', models.FloatField(blank=True, null=True)),
                ('type_lplrib7', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib7', models.CharField(blank=True, max_length=2)),
                ('lalrib7', models.IntegerField(blank=True, null=True)),
                ('com_lalrib7', models.FloatField(blank=True, null=True)),
                ('type_lalrib7', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib7', models.CharField(blank=True, max_length=2)),
                ('larib7', models.IntegerField(blank=True, null=True)),
                ('com_larib7', models.FloatField(blank=True, null=True)),
                ('type_larib7', models.CharField(blank=True, max_length=20)),
                ('cpr_larib7', models.CharField(blank=True, max_length=2)),
                ('lprib8', models.IntegerField(blank=True, null=True)),
                ('com_lprib8', models.FloatField(blank=True, null=True)),
                ('type_lprib8', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib8', models.CharField(blank=True, max_length=2)),
                ('lplrib8', models.IntegerField(blank=True, null=True)),
                ('com_lplrib8', models.FloatField(blank=True, null=True)),
                ('type_lplrib8', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib8', models.CharField(blank=True, max_length=2)),
                ('lalrib8', models.IntegerField(blank=True, null=True)),
                ('com_lalrib8', models.FloatField(blank=True, null=True)),
                ('type_lalrib8', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib8', models.CharField(blank=True, max_length=2)),
                ('larib8', models.IntegerField(blank=True, null=True)),
                ('com_larib8', models.FloatField(blank=True, null=True)),
                ('type_larib8', models.CharField(blank=True, max_length=20)),
                ('cpr_larib8', models.CharField(blank=True, max_length=2)),
                ('lprib9', models.IntegerField(blank=True, null=True)),
                ('com_lprib9', models.FloatField(blank=True, null=True)),
                ('type_lprib9', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib9', models.CharField(blank=True, max_length=2)),
                ('lplrib9', models.IntegerField(blank=True, null=True)),
                ('com_lplrib9', models.FloatField(blank=True, null=True)),
                ('type_lplrib9', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib9', models.CharField(blank=True, max_length=2)),
                ('lalrib9', models.IntegerField(blank=True, null=True)),
                ('com_lalrib9', models.FloatField(blank=True, null=True)),
                ('type_lalrib9', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib9', models.CharField(blank=True, max_length=2)),
                ('larib9', models.IntegerField(blank=True, null=True)),
                ('com_larib9', models.FloatField(blank=True, null=True)),
                ('type_larib9', models.CharField(blank=True, max_length=20)),
                ('cpr_larib9', models.CharField(blank=True, max_length=2)),
                ('lprib10', models.IntegerField(blank=True, null=True)),
                ('com_lprib10', models.FloatField(blank=True, null=True)),
                ('type_lprib10', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib10', models.CharField(blank=True, max_length=2)),
                ('lplrib10', models.IntegerField(blank=True, null=True)),
                ('com_lplrib10', models.FloatField(blank=True, null=True)),
                ('type_lplrib10', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib10', models.CharField(blank=True, max_length=2)),
                ('lalrib10', models.IntegerField(blank=True, null=True)),
                ('com_lalrib10', models.FloatField(blank=True, null=True)),
                ('type_lalrib10', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib10', models.CharField(blank=True, max_length=2)),
                ('larib10', models.IntegerField(blank=True, null=True)),
                ('com_larib10', models.FloatField(blank=True, null=True)),
                ('type_larib10', models.CharField(blank=True, max_length=20)),
                ('cpr_larib10', models.CharField(blank=True, max_length=2)),
                ('lprib11', models.IntegerField(blank=True, null=True)),
                ('com_lprib11', models.FloatField(blank=True, null=True)),
                ('type_lprib11', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib11', models.CharField(blank=True, max_length=2)),
                ('lplrib11', models.IntegerField(blank=True, null=True)),
                ('com_lplrib11', models.FloatField(blank=True, null=True)),
                ('type_lplrib11', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib11', models.CharField(blank=True, max_length=2)),
                ('lalrib11', models.IntegerField(blank=True, null=True)),
                ('com_lalrib11', models.FloatField(blank=True, null=True)),
                ('type_lalrib11', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib11', models.CharField(blank=True, max_length=2)),
                ('lprib12', models.IntegerField(blank=True, null=True)),
                ('com_lprib12', models.FloatField(blank=True, null=True)),
                ('type_lprib12', models.CharField(blank=True, max_length=20)),
                ('cpr_lprib12', models.CharField(blank=True, max_length=2)),
                ('lplrib12', models.IntegerField(blank=True, null=True)),
                ('com_lplrib12', models.FloatField(blank=True, null=True)),
                ('type_lplrib12', models.CharField(blank=True, max_length=20)),
                ('cpr_lplrib12', models.CharField(blank=True, max_length=2)),
                ('lalrib12', models.IntegerField(blank=True, null=True)),
                ('com_lalrib12', models.FloatField(blank=True, null=True)),
                ('type_lalrib12', models.CharField(blank=True, max_length=20)),
                ('cpr_lalrib12', models.CharField(blank=True, max_length=2)),
                ('rprib1', models.IntegerField(blank=True, null=True)),
                ('com_rprib1', models.FloatField(blank=True, null=True)),
                ('type_rprib1', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib1', models.CharField(blank=True, max_length=2)),
                ('rplrib1', models.IntegerField(blank=True, null=True)),
                ('com_rplrib1', models.FloatField(blank=True, null=True)),
                ('type_rplrib1', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib1', models.CharField(blank=True, max_length=2)),
                ('ralrib1', models.IntegerField(blank=True, null=True)),
                ('com_ralrib1', models.FloatField(blank=True, null=True)),
                ('type_ralrib1', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib1', models.CharField(blank=True, max_length=2)),
                ('rprib2', models.IntegerField(blank=True, null=True)),
                ('com_rprib2', models.FloatField(blank=True, null=True)),
                ('type_rprib2', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib2', models.CharField(blank=True, max_length=2)),
                ('rplrib2', models.IntegerField(blank=True, null=True)),
                ('com_rplrib2', models.FloatField(blank=True, null=True)),
                ('type_rplrib2', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib2', models.CharField(blank=True, max_length=2)),
                ('ralrib2', models.IntegerField(blank=True, null=True)),
                ('com_ralrib2', models.FloatField(blank=True, null=True)),
                ('type_ralrib2', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib2', models.CharField(blank=True, max_length=2)),
                ('rarib2', models.IntegerField(blank=True, null=True)),
                ('com_rarib2', models.FloatField(blank=True, null=True)),
                ('type_rarib2', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib2', models.CharField(blank=True, max_length=2)),
                ('rprib3', models.IntegerField(blank=True, null=True)),
                ('com_rprib3', models.FloatField(blank=True, null=True)),
                ('type_rprib3', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib3', models.CharField(blank=True, max_length=2)),
                ('rplrib3', models.IntegerField(blank=True, null=True)),
                ('com_rplrib3', models.FloatField(blank=True, null=True)),
                ('type_rplrib3', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib3', models.CharField(blank=True, max_length=2)),
                ('ralrib3', models.IntegerField(blank=True, null=True)),
                ('com_ralrib3', models.FloatField(blank=True, null=True)),
                ('type_ralrib3', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib3', models.CharField(blank=True, max_length=2)),
                ('rarib3', models.IntegerField(blank=True, null=True)),
                ('com_rarib3', models.FloatField(blank=True, null=True)),
                ('type_rarib3', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib3', models.CharField(blank=True, max_length=2)),
                ('rprib4', models.IntegerField(blank=True, null=True)),
                ('com_rprib4', models.FloatField(blank=True, null=True)),
                ('type_rprib4', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib4', models.CharField(blank=True, max_length=2)),
                ('rplrib4', models.IntegerField(blank=True, null=True)),
                ('com_rplrib4', models.FloatField(blank=True, null=True)),
                ('type_rplrib4', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib4', models.CharField(blank=True, max_length=2)),
                ('ralrib4', models.IntegerField(blank=True, null=True)),
                ('com_ralrib4', models.FloatField(blank=True, null=True)),
                ('type_ralrib4', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib4', models.CharField(blank=True, max_length=2)),
                ('rarib4', models.IntegerField(blank=True, null=True)),
                ('com_rarib4', models.FloatField(blank=True, null=True)),
                ('type_rarib4', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib4', models.CharField(blank=True, max_length=2)),
                ('rprib5', models.IntegerField(blank=True, null=True)),
                ('com_rprib5', models.FloatField(blank=True, null=True)),
                ('type_rprib5', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib5', models.CharField(blank=True, max_length=2)),
                ('rplrib5', models.IntegerField(blank=True, null=True)),
                ('com_rplrib5', models.FloatField(blank=True, null=True)),
                ('type_rplrib5', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib5', models.CharField(blank=True, max_length=2)),
                ('ralrib5', models.IntegerField(blank=True, null=True)),
                ('com_ralrib5', models.FloatField(blank=True, null=True)),
                ('type_ralrib5', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib5', models.CharField(blank=True, max_length=2)),
                ('rarib5', models.IntegerField(blank=True, null=True)),
                ('com_rarib5', models.FloatField(blank=True, null=True)),
                ('type_rarib5', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib5', models.CharField(blank=True, max_length=2)),
                ('rprib6', models.IntegerField(blank=True, null=True)),
                ('com_rprib6', models.FloatField(blank=True, null=True)),
                ('type_rprib6', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib6', models.CharField(blank=True, max_length=2)),
                ('rplrib6', models.IntegerField(blank=True, null=True)),
                ('com_rplrib6', models.FloatField(blank=True, null=True)),
                ('type_rplrib6', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib6', models.CharField(blank=True, max_length=2)),
                ('ralrib6', models.IntegerField(blank=True, null=True)),
                ('com_ralrib6', models.FloatField(blank=True, null=True)),
                ('type_ralrib6', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib6', models.CharField(blank=True, max_length=2)),
                ('rarib6', models.IntegerField(blank=True, null=True)),
                ('com_rarib6', models.FloatField(blank=True, null=True)),
                ('type_rarib6', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib6', models.CharField(blank=True, max_length=2)),
                ('rprib7', models.IntegerField(blank=True, null=True)),
                ('com_rprib7', models.FloatField(blank=True, null=True)),
                ('type_rprib7', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib7', models.CharField(blank=True, max_length=2)),
                ('rplrib7', models.IntegerField(blank=True, null=True)),
                ('com_rplrib7', models.FloatField(blank=True, null=True)),
                ('type_rplrib7', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib7', models.CharField(blank=True, max_length=2)),
                ('ralrib7', models.IntegerField(blank=True, null=True)),
                ('com_ralrib7', models.FloatField(blank=True, null=True)),
                ('type_ralrib7', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib7', models.CharField(blank=True, max_length=2)),
                ('rarib7', models.IntegerField(blank=True, null=True)),
                ('com_rarib7', models.FloatField(blank=True, null=True)),
                ('type_rarib7', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib7', models.CharField(blank=True, max_length=2)),
                ('rprib8', models.IntegerField(blank=True, null=True)),
                ('com_rprib8', models.FloatField(blank=True, null=True)),
                ('type_rprib8', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib8', models.CharField(blank=True, max_length=2)),
                ('rplrib8', models.IntegerField(blank=True, null=True)),
                ('com_rplrib8', models.FloatField(blank=True, null=True)),
                ('type_rplrib8', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib8', models.CharField(blank=True, max_length=2)),
                ('ralrib8', models.IntegerField(blank=True, null=True)),
                ('com_ralrib8', models.FloatField(blank=True, null=True)),
                ('type_ralrib8', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib8', models.CharField(blank=True, max_length=2)),
                ('rarib8', models.IntegerField(blank=True, null=True)),
                ('com_rarib8', models.FloatField(blank=True, null=True)),
                ('type_rarib8', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib8', models.CharField(blank=True, max_length=2)),
                ('rprib9', models.IntegerField(blank=True, null=True)),
                ('com_rprib9', models.FloatField(blank=True, null=True)),
                ('type_rprib9', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib9', models.CharField(blank=True, max_length=2)),
                ('rplrib9', models.IntegerField(blank=True, null=True)),
                ('com_rplrib9', models.FloatField(blank=True, null=True)),
                ('type_rplrib9', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib9', models.CharField(blank=True, max_length=2)),
                ('ralrib9', models.IntegerField(blank=True, null=True)),
                ('com_ralrib9', models.FloatField(blank=True, null=True)),
                ('type_ralrib9', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib9', models.CharField(blank=True, max_length=2)),
                ('rarib9', models.IntegerField(blank=True, null=True)),
                ('com_rarib9', models.FloatField(blank=True, null=True)),
                ('type_rarib9', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib9', models.CharField(blank=True, max_length=2)),
                ('rprib10', models.IntegerField(blank=True, null=True)),
                ('com_rprib10', models.FloatField(blank=True, null=True)),
                ('type_rprib10', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib10', models.CharField(blank=True, max_length=2)),
                ('rplrib10', models.IntegerField(blank=True, null=True)),
                ('com_rplrib10', models.FloatField(blank=True, null=True)),
                ('type_rplrib10', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib10', models.CharField(blank=True, max_length=2)),
                ('ralrib10', models.IntegerField(blank=True, null=True)),
                ('com_ralrib10', models.FloatField(blank=True, null=True)),
                ('type_ralrib10', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib10', models.CharField(blank=True, max_length=2)),
                ('rarib10', models.IntegerField(blank=True, null=True)),
                ('com_rarib10', models.FloatField(blank=True, null=True)),
                ('type_rarib10', models.CharField(blank=True, max_length=20)),
                ('cpr_rarib10', models.CharField(blank=True, max_length=2)),
                ('rprib11', models.IntegerField(blank=True, null=True)),
                ('com_rprib11', models.FloatField(blank=True, null=True)),
                ('type_rprib11', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib11', models.CharField(blank=True, max_length=2)),
                ('rplrib11', models.IntegerField(blank=True, null=True)),
                ('com_rplrib11', models.FloatField(blank=True, null=True)),
                ('type_rplrib11', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib11', models.CharField(blank=True, max_length=2)),
                ('ralrib11', models.IntegerField(blank=True, null=True)),
                ('com_ralrib11', models.FloatField(blank=True, null=True)),
                ('type_ralrib11', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib11', models.CharField(blank=True, max_length=2)),
                ('rprib12', models.IntegerField(blank=True, null=True)),
                ('com_rprib12', models.FloatField(blank=True, null=True)),
                ('type_rprib12', models.CharField(blank=True, max_length=20)),
                ('cpr_rprib12', models.CharField(blank=True, max_length=2)),
                ('rplrib12', models.IntegerField(blank=True, null=True)),
                ('com_rplrib12', models.FloatField(blank=True, null=True)),
                ('type_rplrib12', models.CharField(blank=True, max_length=20)),
                ('cpr_rplrib12', models.CharField(blank=True, max_length=2)),
                ('ralrib12', models.IntegerField(blank=True, null=True)),
                ('com_ralrib12', models.FloatField(blank=True, null=True)),
                ('type_ralrib12', models.CharField(blank=True, max_length=20)),
                ('cpr_ralrib12', models.CharField(blank=True, max_length=2)),
                ('dataset', models.CharField(max_length=20)),
            ],
            options={
                'unique_together': {('case_id', 'dataset')},
            },
        ),
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('set_name', models.CharField(default='', max_length=240, verbose_name='Dataset Name')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
