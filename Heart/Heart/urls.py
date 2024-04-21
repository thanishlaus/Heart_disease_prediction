from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # including urls.py file for routing
    path('api/', include('api.urls')),
]
