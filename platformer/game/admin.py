from django.contrib import admin

from .models import FinalScore


@admin.register(FinalScore)
class ContentAdmin(admin.ModelAdmin):
    pass
