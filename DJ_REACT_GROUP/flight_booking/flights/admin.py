from django.contrib import admin
from .models import Airline, Airport, Flight, Passenger, Booking, Payment

# Admin configuration for Airline
@admin.register(Airline)
class AirlineAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'country')
    search_fields = ('name', 'code', 'country')
    list_filter = ('country',)
    ordering = ('name',)

# Admin configuration for Airport
@admin.register(Airport)
class AirportAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'city', 'country')
    search_fields = ('name', 'code', 'city', 'country')
    list_filter = ('city', 'country')
    ordering = ('code',)

# Admin configuration for Flight
@admin.register(Flight)
class FlightAdmin(admin.ModelAdmin):
    list_display = ('flight_number', 'airline', 'departure_airport', 'arrival_airport', 'departure_time', 'arrival_time', 'flight_duration')
    search_fields = ('flight_number', 'airline__name', 'departure_airport__name', 'arrival_airport__name')
    list_filter = ('airline', 'departure_airport', 'arrival_airport', 'departure_time')
    ordering = ('departure_time',)
    date_hierarchy = 'departure_time'

# Inline Passenger for Booking
class PassengerInline(admin.TabularInline):
    model = Booking.passengers.through  # Handles the many-to-many relationship
    extra = 1  # Number of blank forms for additional passengers

# Admin configuration for Booking
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'flight', 'flight_class', 'total_price', 'status', 'booking_date')
    search_fields = ('user__username', 'flight__flight_number', 'flight__airline__name')
    list_filter = ('flight_class', 'status', 'booking_date')
    ordering = ('-booking_date',)
    date_hierarchy = 'booking_date'
    inlines = [PassengerInline]  # Inline Passenger management in Booking

# Admin configuration for Passenger
@admin.register(Passenger)
class PassengerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    search_fields = ('first_name', 'last_name')
    ordering = ('last_name', 'first_name')

# Admin configuration for Payment
@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('booking', 'amount', 'payment_method', 'payment_status', 'payment_date')
    search_fields = ('booking__user__username', 'booking__flight__flight_number', 'payment_method')
    list_filter = ('payment_method', 'payment_status', 'payment_date')
    ordering = ('-payment_date',)
    date_hierarchy = 'payment_date'
