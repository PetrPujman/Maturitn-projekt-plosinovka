from .models import FinalScore


def top_scores(request):
    return {"top_score": FinalScore.objects.order_by("-score")[:10]}
