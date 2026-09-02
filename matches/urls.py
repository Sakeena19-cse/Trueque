from rest_framework.routers import DefaultRouter
from .views import MatchViewSet, SessionViewSet, ReviewViewSet

router = DefaultRouter()
router.register(r'matches', MatchViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'reviews', ReviewViewSet)

urlpatterns = router.urls