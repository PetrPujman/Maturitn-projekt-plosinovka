from django.forms import ModelForm

from .models import FinalScore


class FinalScoreForm(ModelForm):
    class Meta:
        model = FinalScore
        exclude = ["user", "date"]
