import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Flightlist = () => {
  // Access the flights from the Redux store
  const flights = useSelector((state) => state.flights.flights);
  console.log("flights for the comp",flights);
  const location = useLocation()
  console.log("hello",location.state);
  console.log("hello",location.state.arrivalAirport);
  console.log("hello",location.state.departureAirport);
  
  
  const filteredFlights = flights.filter(flight => 
    (!location.state.departureAirport.toLowerCase() || flight.departure_airport.city.toLowerCase()  === location.state.departureAirport.toLowerCase() ) &&
    (!location.state.arrivalAirport.toLowerCase()  || flight.arrival_airport.city.toLowerCase()  === location.state.arrivalAirport.toLowerCase() )
  );
  console.log("filtered =",filteredFlights);
  

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
            <img
              src={flight.airline.logo || "Logo.png"} // Assuming flight.airline.logo contains the logo URL
              alt="not found"
              className="airline-logo"
            />
            <div className="flight-number"> 
              <h3>{flight.airline}</h3>          
            </div>
          </div>

          <div className="flight-times">
            <div className="departure-info">
              <h3>{new Date(flight.departure_time).toLocaleTimeString()}</h3>
              <p>{flight.departure_airport.city}</p> {/* Display departure airport name */}
            </div>

            <div className="flight-duration">
              <p>{flight.flight_duration}</p>
              <p>-----------</p>
              <p>Non-stop</p>
            </div>

            <div className="arrival-info">
              <h3>{new Date(flight.arrival_time).toLocaleTimeString()}</h3>
              <p>{flight.arrival_airport.city}</p> {/* Display arrival airport name */}
            </div>
          </div>

          <div className="price-info">
            <h3>₹{flight.price_economy}</h3>
            <p>Extra ₹330 Off</p>
            <button className="book-button">Book</button>
          </div>
        </div>

        <div className="flight-details-link">
          <a href="#">Flight Details </a>
        </div>
      </div>
    ))
  )}
</div>

    </>
  );
};

export default Flightlist;
