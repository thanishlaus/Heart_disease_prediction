from django.urls import path
from . import views

urlpatterns = [
    # url path for predict view
    path('predict/', views.predict, name='predict'),
]
