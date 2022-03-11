from rest_framework import routers

from apps.employees.views import EmployeesView

router = routers.DefaultRouter()
router.register('employees', EmployeesView)
urlpatterns = router.urls