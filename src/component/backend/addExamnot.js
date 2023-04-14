import React, { useState } from 'react'
import './adminDashboard.css';
import { Button } from 'semantic-ui-react';
import axios from 'axios';


const AddExamnot = () => {
  const [examtype, setExamtype] = useState(''); 
  const [examdate, setExamdate] = useState('');
  const [examdiscr, setExamdiscr] = useState('');
  const submitHandler=(e)=>{
      e.preventDefault();
      axios.post(' http://localhost:4000/examnot',{examtype,examdate,examdiscr})
      .then(res=>{
           document.getElementById('note').innerHTML="Data inserted successfully"
      })
      .catch(err=>{
          document.getElementById('note').innerHTML="Unable to insert data"
      })
    }
  return (
    
    <div>
      <form onSubmit={submitHandler}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-6'>
              <input type="text" name='examtype' className='form-control' placeholder='Exam Type' value={examtype} onChange={(e) => setExamtype(e.target.value)} />
            </div>
            <div className='col-md-6'>
              <input type="text" name='examdate' placeholder='Exam Date' className='form-control' value={examdate} onChange={(e) => setExamdate(e.target.value)} />
            </div>
          </div>
          
          <div className='mt-4'>
            <textarea type="text" name='examdiscr' className='form-control' placeholder='Exam Discription' value={examdiscr} onChange={(e) => setExamdiscr(e.target.value)} ></textarea>

          </div>
          <div className='row'>
            <div className='col-md-8'></div>
            <div className='col-md-4 mt-4'>
            <Button  className='btnright' positive>Submit</Button>
            </div>
          </div>
        </div>
      </form>
      <div id='note' className='errmsg'></div>
    </div>
  )
}

export default AddExamnot