import React, { useEffect, useState } from 'react'

// Imported icons..
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'
import axios from 'axios'
import { addFlight } from '../../flightsslice'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'




const Search = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [departureAirport,setDepartureAirport] = useState('')
    const [arrivalAirport,setArrivalAirport] = useState('')
    console.log(departureAirport,arrivalAirport);
    



  useEffect(() => {
    // Fetch products from the Django backend
    axios
      .get('http://127.0.0.1:8000/api/flights/')
      .then((response) => {
        console.log("presenting...");
        console.log(response.data);
        dispatch(addFlight(response.data))
        
         //storing all data to the store
      })
      .catch((error) => {
        console.log("error");
        // Handle error if the request fails
      });
  }, []);

  const handleClick = () =>{
    navigate("/flightlist", {
        state: {
          departureAirport: departureAirport,
          arrivalAirport: arrivalAirport,
        },
      });
  }
  const allFlights = useSelector((state) => state.flights);
  console.log("in store all flights = ",allFlights);
    return (
        <>
        <div>
            <div className='search container section'>
                <div className='sectioncontainer grid'>
                    {/* <div className="btns flex">
                        <div className="Singlebtn">
                            <span>Economy</span>
                        </div>
                        <div className="Singlebtn">
                            <span>Business class</span>
                        </div>
                        <div className="Singlebtn">
                            <span>First Class</span>
                        </div>
                    </div> */}

                        <form action="">
                    <div className="searchInputs flex">
                        {/* Single input */}

                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className='icon' />
                            </div>

                            <div className="texts">
                                <h4> Origin</h4>
                                <input type="text" required name = "departureAirport" onChange={(e)=>{setDepartureAirport(e.target.value)}} value={departureAirport} placeholder='From where you want to go?' />
                            </div>
                        </div>


                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className='icon' />
                            </div>

                            <div className="texts">
                                <h4>Destination</h4>
                                <input type="text" required name = "arrivalAirport" value = {arrivalAirport} onChange={(e)=>{setArrivalAirport(e.target.value)}} placeholder='Where do you want to go?' />
                            </div>
                        </div>

                        {/* <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className='icon' />
                            </div>

                            <div className="texts">
                                <h4>Check in</h4>
                                <input type="text" placeholder='Add date' />

                            </div>
                        </div> */}



                        {/* <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className='icon' />
                            </div>

                            <div className="texts">
                                <h4>Check Out</h4>
                                <input type="text" placeholder='Add date' />

                            </div>
                        </div> */}

                        <button type="submit"className='btn btnBlock flex' onClick={handleClick}>Search Flight</button>
                       
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Search
