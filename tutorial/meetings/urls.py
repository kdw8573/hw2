from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from meetings import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('meetings/', views.MeetingList.as_view()),
    path('meetings/<int:pk>/', views.MeetingDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('login/', include('rest_framework.urls')),
#    url(r'^meetings/?$', views.MeetingList.as_view()),
#    url(r'^meetings/(?P<pk>[0-9]+)/?$', views.MeetingDetail.as_view()),
#    url(r'^users/?$', views.UserList.as_view()),
#    url(r'^users/(?P<pk>[0-9]+)/?$', views.UserDetail.as_view()),
#	url(r'^api-auth/',include('rest_framework.urls', namespace = 'rest_framework')),
#    url("^auth/login/$", LoginAPI.as_view()),
#    url("^auth/register/$", RegistrationAPI.as_view()),
#    url("^auth/user/$", UserAPI.as_view()),
]
