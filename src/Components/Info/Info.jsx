import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx'

const Info = () => {
  return (
   <div className="info section">
    <div className="infocontainer container">
        <div className="titlediv flex">
            <h2>Travel to make memories all around the world</h2>
            <button className="btn">View All</button>
        </div>


        <div className="cardsDiv grid">
            <div className="singlecard grid">
                <div className="icondiv flex">
                    <RxCalendar className = 'icon'/>
                </div>
                <span className="cardtitle">Book & Relax</span>
                <p>You can also call the airlines from your phone and book a flight ticket!</p>
            </div>

            <div className="singlecard grid">
                <div className="icondiv flex colorOne">
                    <BsShieldCheck className = 'icon'/>
                </div>
                <span className="cardtitle">Smart checklist</span>
                <p>You can also call the airlines from your phone and book a flight ticket!</p>
            </div>

            <div className="singlecard grid">
                <div className="icondiv flex colorTwo">
                    <BsBookmarkCheck className = 'icon'/>
                </div>
                <span className="cardtitle">Save More </span>
                <p>You can also call the airlines from your phone and book a flight ticket!</p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Info
