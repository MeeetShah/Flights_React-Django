import React from 'react'

// Import Image...
import gridImage from '../../assests/grid.png'

const Support = () => {
    return (

        <div className='support container section'>
            <div className="sectioncontainer">
                <div className="titlesdiv">
                    <small>Travel Support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans ,see what to expect along the journey! </p>

                </div>
                <div className="infoDiv grid">
                    <div className="textDiv grid">

                        <div className="singleinfo">
                            <span className="number">01</span>
                            <h4>Travel requirements for Dubai</h4>
                            <p>Find help with booking and travel plans see what to expext along the journey to ypur favorite destination!</p>


                        </div>

                        <div className="singleinfo">
                            <span className="number colorOne">02</span>
                            <h4> Chauffeur services at your arrival</h4>
                            <p>Find help with booking and travel plans see what to expext along the journey to ypur favorite destination</p>


                        </div>

                        <div className="singleinfo">
                            <span className="number colorTwo">03</span>
                            <h4>Multi risk travel insurance</h4>
                            <p>Find help with booking and travel plans see what to expext along the journey to ypur favorite destination</p>


                        </div>
                    </div>

                    <div className="imgDiv">
                        <img src={gridImage}  alt="Plane ki phuto" />
                    </div>

                </div>


            </div>

        </div>

    )
}

export default Support
