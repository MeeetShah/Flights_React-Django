import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import './FlightCardSimple.css'

const Flightlist = () => {
  // Access the flights from the Redux store
  const flights = useSelector((state) => state.flights.flights);
  console.log("flights for the comp", flights);
  const navigate = useNavigate();
  const location = useLocation();

  // Fallback to an empty string if undefined, then convert to lowercase
  const departureAirport = location.state?.departureAirport?.toLowerCase() || ''; 
  const arrivalAirport = location.state?.arrivalAirport?.toLowerCase() || '';

  console.log("hello", departureAirport);
  console.log("hello", arrivalAirport);

  // Filter flights based on lowercase airport names
  const filteredFlights = flights.filter(flight => 
    (!departureAirport || flight.departure_airport.city.toLowerCase() === departureAirport) &&
    (!arrivalAirport || flight.arrival_airport.city.toLowerCase() === arrivalAirport)
  );
  console.log("filtered =", filteredFlights);

  const handleClick = (flight_number) => {
    navigate('/flightcard', {
      state: {
        flight_number: flight_number
      }
    });
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Available Flights</h2>
        {filteredFlights.length === 0 ? (
          <p>No flights available.</p>
        ) : (
          filteredFlights.map((flight) => (
            <div key={flight.id} className="flight-card-simple">
              <div className="flight-header-simple">
                <div className="airline-info">
              
                  <div className="flight-number">
                    <h3>{flight.airline}</h3>
                  </div>
                </div>

                <div className="flight-times">
                  <div className="departure-info">
                    <h3>{new Date(flight.departure_time).toLocaleTimeString()}</h3>
                    <p>{flight.departure_airport.city}</p>
                  </div>

                  <div className="flight-duration">
                    <p>{flight.flight_duration}</p>
                    <p>-----------</p>
                    <p>Non-stop</p>
                  </div>

                  <div className="arrival-info">
                    <h3>{new Date(flight.arrival_time).toLocaleTimeString()}</h3>
                    <p>{flight.arrival_airport.city}</p>
                  </div>
                </div>

                <div className="price-info">
                  <h3>₹{flight.price_economy}</h3>
                  <p>Extra ₹330 Off</p>
                  <button className="book-button" onClick={() => handleClick(flight.flight_number)}>Book</button>
                </div>
              </div>

             
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Flightlist;
