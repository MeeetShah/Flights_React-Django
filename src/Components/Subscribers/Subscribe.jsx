import React from 'react'
import { useSelector } from 'react-redux';


const Subscribe=()=>{

    return(
        <div className="subscribe section">
            <div className="sectionContainer container">
                <h2>Subscribe Newsletters & get Latest News</h2>
            <div className="inputDiv flex">
                <input type="email" placeholder="Enter your email address" required/>
                <button className='btn'>Subscribe</button>
            </div>
            </div>
        </div>
    )
}

export default Subscribe