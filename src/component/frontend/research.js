import React from 'react'
import './frontend.css'
import { Icon } from 'semantic-ui-react'
import path from './raoimg.jpg'


const Research = () => {
  return (
    <div>
      <div className='container'>
        <div className='row research'>
          <h3 className='text-danger mt-3'>Major Objectives</h3>
          <p>BIET has been emphasizing on Centre for Research & Consultancy (CRC) in various areas of Engineering through:</p>
          <p><Icon name='hand point right' className='text-danger' />R & D projects funded by the college or external agencies like DST, AICTE, UGC, DRDO, DRDL, DLRL etc</p>
          <p><Icon name='hand point right' className='text-danger' />  Research centers where research scholars pursue their Ph.D. degrees</p>
          <p><Icon name='hand point right' className='text-danger' />Organizing International and national conferences, seminars and workshops funded by the college or external agencies like DST, AICTE, etc</p>
          <p><Icon name='hand point right' className='text-danger' />Provide technical assistance to industries and user Organizations / Departments</p>
          <p><Icon name='hand point right' className='text-danger' />Promote Research and develop appropriate Technology</p>
          <p><Icon name='hand point right' className='text-danger' />Promote exchange programmes between Industries and the Institution</p>
          <p><Icon name='hand point right' className='text-danger' />Establish testing/consultancy centres in various fields of Engineering</p>
          <p><Icon name='hand point right' className='text-danger' /> Procure state-of-the-art equipments required for Testing / Consultancy</p>
        </div>
        <div className='row mt-5 research'>
          <h3 className='text-danger'>Research Publication</h3>
          <h5><span className='text-danger'> Prof. G. Kumaraswamy Rao,</span> Director (R&D), BIET (Former Director & O.S. of DLRL Ministry of Defence)</h5>
          <div className='col-md-4 researchimg'>
            <img src={path} alt='image can not load' />
          </div>
          <div className='col-md-8 research'>
            <p>Prof. G. Kumaraswamy, former director of Defence Electronics Research Lab an Electronics Systems Engineering Centre, was associated in work with Dr. A. P. J. Abdul Kalam in the "Integrated Guided Missile Program, and was personally responsible for the design and development of a number of missile guidance electronic systems for Trishul, Prithvi and Akash missiles" .He has also designed the ground guidance electronic system for India’s first short range surface to air missile. Prof. G. Kumaraswamy is the Director of R&D at Bharat Institute of Engineering and Technology.</p>
          </div>
          <div className='mt-5 research'>
            <h4 className='text-primary mt-3'>R & D FOCUS AREAS</h4>
            <h4 className='text-danger mt-2'>COMPUTER SCIENCE AND ENGINEERING</h4>
            <p><Icon name='hand point right' className='text-danger' />Big Data Analytics</p>
            <p><Icon name='hand point right' className='text-danger' />Wireless Networks</p>
            <p><Icon name='hand point right' className='text-danger' />Information Security</p>
            <p><Icon name='hand point right' className='text-danger' />Software Engineering</p>

            <h4 className='text-danger mt-4'>ELECTRICAL AND ELECTRONICS ENGINEERING
            </h4>
            <p><Icon name='hand point right' className='text-danger' />System Engineering and Technology
            </p>
            <p><Icon name='hand point right' className='text-danger' /> Power Systems</p>
            <p><Icon name='hand point right' className='text-danger' />Renewable Energy Systems</p>
            <p><Icon name='hand point right' className='text-danger' />Automation</p>
            
            <h4 className='text-danger mt-4'>MECHANICAL ENGINEERING
            </h4>
            <p><Icon name='hand point right' className='text-danger' /> Renewable Energy (Utilization of forest waste)
            </p>
            <p><Icon name='hand point right' className='text-danger' />  Produciton Technology</p>
            <p><Icon name='hand point right' className='text-danger' /> Thermal Engineering</p>
            <p><Icon name='hand point right' className='text-danger' />Mecatronics</p>

            <h4 className='text-danger mt-4'>ELECTRONICS AND COMMUNICATION ENGINEERING

            </h4>
            <p><Icon name='hand point right' className='text-danger' />  RF Microwaves and Antennas
            </p>
            <p><Icon name='hand point right' className='text-danger' />   Radar Communications, Photonics and Optical Communications</p>
            <p><Icon name='hand point right' className='text-danger' />  Micro Electronics and VLSI</p>
            <p><Icon name='hand point right' className='text-danger' />Signal Processing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research