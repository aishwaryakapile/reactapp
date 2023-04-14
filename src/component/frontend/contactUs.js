import React, { useState } from 'react'
import './frontend.css'
import { Icon } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import './frontend.css'

const ContactUs = () => {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const submitHandler = (e) => {
      e.preventDefault();
      const alphaExp = /^[A-Za-z ]+$/;
const emailExp=/^[a-zA-z0-9]+@[a-z]+.[a-z]+$/
      const numExp = /^[0-9]+$/;
      if(uname===""){
        document.getElementById('unameNote').innerHTML = "Please enter name"
    }
    else {
        if (uname.match(alphaExp)) {
            document.getElementById('unameNote').innerHTML = ""
        }
        else {
            document.getElementById('unameNote').innerHTML = "Please enter valid user name"

        }
    }
    if (email === "") {
      document.getElementById('emailNote').innerHTML = "Please enter Email"
  }
  else {
      if (email.match(emailExp)) {
          document.getElementById('emailNote').innerHTML = ""
      }
      else {
          document.getElementById('emailNote').innerHTML = "Please enter valid email Id"

      }
  }
  if (phone === "") {
    document.getElementById('phoneNote').innerHTML = "Please enter Phone Number"
}
else {
    if (phone.match(numExp)) {
       if(phone.length===10){
        document.getElementById('phoneNote').innerHTML = ""
       }
       else{
        document.getElementById('phoneNote').innerHTML = "Please enter 10 digit Number only"
       }
    }
    else {
        document.getElementById('phoneNote').innerHTML = "Please enter Phone Number"

    }
}

  }
  return (
    <div>
      <div className='container'>
        <div className='row contact'>
          <div className='bg-grey mt-2'>
            {/* heading */}
            <h3 className='text-danger pt-4 pb-3'>Contact Us</h3>
          </div>
        </div>
{/* contactform */}
        <div className='row mt-5 contact'>
          <div className='col-md-6'>
            <h4 className='text-danger'>Contact Form :</h4>
             
            <form onSubmit={submitHandler} action=''>
            <div className='row mt-5'>
              <div className='col-md-6'>
              <Input icon='user' iconPosition='left' placeholder='Enter Your Name' type="text" name="name" value={uname} onChange={(e) => setUname(e.target.value)} className='mb-4' />
                <div id="unameNote" className='errmsg'></div>
              </div>
              <div className='col-md-6'>
              <Input icon='envelope' iconPosition='left' placeholder='Enter Your Email Id' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mb-4' />
                <div id="emailNote" className='errmsg'></div>
              </div>
              </div>
              <div>
              <Input icon='phone' iconPosition='left' placeholder='Enter Your Phone Number' type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='mb-4' />
                <div id="phoneNote" className='errmsg'></div>
              </div>
              <input type="submit" className='btn btn-danger' />
            </form>
           
          </div>
          {/* Contact Information */}
          <div className='col-md-6'>
            <h4 className='text-danger'>Contact Information :</h4>
            <div className='row'>
              <div className='col-md-6'>
                <h5 className='mt-3 border-bottom pb-3'>College Address</h5>
                <p>Mangalpally (V),</p>
                <p>Ibrahimpatnam (M)</p>
                <p>Ranga Reddy (D)</p>
                <p>Hyderabad-501 510</p>
                <p>Telangana, India.</p>
                <p><Icon name='phone' className='text-danger' />(08414) 252313, 252399,252647</p>
              </div>
              <div className='col-md-6'>
                <h5 className='mt-3 border-bottom pb-3'>Administrative Office</h5>
                <p>2-1-444</p>
                <p>Nallakunta</p>
                <p>O.U. Road</p>
                <p>Hyderabad - 500 044</p>
                <p>Telangana, India.</p>
                <p><Icon name='phone' className='text-danger' />(040) 27676372, 27645846</p>

              </div>
            </div>
          </div>
        </div>
        {/* Google Map  */}
        <div className='row mt-5 contact'>
          <div className='col-md-8 contact'>
            <h4 className='text-danger mb-4'>Google Map :</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121522.7589396386!2d78.53488297207275!3d17.190306968176355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba6f9dcc53a29%3A0xca7fada1a3144a68!2sBharat+Institute+Of+Engineering+And+Technology!5e0!3m2!1sen!2sin!4v1526974974222" width="100%" height="350" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
          </div>
          <div className='col-md-4'></div>

        </div>

      </div>
    </div >
  )
}

export default ContactUs