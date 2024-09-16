import React from 'react'

// Imported Destination Images =====>
import paris from '../../assests/paris.jpg'
import london from '../../assests/London.jpg'
import NewYork from '../../assests/NewYork.jpg'
import dubai from '../../assests/Dubai.jpg'

//Imported Traveler Images ======>
import traveler1 from '../../assests/user/traveller1.jpg'
import traveler2 from '../../assests/user/taveller2.jpg'
import traveler3 from '../../assests/user/traveller1.jpg'
import traveler4 from '../../assests/user/traveller1.jpg'

// We are going to use high order array method called Map to display all the data ====>

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'IsraTech',
        sociallink: '@isratech8'
    },
    {
        id: 2,
        destinationImage: NewYork,
        travelerImage: traveler2,
        travelerName: 'Wilson Lindsey',
        sociallink: '@wilsonlindsey'  
    },
    {
        id: 3,
        destinationImage:london,
        travelerImage: traveler3,
        travelerName: 'Nicole Web',
        sociallink: '@nicoleweb'
    },
    {
        id: 4,
        destinationImage: dubai,
        travelerImage: traveler4,
        travelerName: 'Naresh Lamer',
        sociallink: '@nareshlamer'  
    }
]
const Travelers = () => {
    return (  
    <div className='travelers container section'>  
        <div className="sectionContainer">   
            <h2>   
                Top travelers of this month!   
            </h2>
    
            <div className="travelersContainer grid">
    
                {
                    travelers.map(({id, destinationImage, travelerImage, travelerName,
                    sociallink })=>{   
                        return(   
                            // {/* Single passanger card */}
                            <div key={id} className="singleTraveler">    
                                <img src={destinationImage} className='destinationImage' />   
    
                                <div className="travelerDetails">   
                                    <div className="travelerPicture">   
                                        <img src={travelerImage} className="travelerImage" />  
                                    </div>  
                                    <div className="travelerName">   
                                        <span>{travelerName}</span>   
                                        <p>{sociallink}</p>   
                                    </div> 
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>

    </div>
    )
}
export default Travelers