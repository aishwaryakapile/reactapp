import React, { useState } from 'react' 
import './adminDashboard.css'
import { Button } from 'semantic-ui-react';
import axios from 'axios';


const AddStudent = () => {
const [id,setId]=useState('');
const [fname,setFname]=useState('');
const [lname,setLname]=useState('');
const [phone,setPhone]=useState('');
const [email,setEmail]=useState('');
const [fathername,setFathername]=useState('');
const [fatherno,setFatherno]=useState('');
const [mothername,setMothername]=useState('');
const [motherno,setMotherno]=useState('');
const [dob,setDob]=useState('');
const [joiningdate,setJoiningdate]=useState('');
const [subject,setSubject]=useState('');
const [message,setMessage]=useState('');
const submitHandler=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:4000/student',{id,fname,lname,phone,email,fathername,fatherno,mothername,motherno,dob,joiningdate,subject,message})
  .then(res=>{
       document.getElementById('note').innerHTML="Data inserted successfully"
  })
  .catch(err=>{
      document.getElementById('note').innerHTML="Unable to insert data successfully"
  })
}
return (
    <div>
      <form className='mt-5' onSubmit={submitHandler}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <input type="text" name='id' value={id} onChange={(e)=>setId(e.target.value)} className='form-control' placeholder="ID" required />
            </div>
            <div className='col'>
              <input type="text" name='fname' value={fname} onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder="First name" required/>
            </div>
            <div className='col'>
              <input type="text" name='lname'  value={lname} onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder="Last name" required/>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col'>
              <input type="text" name='phone'  value={phone} onChange={(e)=>setPhone(e.target.value)}className='form-control' placeholder="Phone" required />
            </div>
            <div className='col'>
              <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}className='form-control' placeholder="Email Id" required />
            </div>
            <div className='col'>
              <input type="text" name='fathername' value={fathername} onChange={(e)=>setFathername(e.target.value)} className='form-control' placeholder="Father Name" required/>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col'>
              <input type="text" name='fatherno' value={fatherno} onChange={(e)=>setFatherno(e.target.value)} className='form-control' placeholder="Father Mob. No." required />
            </div>
            <div className='col'>
              <input type="text" name='mothername'  value={mothername} onChange={(e)=>setMothername(e.target.value)}className='form-control' placeholder="Mother Name" />
            </div>
            <div className='col'>
              <input type="text" name='motherno' value={motherno} onChange={(e)=>setMotherno(e.target.value)} className='form-control' placeholder="Mother Mob. No." />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col'>
              <input type="text" name='dob' value={dob} onChange={(e)=>setDob(e.target.value)}className='form-control' placeholder="DOB" />
            </div>
            <div className='col'>
              <input type="text" name='joiningdate'               value={joiningdate} onChange={(e)=>setJoiningdate(e.target.value)} className='form-control' placeholder="Date of Joining" />
            </div>
            <div className='col'>
              <input type="text" name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)} className='form-control' placeholder="Subject" />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-12'>
              <textarea type="text" name='message'  value={message} onChange={(e)=>setMessage(e.target.value)} className='form-control' placeholder='Message'></textarea> 
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col'>
                     
              <Button  className='btnright' positive>Submit</Button>
           
          </div>
        </div>
    </div>
    <div id='note' className='errmsg'></div>
      </form >
      

    </div >
  )
}

export default AddStudent