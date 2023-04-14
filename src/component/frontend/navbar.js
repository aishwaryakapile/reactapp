import React from 'react'
import { NavLink } from 'react-router-dom'
import './frontend.css'
//import { Container,Menu} from 'semantic-ui-react'



const Navbar = () => {
  return (
    <div className='container navigation'>
    <div className='row'>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarSupportedContent">
              
              <ul className='navbar-nav navt'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to="/">Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to="aboutUs">About Us</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to="facilities">Facilities</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to="research">Research</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to="contactUs">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
       </div>
    </div>
  )
}

export default Navbar