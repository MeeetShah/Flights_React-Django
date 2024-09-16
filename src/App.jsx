import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import Support from './Components/Support/Support'
import Subscribe from './Components/Subscribers/Subscribe'
import Travellers from './Components/Travellers/Travellers'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Components/Signup'
import Flightlist from './Flightlist'
import FlightCardSimple from './Components/FlightCardSimple'



const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/signup' element={<FlightCardSimple/>}></Route>
         <Route path='/home' element={<Search/>}></Route>
         <Route path='/flightlist' element={<Flightlist/>}></Route>
        </Routes>
      </Router>


      {/* <Search/> */}
      
    </div>
  )
}

export default App