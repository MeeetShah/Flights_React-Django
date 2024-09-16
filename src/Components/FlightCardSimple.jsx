import React from "react";
import "../FlightCardSimple.css"; // Add the CSS file for styling

const FlightCardSimple = () => {
  return (
    <div className="flight-card-simple">
      <div className="flight-header-simple">
        <div className="airline-info">
          <img
            src="Logo.png"
            alt="not found"
            className="airline-logo"
          />
          <div className="flight-number"> 
          <h3>Air-India Express</h3>          
            IX2784
            </div>
        </div>

        <div className="flight-times">
          <div className="departure-info">
            <h3>20:55</h3>
            <p>DEL</p>
          </div>
          <div className="flight-duration">
            <p>2h 30m</p>
            <p>-----------</p>
            <p>Non-stop</p>
          </div>
          <div className="arrival-info">
            <h3>23:25</h3>
            <p>BOM</p>
          </div>
        </div>

        <div className="price-info">
          <h3>₹15,020</h3>
          <p>Extra ₹330 Off</p>
          <button className="book-button">Book</button>
        </div>
      </div>

      <div className="flight-details-link">
        <a href="#">Flight Details </a>
      </div>
    </div>
  );
};

export default FlightCardSimple;