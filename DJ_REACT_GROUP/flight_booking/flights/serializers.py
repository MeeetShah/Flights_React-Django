from rest_framework import serializers
from .models import Airline, Airport, Flight, Passenger, Booking, Payment

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = '__all__'


class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = ['name','code','city','country']  # Include other fields if needed

class FlightSerializer(serializers.ModelSerializer):
    departure_airport = AirportSerializer()
    arrival_airport = AirportSerializer()
    airline = serializers.StringRelatedField()  # Or use a nested serializer for Airline if needed

    class Meta:
        model = Flight
        fields = [
            'flight_number',
            'airline',
            'departure_airport',
            'arrival_airport',
            'departure_time',
            'arrival_time',
            'flight_duration',
            'price_economy',
            'price_business',
            'price_first_class'
        ]


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = ['first_name', 'last_name', 'middle_name', 'email', 'number']


class BookingSerializer(serializers.ModelSerializer):
    passengers = PassengerSerializer(many=True)

    class Meta:
        model = Booking
        fields = '__all__'

    def create(self, validated_data):
        passengers_data = validated_data.pop('passengers')
        booking = Booking.objects.create(**validated_data)
        for passenger_data in passengers_data:
            passenger, created = Passenger.objects.get_or_create(**passenger_data)
            booking.passengers.add(passenger)
        return booking

# class PassengerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Passenger
#         fields = ['first_name', 'last_name', 'date_of_birth', 'passport_number', 'nationality']


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
