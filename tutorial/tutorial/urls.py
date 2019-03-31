from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('', include('meetings.urls')),
    path('admin/', admin.site.urls),
#    url(r'^admin/', admin.site.urls),
#    url(r'^', include('meetings.urls')),
]
