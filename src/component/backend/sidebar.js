import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
//import logo from './logo2.jpg'
//import logo from './logo1.jpg'
import { Icon } from 'semantic-ui-react'


const Sidebar = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 sidebarnav'>
                        {/* <img className='logo' src={logo} /> */}
                        {/* <img className='logo' src={logo} /> */}
                        <Icon.Group size='huge'>
                            <Icon loading size='big' name='circle notch' />
                            <Icon name='user' />
                        </Icon.Group>
                        <h3 className='navheading mt-5'>Admin Dashboard</h3>
                        <ul>
                            <li><NavLink to='addstudent'><Icon name='plus' /> Add Student  </NavLink></li>
                            <li><NavLink to='editdeltStud'><Icon name='trash' />Edit & Delete Student</NavLink></li>
                            <li><NavLink to='addExamnot'><Icon name='plus' /> Add Exam Notification</NavLink></li>
                            <li><NavLink to='deltExamnot'><Icon name='trash' /> Delete Exam Notification</NavLink></li>
                            <li><NavLink to='postlatestNews'><Icon name='plus' /> Post Latest news</NavLink></li>
                            <li><NavLink to='editdeltlatestNews'><Icon name='trash' />Edit & Delete Latest news</NavLink></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar