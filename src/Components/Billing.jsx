import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



const PassengerList = () => {
  const [passengers, setPassengers] = useState([]);
  const location = useLocation()
  const flights = useSelector((state) => state.flights.flights);
  const flight_number = location.state.flight_number
  console.log("billing..,.",flight_number);
  const styles = {
    container: {
      maxWidth: '500px',
      margin: '30px auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    body: {
      padding: '20px',
    },
    ticketInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
      marginBottom: '20px',
    },
    label: {
      fontWeight: 'bold',
      color: '#333',
    },
    value: {
      fontSize: '16px',
      color: '#555',
    },
    divider: {
      borderTop: '1px dashed #ddd',
      margin: '20px 0',
    },
    seatRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    seat: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#007bff',
    },
    amount: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'right',
    },
    footer: {
      textAlign: 'center',
      fontSize: '14px',
      padding: '10px 0',
      backgroundColor: '#f1f1f1',
      color: '#777',
    },
  };

  
  const flightdata = flights.find(
    (flight) => flight.flight_number === flight_number
  );
  console.log(flightdata);
 
  
  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/passengers/');
        setPassengers(response.data);
      } catch (error) {
        console.error('Error fetching passengers:', error);
      }
    };

    fetchPassengers();
  }, []);

  return (
    <div style={styles.container}>
    {/* Header */}
    <div style={styles.header}>
      Flight Ticket
    </div>

    {/* Body */}
    <div style={styles.body}>
      <div style={styles.ticketInfo}>
        <div>
          <span style={styles.label}>Flight:</span>
          <div style={styles.value}>{flightdata.flight_number}</div>
        </div>
        <div>
          <span style={styles.label}>Air Line:</span>
          <div style={styles.value}>{flightdata.airline}</div>
        </div>
        <div>
          <span style={styles.label}>Departure:</span>
          <div style={styles.value}>{flightdata.departure_airport.city}</div>
        </div>
        <div>
          <span style={styles.label}>Arrival:</span>
          <div style={styles.value}>{flightdata.arrival_airport.city}</div>
        </div>
        <div>
          <span style={styles.label}>Departure Time:</span>
          <div style={styles.value}>{flightdata.departure_time}</div>
        </div>
        <div>
          <span style={styles.label}>Arrival Time:</span>
          <div style={styles.value}>{flightdata.arrival_time}</div>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Seat and Amount */}
      {/* <div style={styles.seatRow}>
        <div style={styles.seat}>Seat: {ticketData.seatNumber}</div>
        <div style={styles.amount}>${ticketData.amount.toFixed(2)}</div>
      </div> */}
    </div>

    {/* Footer */}
    <div style={styles.footer}>
      Have a safe and pleasant flight!
    </div>
  </div>
  );
};

export default PassengerList;
