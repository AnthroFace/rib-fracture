# Generated by Django 3.1.3 on 2021-02-16 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='notes',
            field=models.TextField(blank=True, default=None, null=True, verbose_name='Notes'),
        ),
    ]
