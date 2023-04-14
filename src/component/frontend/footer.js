import React from 'react'
import './frontend.css'
import { Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row pt-4'>
                        <div className='col-md-4 pt-3'>
                            <div className='text-light footertxt'>
                                <h3>Our Recruiter</h3>
                                <ul>
                                    <li>Capgemini</li>
                                    <li>Amazon</li>
                                    <li>Hcl</li>
                                    <li>Tech Mahindra</li>
                                    <li>TATA</li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-md-4 pt-3'>
                            <div className='text-light'>
                                <h3>Reach Us</h3>
                                <NavLink href='tel:+91 8414252310'><p className='text-light pb-3'><Icon name='phone' />+91 8414252310</p></NavLink>
                                <NavLink href='mail to:biet@gamil.com'><p className='text-light'><Icon name='envelope' />biet@gmail.com</p></NavLink>


                            </div>
                        </div>
                        <div className='col-md-4 pt-3'>
                            <div className='text-light'>
                                <h3>Social Media</h3>
                                <ul className='socialmedia text-center'>
                                    <li><Icon name='facebook' /></li>
                                    <li><Icon name='instagram' /></li>
                                    <li><Icon name='whatsapp' /></li>
                                    <li><Icon name='linkedin' /></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='container pt-3 pb-3 bottomfooter'>
                <div className='row'>
                    <div className='col-md-6'>
<p className='text-light'>© 2022 Bharat Institutions</p>
                    </div>
                    <div className='col-md-6'>
                    <p className='text-light'>Design By Aishwarya Kapile</p>

</div>
                </div>
            </div>
        </div>
    )
}

export default Footer