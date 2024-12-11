from django.urls import path
from .views import IndicatorList

urlpatterns = [
    path('indicators/', IndicatorList.as_view(), name='indicators'),
]




