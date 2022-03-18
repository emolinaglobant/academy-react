from rest_framework import routers

from apps.services.views import CatServicesView,ServicesView

router = routers.DefaultRouter()
router.register('categories', CatServicesView)
router.register('services', ServicesView)
urlpatterns = router.urls