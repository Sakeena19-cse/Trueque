from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, UserSkillViewSet

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'user-skills', UserSkillViewSet)

urlpatterns = router.urls