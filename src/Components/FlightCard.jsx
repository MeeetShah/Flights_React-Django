import React from "react";
import "../FlightCard.css"; // Add the CSS file for styling
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const FlightCard = () => {
  const location = useLocation();
  const flights = useSelector((state) => state.flights.flights);
  console.log("flight number", location.state.flight_number);

  // Find the flight matching the flight number from the location state
  const flightdata = flights.find(
    (flight) => flight.flight_number === location.state.flight_number
  );
  console.log("flightdata", flightdata);


  if (!flightdata) {
    return <p>Flight not found</p>;
  }

  return (
    <div className="flight-card">
      <div className="flight-header">
        <h3>
          {flightdata.departure_airport.city} &rarr; {flightdata.arrival_airport.city}
        </h3>
        <p>
          {new Date(flightdata.departure_time).toLocaleDateString()} • Non-stop •{" "}
          {flightdata.flight_duration} • Business
        </p>
      </div>
      <div>
        <h4>
          {flightdata.airline.name} | {flightdata.flight_number}
        </h4>
      </div>

      <div className="flight-details">
        <div className="flight-info">
          <div className="time-info">
            <div>
              <p>{new Date(flightdata.departure_time).toLocaleDateString()}</p>
              <h3>{new Date(flightdata.departure_time).toLocaleTimeString()}</h3>
              <p>{flightdata.departure_airport.name}</p>
              {/* Add terminal info if available */}
            </div>
            <div className="flight-duration">
              <p>{flightdata.flight_duration}</p>
            </div>
            <div>
              <p>{new Date(flightdata.arrival_time).toLocaleDateString()}</p>
              <h3>{new Date(flightdata.arrival_time).toLocaleTimeString()}</h3>
              <p>{flightdata.arrival_airport.name}</p>
              {/* Add terminal info if available */}
            </div>
          </div>
        </div>

        <div className="baggage-info">
          <div>
            <h4>Baggage</h4>
            <p>Per Traveller</p>
          </div>
          <div>
            <h4>Cabin</h4>
            <p>7 Kg (1 piece per pax)</p>
          </div>
          <div>
            <h4>Check-in</h4>
            <p>25 Kg (01 piece only)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
