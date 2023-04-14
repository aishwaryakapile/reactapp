import React from 'react'
import path from '../backend/logo2.jpg'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Badge from 'react-bootstrap/Badge';

const Header = () => {
  return (
    <div className='container header'>
      <div className='row'>
        <div className='col-md-3 pb-3 pt-3 borderright'>
          <img src={path} alt='Image cant load' />
        </div>
        <div className='col-md-3 pt-3 borderright'>
        <NavLink to='contactUs'>  <Button variant='danger'>Admissions 2023-24</Button></NavLink>
       
        </div>
        <div className='col-md-3 pt-3 borderright'>
          <NavLink href='tel:+91 8414252310'><p className='text-dark pb-3'><Icon name='phone' />+91 8414252310</p></NavLink>
          <NavLink href='mail to:biet@gamil.com'><p className='text-dark'><Icon name='envelope' />biet@gmail.com</p></NavLink>
        </div>
        <div className='col-md-3  pt-2'>
          <Badge bg="danger">
            New
          </Badge>{' '}
          <p>Pay Online</p>
          <Badge bg="danger">
            New
          </Badge>{' '} <p>New policy</p>
        </div>
      </div>
    </div>
  )
}

export default Header