from django.db import models
from django.contrib.auth.models import User

# Define choices for flight class and booking status
FLIGHT_CLASS_CHOICES = [
    ('ECONOMY', 'Economy'),
    ('BUSINESS', 'Business'),
    ('FIRST', 'First Class'),
]

BOOKING_STATUS_CHOICES = [
    ('CONFIRMED', 'Confirmed'),
    ('CANCELLED', 'Cancelled'),
    ('PENDING', 'Pending'),
]

class Airline(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.code})"


class Airport(models.Model):
    code = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.code}), {self.city}, {self.country}"


class Flight(models.Model):
    flight_number = models.CharField(max_length=10, unique=True)
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE)
    departure_airport = models.ForeignKey(Airport, related_name='departures', on_delete=models.CASCADE)
    arrival_airport = models.ForeignKey(Airport, related_name='arrivals', on_delete=models.CASCADE)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    flight_duration = models.DurationField()
    price_economy = models.DecimalField(max_digits=10, decimal_places=2)
    price_business = models.DecimalField(max_digits=10, decimal_places=2)
    price_first_class = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Flight {self.flight_number} ({self.airline.name})"


class Passenger(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    email=models.EmailField(default="meet@gmail.com")
    number= models.CharField(max_length=10,default=1233)


    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    passengers = models.ManyToManyField(Passenger)
    booking_date = models.DateTimeField(auto_now_add=True)
    flight_class = models.CharField(max_length=10, choices=FLIGHT_CLASS_CHOICES)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=BOOKING_STATUS_CHOICES, default='PENDING')

    def __str__(self):
        return f"Booking {self.id} by {self.user.username}"


class Payment(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    payment_status = models.CharField(max_length=20, default='SUCCESS')

    def __str__(self):
        return f"Payment {self.id} for Booking {self.booking.id}"

