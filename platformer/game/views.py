from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse
from .forms import FinalScoreForm
from .models import FinalScore


def index(request):
	if request.method == "POST" and request.user.is_authenticated:
		form = FinalScoreForm(request.POST)
		if form.is_valid():
			instance = form.save(commit=False)
			instance.user = request.user
			instance.save()
			return HttpResponse()
	user_score = None
	if request.user.is_authenticated:
		user_score = FinalScore.objects.filter(user_id=request.user.id).order_by("-score")[:10]
	return render(request, "index.html", {"user_score": user_score})


def registration(request):
	if request.method == "POST":
		form = UserCreationForm(request.POST)

		if form.is_valid():
			form.save()
			return redirect("login")
	else:
		form = UserCreationForm()
	return render(request, "registration/registration.html", {"form": form})


