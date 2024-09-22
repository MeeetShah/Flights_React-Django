
// import React, { useState } from 'react';
// import '../Continue.css'; // Importing external CSS file

// const TravellerForm = () => {
//   const [numOfTravellers, setNumOfTravellers] = useState(1); // Number of travellers
//   const [travellers, setTravellers] = useState([]); // Array to store travellers' details
//   const [currentTravellerIndex, setCurrentTravellerIndex] = useState(0);
//   const [showContactForm, setShowContactForm] = useState(false);
//   const [contactDetails, setContactDetails] = useState({ mobile: '', email: '' });
//   const [showTravellerForm, setShowTravellerForm] = useState(false); // Toggle for the traveler form
  
//   // Initialize the travellers array based on the number of travellers
//   const handleNumOfTravellersSubmit = (e) => {
//     e.preventDefault();
//     const initialTravellers = Array.from({ length: numOfTravellers }, () => ({
//       title: '',
//       firstName: '',
//       middleName: '',
//       lastName: '',
//     }));
//     setTravellers(initialTravellers);
//     setShowTravellerForm(true);
//   };

//   // Handle change in traveller form for each traveller individually
//   const handleTravellerChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedTravellers = [...travellers];
//     updatedTravellers[index] = {
//       ...updatedTravellers[index],
//       [name]: value,
//     };
//     setTravellers(updatedTravellers);
//   };

//   // Handle submit for traveller form, show the next traveller or contact form
//   const handleTravellerSubmit = (e) => {
//     e.preventDefault();
//     if (currentTravellerIndex + 1 < numOfTravellers) {
//       setCurrentTravellerIndex(currentTravellerIndex + 1);
//     } else {
//       setShowContactForm(true);
//       setShowTravellerForm(false);
//     }
//   };

//   // Handle change in contact details
//   const handleContactChange = (e) => {
//     const { name, value } = e.target;
//     setContactDetails({ ...contactDetails, [name]: value });
//   };

//   // Handle final form submit
//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     alert('Form submitted successfully!');
//     console.log(travellers, contactDetails); // You can handle the data here
//   };

//   return (
//     <div className="container">
//       {/* Step 1: Select number of travellers */}
//       {!showTravellerForm && !showContactForm && (
//         <form onSubmit={handleNumOfTravellersSubmit} className="form">
//           <fieldset className="fieldset">
//             <legend>How many travellers?</legend>
//             <label htmlFor="numOfTravellers">Number of Travellers:</label>
//             <input
//               type="number"
//               id="numOfTravellers"
//               name="numOfTravellers"
//               value={numOfTravellers}
//               onChange={(e) => setNumOfTravellers(Number(e.target.value))}
//               required
//               min="1"
//               className="input"
//             />
//             <button type="submit" className="button">Next</button>
//           </fieldset>
//         </form>
//       )}

//       {/* Step 2: Traveller details form */}
//       {showTravellerForm && !showContactForm && (
//         <form onSubmit={handleTravellerSubmit} className="form">
//           <fieldset className="fieldset">
//             <legend>Traveller {currentTravellerIndex + 1} Details</legend>

//             <label htmlFor={`title-${currentTravellerIndex}`}>Title:</label>
//             <select
//               id={`title-${currentTravellerIndex}`}
//               name="title"
//               value={travellers[currentTravellerIndex]?.title || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               required
//               className="input"
//             >
//               <option value="">Select</option>
//               <option value="mr">Mr</option>
//               <option value="ms">Ms</option>
//               <option value="mrs">Mrs</option>
//             </select>

//             <label htmlFor={`firstName-${currentTravellerIndex}`}>First Name:</label>
//             <input
//               type="text"
//               id={`firstName-${currentTravellerIndex}`}
//               name="firstName"
//               value={travellers[currentTravellerIndex]?.firstName || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               required
//               className="input"
//             />

//             <label htmlFor={`middleName-${currentTravellerIndex}`}>Middle Name:</label>
//             <input
//               type="text"
//               id={`middleName-${currentTravellerIndex}`}
//               name="middleName"
//               value={travellers[currentTravellerIndex]?.middleName || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               className="input"
//             />

//             <label htmlFor={`lastName-${currentTravellerIndex}`}>Last Name:</label>
//             <input
//               type="text"
//               id={`lastName-${currentTravellerIndex}`}
//               name="lastName"
//               value={travellers[currentTravellerIndex]?.lastName || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               required
//               className="input"
//             />

//             <button type="submit" className="button">
//               {currentTravellerIndex + 1 === numOfTravellers ? 'Next' : 'Next Traveller'}
//             </button>
//           </fieldset>
//         </form>
//       )}

//       {/* Step 3: Contact details form */}
//       {showContactForm && (
//         <form onSubmit={handleContactSubmit} className="form">
//           <fieldset className="fieldset">
//             <legend>Contact Details</legend>

//             <label htmlFor="mobile">Mobile Number:</label>
//             <input
//               type="text"
//               id="mobile"
//               name="mobile"
//               value={contactDetails.mobile}
//               onChange={handleContactChange}
//               required
//               pattern="[0-9]{10}"
//               maxLength="10"
//               className="input"
//             />

//             <label htmlFor="email">Email ID:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={contactDetails.email}
//               onChange={handleContactChange}
//               required
//               className="input"
//             />

//             <button type="submit" className="button">Submit</button>
//           </fieldset>
//         </form>
//       )}
//     </div>
//   );
// };

// export default TravellerForm;



// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios for HTTP requests
// import '../Continue.css'; // Importing external CSS file

// const TravellerForm = () => {
//   const [numOfTravellers, setNumOfTravellers] = useState(1); // Number of travellers
//   const [travellers, setTravellers] = useState([]); // Array to store travellers' details
//   const [currentTravellerIndex, setCurrentTravellerIndex] = useState(0);
//   const [showContactForm, setShowContactForm] = useState(false);
//   const [contactDetails, setContactDetails] = useState({ mobile: '', email: '' });
//   const [showTravellerForm, setShowTravellerForm] = useState(false); // Toggle for the traveller form

//   // Initialize the travellers array based on the number of travellers
//   const handleNumOfTravellersSubmit = (e) => {
//     e.preventDefault();
//     const initialTravellers = Array.from({ length: numOfTravellers }, () => ({
//       title: '',
//       firstName: '',
//       middleName: '',
//       lastName: '',
//     }));
//     setTravellers(initialTravellers);
//     setShowTravellerForm(true);
//   };

//   // Handle change in traveller form for each traveller individually
//   const handleTravellerChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedTravellers = [...travellers];
//     updatedTravellers[index] = {
//       ...updatedTravellers[index],
//       [name]: value,
//     };
//     setTravellers(updatedTravellers);
//   };

//   // Handle submit for traveller form, show the next traveller or contact form
//   const handleTravellerSubmit = (e) => {
//     e.preventDefault();
//     if (currentTravellerIndex + 1 < numOfTravellers) {
//       setCurrentTravellerIndex(currentTravellerIndex + 1);
//     } else {
//       setShowContactForm(true);
//       setShowTravellerForm(false);
//     }
//   };

//   // Handle change in contact details
//   const handleContactChange = (e) => {
//     const { name, value } = e.target;
//     setContactDetails({ ...contactDetails, [name]: value });
//   };

//   // Handle final form submit with axios request to backend
//   const handleContactSubmit = (e) => {
//     e.preventDefault();

//     // Prepare the payload
//     const payload = travellers.map((traveller) => ({
//       first_name: traveller.firstName,
//       last_name: traveller.lastName,
//       date_of_birth: "1990-01-01",
//       passport_number: "A12345678",
//       nationality: "American"
 
//     }));

//     // Send POST request to the backend
//     axios.post('http://127.0.0.1:8000/api/add-passenger/', payload)
//     .then(response => {
//       alert('Passengers added successfully!');
//       console.log(response.data);
//     })
//     .catch(error => {
//       if (error.response) {
//         console.error('Server responded with:', error.response.data);
//         alert(`Error: ${error.response.data.detail || 'Something went wrong!'}`);
//       } else {
//         console.error('Error:', error.message);
//         alert('An unknown error occurred!');
//       }
//     });
  
//   };

//   return (
//     <div className="container">
//       {/* Step 1: Select number of travellers */}
//       {!showTravellerForm && !showContactForm && (
//         <form onSubmit={handleNumOfTravellersSubmit} className="form">
//           <fieldset className="fieldset">
//             <legend>How many travellers?</legend>
//             <label htmlFor="numOfTravellers">Number of Travellers:</label>
//             <input
//               type="number"
//               id="numOfTravellers"
//               name="numOfTravellers"
//               value={numOfTravellers}
//               onChange={(e) => setNumOfTravellers(Number(e.target.value))}
//               required
//               min="1"
//               className="input"
//             />
//             <button type="submit" className="button">Next</button>
//           </fieldset>
//         </form>
//       )}

//       {/* Step 2: Traveller details form */}
//       {showTravellerForm && !showContactForm && (
//         <form onSubmit={handleTravellerSubmit} className="form">
//           <fieldset className="fieldset">
//             <legend>Traveller {currentTravellerIndex + 1} Details</legend>

//             <label htmlFor={`title-${currentTravellerIndex}`}>Title:</label>
//             <select
//               id={`title-${currentTravellerIndex}`}
//               name="title"
//               value={travellers[currentTravellerIndex]?.title || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               required
//               className="input"
//             >
//               <option value="">Select</option>
//               <option value="mr">Mr</option>
//               <option value="ms">Ms</option>
//               <option value="mrs">Mrs</option>
//             </select>

//             <label htmlFor={`firstName-${currentTravellerIndex}`}>First Name:</label>
//             <input
//               type="text"
//               id={`firstName-${currentTravellerIndex}`}
//               name="firstName"
//               value={travellers[currentTravellerIndex]?.firstName || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               required
//               className="input"
//             />

//             <label htmlFor={`middleName-${currentTravellerIndex}`}>Middle Name:</label>
//             <input
//               type="text"
//               id={`middleName-${currentTravellerIndex}`}
//               name="middleName"
//               value={travellers[currentTravellerIndex]?.middleName || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               className="input"
//             />

//             <label htmlFor={`lastName-${currentTravellerIndex}`}>Last Name:</label>
//             <input
//               type="text"
//               id={`lastName-${currentTravellerIndex}`}
//               name="lastName"
//               value={travellers[currentTravellerIndex]?.lastName || ''}
//               onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
//               required
//               className="input"
//             />

//             <button type="submit" className="button">
//               {currentTravellerIndex + 1 === numOfTravellers ? 'Next' : 'Next Traveller'}
//             </button>
//           </fieldset>
//         </form>
//       )}

//       {/* Step 3: Contact details form */}
//       {showContactForm && (
//         <form onSubmit={handleContactSubmit} className="form">
//           <fieldset className="fieldset">
//             <legend>Contact Details</legend>

//             <label htmlFor="mobile">Mobile Number:</label>
//             <input
//               type="text"
//               id="mobile"
//               name="mobile"
//               value={contactDetails.mobile}
//               onChange={handleContactChange}
//               required
//               pattern="[0-9]{10}"
//               maxLength="10"
//               className="input"
//             />

//             <label htmlFor="email">Email ID:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={contactDetails.email}
//               onChange={handleContactChange}
//               required
//               className="input"
//             />

//             <button type="submit" className="button">Submit</button>
//           </fieldset>
//         </form>
//       )}
//     </div>
//   );
// };

// export default TravellerForm;




import React, { useState } from 'react';
import axios from 'axios';
import '../Continue.css';
import { useLocation, useNavigate } from 'react-router-dom';



const TravellerForm = () => {
  const [numOfTravellers, setNumOfTravellers] = useState(1);
  const [travellers, setTravellers] = useState([]);
  const [currentTravellerIndex, setCurrentTravellerIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactDetails, setContactDetails] = useState({ mobile: '', email: '' });
  const [showTravellerForm, setShowTravellerForm] = useState(false);
  const navigate =  useNavigate()
  const location = useLocation()

  const flight_number = location.state.flight_number
  console.log("continue...",flight_number);
  
  
  const handleNumOfTravellersSubmit = (e) => {
    e.preventDefault();
    const initialTravellers = Array.from({ length: numOfTravellers }, () => ({

      first_name: '',
      middle_name: '',
      last_name: '',
    }));
    setTravellers(initialTravellers);
    setShowTravellerForm(true);
  };

  const handleTravellerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTravellers = [...travellers];
    updatedTravellers[index] = { ...updatedTravellers[index], [name]: value };
    setTravellers(updatedTravellers);
  };

  const handleTravellerSubmit = (e) => {
    e.preventDefault();
    if (currentTravellerIndex + 1 < numOfTravellers) {
      setCurrentTravellerIndex(currentTravellerIndex + 1);
    } else {
      setShowContactForm(true);
      setShowTravellerForm(false);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };



  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send details for all passengers
      const passengerPromises = travellers.map((traveller) => {
        const passengerData = {
          first_name: traveller.firstName,
          last_name: traveller.lastName,
          middle_name: traveller.middleName,
          email: contactDetails.email,
          number: contactDetails.mobile,
        };
  
        // Return an axios request promise for each passenger
        return axios.post('http://127.0.0.1:8000/api/add-passenger/', passengerData);
      });
  
      // Execute all the requests simultaneously
      const responses = await Promise.all(passengerPromises);
      
      responses.forEach(response => {
        console.log('Passenger added:', response.data);
        navigate("/billing",{
          state:{
            flight_number : flight_number
          }
        })
      });
      
    } catch (error) {
      console.error('Error submitting passengers:', error.response ? error.response.data : error.message);
    }
  };
  
  

  return (
    <div className="containerr">
      {!showTravellerForm && !showContactForm && (
        <form onSubmit={handleNumOfTravellersSubmit} className="form">
          <fieldset className="fieldset">
            <legend>How many travellers?</legend>
            <label htmlFor="numOfTravellers">Number of Travellers:</label>
            <input
              type="number"
              id="numOfTravellers"
              name="numOfTravellers"
              value={numOfTravellers}
              onChange={(e) => setNumOfTravellers(Number(e.target.value))}
              required
              min="1"
              className="input"
            />
            <button type="submit" className="button">Next</button>
          </fieldset>
        </form>
      )}

      {showTravellerForm && !showContactForm && (
        <form onSubmit={handleTravellerSubmit} className="form">
          <fieldset className="fieldset">
            <legend>Traveller {currentTravellerIndex + 1} Details</legend>
            <label htmlFor={`firstName-${currentTravellerIndex}`}>First Name:</label>
            <input
              type="text"
              id={`firstName-${currentTravellerIndex}`}
              name="firstName"
              value={travellers[currentTravellerIndex]?.firstName || ''}
              onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
              required
              className="input"
            />
            <label htmlFor={`middleName-${currentTravellerIndex}`}>Middle Name:</label>
            <input
              type="text"
              id={`middleName-${currentTravellerIndex}`}
              name="middleName"
              value={travellers[currentTravellerIndex]?.middleName || ''}
              onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
              className="input"
            />
            <label htmlFor={`lastName-${currentTravellerIndex}`}>Last Name:</label>
            <input
              type="text"
              id={`lastName-${currentTravellerIndex}`}
              name="lastName"
              value={travellers[currentTravellerIndex]?.lastName || ''}
              onChange={(e) => handleTravellerChange(currentTravellerIndex, e)}
              required
              className="input"
            />
            <button type="submit" className="button">
              {currentTravellerIndex + 1 === numOfTravellers ? 'Next' : 'Next Traveller'}
            </button>
          </fieldset>
        </form>
      )}

      {showContactForm && (
        <form onSubmit={handleContactSubmit} className="form">
          <fieldset className="fieldset">
            <legend>Contact Details</legend>
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={contactDetails.mobile}
              onChange={handleContactChange}
              required
              className="input"
            />
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactDetails.email}
              onChange={handleContactChange}
              required
              className="input"
            />
            <button type="submit" className="button">Submit</button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default TravellerForm;


