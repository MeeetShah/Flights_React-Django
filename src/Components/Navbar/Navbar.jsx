// import React, { useState } from 'react'

// // Imported Icons
// import { SiConsul } from 'react-icons/si'
// import { BsPhoneVibrate } from 'react-icons/bs'
// import { AiOutlineGlobal } from 'react-icons/ai'
// import { CgMenuGridO } from 'react-icons/cg'

// // Imported Images
// import logo from '../../assests/logo.png';

// const Navbar = () => {

//   // Lets remove the Navbar in the small width screen....

//   const [active, setActive] = useState('navBarMenu');

//   const showNavBar = () => {
//     setActive('navBarMenu showNavBar')
//   }

//   const removeNavBar = () => {
//     setActive('navBarMenu')
//   }

//   // Lets add background color to second navbar....

//   const [noBg, addBg] = useState('navBarTwo');

//   const addBgColor = () => {
//     if (window.scrollY >= 10) {
//       addBg('navBarTwo navbar_With_Bg')
//     } else {
//       addBg('navBarTwo')
//     }
//   }

//   window.addEventListener('scroll', addBgColor)

//   return (
//     <div className='navBar flex'>
//       <div className="navBarOne flex">
//         <div>
//           <SiConsul className='icon' />
//         </div>

//         <div>           <ul className='menu flex'>
//           <li onClick={removeNavBar} className='listItem'><a href="/">Home</a></li>
//           <li onClick={removeNavBar} className='listItem'><a href="/about">About</a></li>
//           <li onClick={removeNavBar} className='listItem'><a href="/offer">Offer</a></li>
//           <li onClick={removeNavBar} className='listItem'><a href="/seats">Seats</a></li>
//           <li onClick={removeNavBar} className='listItem'><a href="/destination">Destination</a></li>
//         </ul>
//       </div>

//       <div className="atb flex">

//         <a href="/Signup">Signup</a>
//         <a href="/Signout">Signout</a>
//       </div>



//         <div className='logoDiv'>
//           <img src={logo} className='Logo' />
//         </div>

//         <div className={active}>


//           <button onClick={removeNavBar} className='btn flex btnOne'>
//             Contact
//           </button>
//         </div>

//         <button className='btn flex btnTwo'>
//           Contact
//         </button>

//         <div onClick={showNavBar} className='toggleIcon'>
//           <CgMenuGridO className='icon' />
//         </div>

//       </div>
//     </div>

//   )
// }

// export default Navbar



import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">Offer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">Seats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">Destination</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signup">Signup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
