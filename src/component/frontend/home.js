import React from 'react'
import path from './bietvideo.mp4'
import pic from './highlightsimg.png'
import pic1 from './admissionimg.jpeg'
import pic2 from './agnipath.jpg'
import pic3 from './inductionprogm.jpg'
import pic4 from './certificate.jpeg'
import { Icon } from 'semantic-ui-react'
import pic5 from './jntu.png'
import pic6 from './ugc.png'
import pic7 from './nba.png'
import pic8 from './aicte.png'
import './numscroller-1.0'
import './frontend.css'

import jquery from 'jquery/dist/jquery.min'


const Home = () => {

  return (
    <div>
     
      {/* video */}
      <div className='container'>
        <div className='row'>
          <video autoplay="" loop="" preload="auto" muted="muted">
            <source src={path} type='video/mp4' />
          </video>
          <div className='col-md-12 mt-4'>
            <img src={pic} alt='can not load image' />
          </div>

        </div>
      </div>
      {/* marquee section */}
      <marquee>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 fiximg mb-4 mt-3'>
              <img src={pic1} alt='can not load image' />
            </div>
            <div className='col-md-3 fiximg mb-4 mt-3'>
              <img src={pic2} alt='can not load image' />
            </div>
            <div className='col-md-3 fiximg mb-4 mt-3'>
              <img src={pic3} alt='can not load image' />
            </div>
            <div className='col-md-3 fiximg mb-4 mt-3'>
              <img src={pic4} alt='can not load image' />
            </div>
            <div className='col-md-3 fiximg mb-4 mt-3'>
              <img src={pic4} alt='can not load image' />
            </div>
            <div className='col-md-3 fiximg mb-4 mt-3'>
              <img src={pic2} alt='can not load image' />
            </div>

          </div>
        </div>
      </marquee>
      <div className='container'>
        <div className='row bg-grey pb-2 pt-2'>
          <marquee>
            <p> <Icon name='hand point right' className='text-danger' />  BIET invites all students and faculties for Freshers Day Celebrations on 25-02-2023 at BIET Premises.   <Icon name='hand point right' className='text-danger' />  Welcome to BIET  <Icon name='hand point right' className='text-danger' />  Bharat Institute of Engineering and Technology organizing Innovative ideas and Model Presentations(IIMP-2022) on 21-03-2022 at BIET premises sponsored by AICTE under SPICE Scheme   <Icon name='hand point right' className='text-danger' />  MoU was signed between Samskruti Foundation and Bharat Institute Of Engineering And Technology (BIET) mangalpally Hyderabad.on 28-01-2022 As a part of MoU,a Cultural Leadership Center will be started in the college to facilitate and train the students in various cultural,social and responsible activities  <Icon name='hand point right' className='text-danger' />   In association with BIET NCC and NSS Unit, BIET Event Management Committee has organised a Yoga session at 10am on 21-06-2022 near NA lawn, on the occasion of International Yoga Day 2022   <Icon name='hand point right' className='text-danger' />   SERB PROGRAM ADVISORY COMMITTEE MEETING Mechanical, Manufacturing, Aerospace Engineering and Robotics to be held at BIET Premises from 07-08 APRIL 2022  <Icon name='hand point right' className='text-danger' />   Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2022 sponsored by AICTE under SPICE Scheme and Institution's Innovation Council  <Icon name='hand point right' className='text-danger' />   Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2023 </p>
          </marquee >
        </div>
      </div>
      {/* bharat Institute heading starts */}
      <div className='container mt-4'>
        <div className='row'>
          <h1 className='text-danger border-bottom pb-3'>Bharat Institute of Engineering and Technology</h1>
          <p className='justify'>Bharat Institute of Engineering & Technology (BIET), established in 2001 by Chinta Reddy Madhusudhan Reddy Educational Society (CHMR) under the leadership of Sri Ch. Venugopal Reddy, an eminent educationist with a social conscience and commitment. It has grown in its size and stature over the years, from an initial intake of 240 to 1350 students. BIET is one of the largest Engineering Colleges in Telangana. It offers 10 B.Tech programs, 8 M.Tech programs and 1 MBA program. With consistent and excellent academic performance of students in the University examinations, the Institute has endeared itself to many students and parents. Bharat Institute of Engineering & Technology (BIET) boasts of well experienced and highly qualified faculty, State-of-the-art Infrastructure, regular placements and well equipped laboratories.Bharat Institute of Engineering & Technology (BIET), established in 2001 by Chinta Reddy Madhusudhan Reddy Educational Society (CHMR) under the leadership of Sri Ch. Venugopal Reddy, an eminent educationist with a social conscience and commitment. It has grown in its size and stature over the years, from an initial intake of 240 to 1350 students. BIET is one of the largest Engineering Colleges in Telangana. It offers 10 B.Tech programs, 8 M.Tech programs and 1 MBA program. With consistent and excellent academic performance of students in the University examinations, the Institute has endeared itself to many students and parents. Bharat Institute of Engineering & Technology (BIET) boasts of well experienced and highly qualified faculty, State-of-the-art Infrastructure, regular placements and well equipped laboratories.</p>
        </div>
      </div>
      {/* heading ends */}
      {/* Affiliations section starts */}
      <div className='container bg-grey mt-5'>
        <div className='row'>
          <div className='border-bottom mb-3 mt-3 pb-3'><h2 className='text-danger'>Affiliations</h2></div>
          <div className='col-md-3 mb-4 mt-3 affility'>
            <img src={pic5} alt='can not load image' />
          </div>
          <div className='col-md-3 mb-4 mt-3 affility'>
            <img src={pic6} alt='can not load image' />
          </div>
          <div className='col-md-3 mb-4 mt-3 affility'>
            <img src={pic7} alt='can not load image' />
          </div>
          <div className='col-md-3 mb-4 mt-3 affility'>
            <img src={pic8} alt='can not load image' />
          </div>


        </div>
      </div>
      {/* counter section starts */}
      <div className='container counter mt-5'>
        <div className='row'>
          <div className='col-md-3 mt-5 mb-5'>
            <div className='text-center'>
              <Icon.Group size='huge' >
                <Icon size='big' name='circle outline' color='grey' />
                <Icon name='user' color='grey' />
              </Icon.Group>
              <h1 class='numscroller numscroller-big-bottom font-weight-bold text-danger' data-slno='1' data-min='0' data-max='8050' data-delay='15' data-increment="20"></h1>
              <h4 className='text-light'>Engineers graduated till date</h4>
            </div>
          </div>
          <div className='col-md-3 mt-5 mb-5'>
            <div className='text-center'>
              <Icon.Group size='huge' >
                <Icon size='big' name='circle outline' color='grey' />
                <Icon name='shield alternate' color='grey' />
              </Icon.Group>

              <h1 class='numscroller numscroller-big-bottom font-weight-bold text-danger' data-slno='1' data-min='0' data-max='1350' data-delay='15' data-increment="10"></h1>
              <h4 className='text-light'>Every Year Intake</h4>
            </div>
          </div>
          <div className='col-md-3 mt-5 mb-5'>
            <div className='text-center'>
              <Icon.Group size='huge' >
                <Icon size='big' name='circle outline' color='grey' />
                <Icon name='line graph' color='grey' />
              </Icon.Group>
              <h1 class='numscroller numscroller-big-bottom font-weight-bold text-danger' data-slno='1' data-min='0' data-max='835' data-delay='17' data-increment="10"></h1>
              <h4 className='text-light'>Job offers each year</h4>
            </div>
          </div>
          <div className='col-md-3 mt-5 mb-5'>
            <div className='text-center'>
              <Icon.Group size='huge' >
                <Icon size='big' name='circle outline' color='grey' />
                <Icon name='book' color='grey' />
              </Icon.Group>
              <h1 class='numscroller numscroller-big-bottom font-weight-bold text-danger' data-slno='1' data-min='0' data-max='67000' data-delay='14' data-increment="200"></h1>
              <h4 className='text-light'>Books Available for Students</h4>
            </div>
          </div>
        </div>
      </div>
      {/* latestnews section */}
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='mb-3'>
              <h3 className='text-danger pb-3 border-bottom'>Latest News</h3>
            </div>
            <div className='border bg-grey marqu'>
              <marquee direction='up'>
                <p> <Icon name='hand point right' className='text-danger' />  BIET invites all students and faculties for Freshers Day Celebrations on 25-02-2023 at BIET Premises.</p>
                <p><Icon name='hand point right' className='text-danger' />  Welcome to BIET</p>
                <p><Icon name='hand point right' className='text-danger' />  Bharat Institute of Engineering and Technology organizing Innovative ideas and Model Presentations(IIMP-2022) on 21-03-2022 at BIET premises sponsored by AICTE under SPICE Scheme.</p>
                <p><Icon name='hand point right' className='text-danger' />  MoU was signed between Samskruti Foundation and Bharat Institute Of Engineering And Technology (BIET) mangalpally Hyderabad.on 28-01-2022 As a part of MoU,a Cultural Leadership Center will be started in the college to facilitate and train the students in various cultural,social and responsible activities.</p>
                <p><Icon name='hand point right' className='text-danger' />   In association with BIET NCC and NSS Unit, BIET Event Management Committee has organised a Yoga session at 10am on 21-06-2022 near NA lawn, on the occasion of International Yoga Day 2022.</p>
                <p><Icon name='hand point right' className='text-danger' />   SERB PROGRAM ADVISORY COMMITTEE MEETING Mechanical, Manufacturing, Aerospace Engineering and Robotics to be held at BIET Premises from 07-08 APRIL 2022</p>
                <p><Icon name='hand point right' className='text-danger' />   Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2022 sponsored by AICTE.</p>
                <p><Icon name='hand point right' className='text-danger' />   Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2023 </p>
                <p><Icon name='hand point right' className='text-danger' />   Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2023 </p>

              </marquee >
            </div>
          </div>
          <div className='col-md-4'>
            <div className='mb-3'>
              <h3 className='text-danger pb-3 border-bottom'>Notifications/Circulars</h3>
            </div>
            <div className='border bg-grey marqu'>
              <marquee direction='up'>
                <p> <Icon name='hand point right' className='text-danger' />  BIET invites all students and faculties for Freshers Day Celebrations on 25-02-2023.</p>
                <p><Icon name='hand point right' className='text-danger' />  Welcome to BIET</p>
                <p><Icon name='hand point right' className='text-danger' />Bharat Institute of Engineering and Technology organizing Model Presentations(IIMP-2022) on 21-03-2022 at BIET premises sponsored by AICTE under SPICE Scheme.</p>
                <p><Icon name='hand point right' className='text-danger' />SERB PROGRAM ADVISORY COMMITTEE MEETING Mechanical, Manufacturingto be held at BIET Premises from 07-08 APRIL 2022 at sharp 11Am</p>
                <p><Icon name='hand point right' className='text-danger' />Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2022 sponsored by AICTE.</p>
                <p><Icon name='hand point right' className='text-danger' />Bharat Institute of Engineering and Technology organizing Smart India Hackathon 2022(Internal) on 23-24 March 2023. </p>
              </marquee >
            </div>
          </div>
        </div>
      </div>
    
     
    </div >

  )
}

export default Home