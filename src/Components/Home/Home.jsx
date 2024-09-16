import React from 'react'

// Imported Assests
import video from '../../assests/Video1.mp4';
import aeroplane from '../../assests/takeoff.png';
import Support from '../Support/Support';
import Lounge from '../Lounge/Lounge';
import Search from '../Search/Search';
import Info from '../Info/Info';
import Footer from '../Footer/Footer';
import Travellers from '../Travellers/Travellers';
import Subscribe from '../Subscribers/Subscribe';

const Home = () => {
  return (
    <>
    <div className='home flex container'>
        <div className="mainText">
            <h1>Create Ever-lasting memories with us</h1>

        </div>


    <div className="homeImages flex">

        <div className="videodiv">
            <video src = {video} autoPlay muted loop className = "video"></video>
        </div>
        <img src={aeroplane} className='plane'/>

    </div>
    </div>
    <Search/>
    <Support/>
    <Lounge/>
    <Info/>
    <Travellers/>
    <Subscribe/>  
    <Footer/> 
    </>
  )
}

export default Home

