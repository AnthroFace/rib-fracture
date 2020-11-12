from django import forms
from .models import Patient

class PatientForm(forms.ModelForm):
    error_css_class = 'error'

    sex = forms.ChoiceField(choices = SEX, required=True)
    ancestry = forms.ChoiceField(choices = ANCESTRY, required=True)
    mod = forms.ChoiceField(choices = MOD, required=True)
    cod = forms.ChoiceField(choices = COD, required=True)
    xray = forms.ChoiceField(choices = DECISION, required=True)
    belted = forms.ChoiceField(choices = DECISION, required=True)
    obese = forms.ChoiceField(choices = DECISION, required=True)
    cardio = forms.ChoiceField(choices = DECISION, required=True)
    patho = forms.ChoiceField(choices = DECISION, required=True)
    tobacco = forms.ChoiceField(choices = DECISION, required=True)
    marijuana = forms.ChoiceField(choices = DECISION, required=True)
    alcohol = forms.ChoiceField(choices = DECISION, required=True)
    perscription = forms.ChoiceField(choices = DECISION, required=True)
    health_notes = forms.ChoiceField(choices = CATEGORIES, required=True)

    class Meta:
        model = Patient

        #widgets = {
            #''
        #}