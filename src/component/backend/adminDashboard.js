import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import './adminDashboard.css'
import adminbanner from './adminbanner.jpg'

const AdminDashboard = () => {
  return (
    <div>
      <div className='container'>
        <div className='row body'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <img className="banner" src={ adminbanner } />
            <Outlet />
          </div>
        </div>
      </div>
    </div>


  )
}

export default AdminDashboard