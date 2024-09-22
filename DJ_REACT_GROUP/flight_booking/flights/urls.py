from django.urls import path
from .views import (
    AirlineListAPIView, AirportListAPIView, FlightListAPIView, 
    FlightDetailAPIView, BookingCreateAPIView, BookingDetailAPIView,
    PaymentCreateAPIView,add_passenger
)
from . import views

urlpatterns = [
    path('airlines/', AirlineListAPIView.as_view(), name='airline-list'),
    path('airports/', AirportListAPIView.as_view(), name='airport-list'),
    path('flights/', FlightListAPIView.as_view(), name='flight-list'),
    path('flights/<int:id>/', FlightDetailAPIView.as_view(), name='flight-detail'),
    path('bookings/', BookingCreateAPIView.as_view(), name='booking-create'),
    path('bookings/<int:id>/', BookingDetailAPIView.as_view(), name='booking-detail'),
    path('payments/', PaymentCreateAPIView.as_view(), name='payment-create'),
    path('add-passenger/', views.add_passenger, name='add-passenger'),
    path('passengers/', views.get_passengers, name='get_passengers'),
]
