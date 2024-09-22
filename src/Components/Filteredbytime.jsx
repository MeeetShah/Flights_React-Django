import React from 'react';
import "../FlightCard.css"; // Add the CSS file for styling
import { useLocation, useNavigate } from 'react-router-dom';


const Filteredbytime = () => {
  const location = useLocation();
  const filterFlights = location.state?.filteredFlights || []; // Safe access with fallback to empty array
  const navigate = useNavigate()
  console.log("Filtered Flights:", filterFlights);

  const handleContinue=(flight_number)=>{
    navigate("/address",{
      state:{
        flight_number:flight_number
      }
    })
  }
  return (
    <div className="flight-container">
      {filterFlights.length > 0 ? (
        filterFlights.map((flight) => (
          <div className="flight-card" key={flight.id}>
            <div className="flight-header">
              <h3>
                {flight.departure_airport.city} &rarr; {flight.arrival_airport.city}
              </h3>
              <p>
                {new Date(flight.departure_time).toLocaleDateString()} • Non-stop •{" "}
                {flight.flight_duration} • Business
              </p>
            </div>
            <div>
              <h4>
                {flight.airline.name} | {flight.flight_number}
              </h4>
            </div>

            <div className="flight-details">
              <div className="flight-info">
                <div className="time-info">
                  <div>
                    <p>{new Date(flight.departure_time).toLocaleDateString()}</p>
                    <h3>{new Date(flight.departure_time).toLocaleTimeString()}</h3>
                    <p>{flight.departure_airport.name}</p>
                  </div>
                  <div className="flight-duration">
                    <p>{flight.flight_duration}</p>
                  </div>
                  <div>
                    <p>{new Date(flight.arrival_time).toLocaleDateString()}</p>
                    <h3>{new Date(flight.arrival_time).toLocaleTimeString()}</h3>
                    <p>{flight.arrival_airport.name}</p>
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
            <button onClick={()=>{handleContinue(flight.flight_number)}}> Continue</button>
          </div>
        ))
      ) : (
        <p>No flights available for the selected criteria.</p>
      )}
    </div>
  );
};

export default Filteredbytime;
