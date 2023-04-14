import React from 'react'
import path from './vision1.png'
import chart from './orgchart.jpg'
import './frontend.css'


const AboutUs = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='text-danger'>Our Vision, Mission & Core Value</h2>
        <img src={path} alt='image cant load' className='mb-3' />

        <div className='col-md-1'></div>
        <div className='col-md-10 orgimg mt-4'>
          <img src={chart} alt='image cant load' className='mb-3' />
        </div>
        <div className='col-md-1'></div>



      </div>
    </div>
  )
}

export default AboutUs