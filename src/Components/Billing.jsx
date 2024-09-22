// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PassengerList = () => {
//   const [passengers, setPassengers] = useState([]);

//   useEffect(() => {
//     const fetchPassengers = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/passengers/');
//         setPassengers(response.data);
//       } catch (error) {
//         console.error('Error fetching passengers:', error);
//       }
//     };

//     fetchPassengers();
//   }, []);

//   return (
//     <div>
//       <h1>Passenger List</h1>
//       <ul>
//         {passengers.map((passenger, index) => (
//           <li key={index}>
//             {passenger.first_name} {passenger.middle_name} {passenger.last_name} - {passenger.email} - {passenger.number}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PassengerList;
