from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import Airline, Airport, Flight, Passenger, Booking, Payment
from .serializers import (
        AirlineSerializer, AirportSerializer, FlightSerializer, 
        PassengerSerializer, BookingSerializer, PaymentSerializer
    )

    # List all Airlines     :lists all airlines and allows creating new airlines via POST requests
class AirlineListAPIView(generics.ListCreateAPIView):
    queryset = Airline.objects.all()
    serializer_class = AirlineSerializer

    # List and search Airports    :lists airports and allows creating new ones.
class AirportListAPIView(generics.ListCreateAPIView):
    queryset = Airport.objects.all()
    serializer_class = AirportSerializer


    # List Flights and search/filter by criteria       :lists all flights can also filter
class FlightListAPIView(generics.ListCreateAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer

    def get_queryset(self):
            queryset = Flight.objects.all()
            departure_airport = self.request.query_params.get('departure_airport')
            arrival_airport = self.request.query_params.get('arrival_airport')
            departure_date = self.request.query_params.get('departure_date')

            if departure_airport:
                queryset = queryset.filter(departure_airport__code=departure_airport)
            if arrival_airport:
                queryset = queryset.filter(arrival_airport__code=arrival_airport)
            if departure_date:
                queryset = queryset.filter(departure_time__date=departure_date)
            
            return queryset


    # Get Flight Details      :Retrieves detailed information about a specific flight
class FlightDetailAPIView(generics.RetrieveAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    lookup_field = 'id'


    # Create a Booking         :authenticated users to create a booking, also create new user
class BookingCreateAPIView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
            serializer.save(user=self.request.user)


    # Get a Booking's Details    :booking details for a specific booking, authenticate
class BookingDetailAPIView(generics.RetrieveAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]


    # Payment Process
class PaymentCreateAPIView(generics.CreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
            # Ensure payment is associated with a booking
            booking_id = self.request.data.get('booking_id')
            booking = Booking.objects.get(id=booking_id)
            serializer.save(booking=booking)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Passenger
from .serializers import PassengerSerializer

# @api_view(['POST'])
# def add_passenger(request):
#     if request.method == 'POST':
#         serializer = PassengerSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Passenger
import json

@csrf_exempt
def add_passenger(request):
    if request.method == 'POST':
        try:
            # Parse the incoming data
            data = json.loads(request.body)
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            middle_name = data.get('middle_name')
            email = data.get('email')
            number = data.get('number')
            
            # Create and save a new Passenger instance
            passenger = Passenger(
                first_name=first_name,
                last_name=last_name,
                middle_name=middle_name,
                email=email,
                number=number
            )
            passenger.save()

            return JsonResponse({'message': 'Passenger added successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Passenger
from .serializers import PassengerSerializer

@api_view(['GET'])
def get_passengers(request):
    passengers = Passenger.objects.all()
    serializer = PassengerSerializer(passengers, many=True)
    return Response(serializer.data)
