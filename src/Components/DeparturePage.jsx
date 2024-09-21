import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaCloudSun, FaClock } from 'react-icons/fa';
import { useSelector } from 'react-redux'; // to fetch flight data from Redux
import { useNavigate } from 'react-router-dom';

const DeparturePage = ({ departureCity, arrivalCity }) => {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState('');
  const flights = useSelector((state) => state.flights.flights); // Assuming flights are stored in Redux
  const navigate = useNavigate();

  // Function to filter flights based on city and time span
  const filterFlights = () => {
    return flights.filter((flight) => {
      const flightDepartureTime = new Date(flight.departure_time).getHours();

      // Filter by city match
      const cityMatch =
        flight.departure_airport.city === departureCity &&
        flight.arrival_airport.city === arrivalCity;

      // Filter by time span
      const timeMatch =
        (selectedTimeSpan === 'Early Morning' && flightDepartureTime < 6) ||
        (selectedTimeSpan === 'Morning' && flightDepartureTime >= 6 && flightDepartureTime < 12) ||
        (selectedTimeSpan === 'Mid Day' && flightDepartureTime >= 12 && flightDepartureTime < 18) ||
        (selectedTimeSpan === 'Night' && flightDepartureTime >= 18);

      return cityMatch && timeMatch;
    });
  };

  useEffect(() => {
    if (selectedTimeSpan) {
      const filtered = filterFlights();
      if (filtered.length > 0) {
        navigate("/filteredbytime", { state: { filteredFlights: filtered } });
      }
    }
  }, [selectedTimeSpan]); // Trigger effect on selectedTimeSpan change

  const handleTimeSelection = (timeSpan) => {
    setSelectedTimeSpan(timeSpan);
  };

  return (
    <div style={styles.container}>
      <h2>Filter Flights</h2>

      {/* Time Selection Buttons */}
      <div style={styles.buttonsContainer}>
        <button
          style={selectedTimeSpan === 'Early Morning' ? styles.activeButton : styles.button}
          onClick={() => handleTimeSelection('Early Morning')}
        >
          <FaCloudSun style={styles.icon} /> Early Morning (Before 6AM)
        </button>
        <button
          style={selectedTimeSpan === 'Morning' ? styles.activeButton : styles.button}
          onClick={() => handleTimeSelection('Morning')}
        >
          <FaSun style={styles.icon} /> Morning (6AM - 12PM)
        </button>
        <button
          style={selectedTimeSpan === 'Mid Day' ? styles.activeButton : styles.button}
          onClick={() => handleTimeSelection('Mid Day')}
        >
          <FaClock style={styles.icon} /> Mid Day (12PM - 6PM)
        </button>
        <button
          style={selectedTimeSpan === 'Night' ? styles.activeButton : styles.button}
          onClick={() => handleTimeSelection('Night')}
        >
          <FaMoon style={styles.icon} /> Night (After 6PM)
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0',
  },
  button: {
    padding: '10px 15px',
    margin: '10px 0',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  activeButton: {
    padding: '10px 15px',
    margin: '10px 0',
    backgroundColor: '#007BFF',
    color: 'white',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
};

export default DeparturePage;
