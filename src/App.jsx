import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Flightlist from './Flightlist'
import FlightCard from './Components/FlightCard'
import Login from './Components/Login'


const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/home' element={<Search/>}></Route>
         <Route path='/flightlist' element={<Flightlist/>}></Route>
         <Route path='/flightcard' element={<FlightCard/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App