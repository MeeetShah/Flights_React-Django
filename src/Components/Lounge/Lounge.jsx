import React from 'react'

import grid2 from '../../assests/grid_2.png'

const Lounge = () => {
  return (
   <div className="lounge container section">
    <div className="sectioncontainer grid">
        <div className="imgDiv">
            <img src={grid2} />
        </div>

        <div className="textDiv">
            <h2>Unaccompanied Minor Lounge</h2>

            <div className="grids grid">
              <div className="singleGrid">
                  <span className="gridTitle">
                      Help Through The Airport
                  </span>

                  <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination!</p>
              </div>

              <div className="singleGrid">
                  <span className="gridTitle">
                    Care On The Flight
                  </span>

                  <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination!</p>

              </div>

              <div className="singleGrid">
                  <span className="gridTitle">
                      Drive Service
                  </span>

                  <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination!</p>

              </div>
              <div className="singleGrid">
                  <span className="gridTitle">
                    Priority Boarding
                  </span>

                  <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination!</p>
              </div>
          </div>


        </div>
    </div>
   </div>
  )
}

export default Lounge
