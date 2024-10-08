
from django.contrib import admin
from django.urls import path,include
# from users import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('flights.urls')),  # Include flights app URLs
    path('api/accounts/', include('users.urls')),
]
