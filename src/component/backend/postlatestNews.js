import React, { useState } from 'react'
import './adminDashboard.css';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const PostlatestNews = () => {
  const [id, setId] = useState('');
  const [newsdiscription, setNewsdiscription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/latestnews', { id, newsdiscription })
      .then(res => {
        document.getElementById('note').innerHTML = "Data inserted successfully"
      })
      .catch(err => {
        document.getElementById('note').innerHTML = "Unable to insert data"
      })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-6'>
              <input type="text" name='id' className='form-control' placeholder='Id' value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className='col-md-6'>
            </div>
            </div>
              <div className='mt-4'>
              <textarea type="text" name='examdiscr' className='form-control' placeholder='News Discription' value={newsdiscription} onChange={(e) => setNewsdiscription(e.target.value)} ></textarea>
            </div>

            <div className='row'>
              <div className='col-md-8'></div>
              <div className='col-md-4 mt-4'>
                <Button className='btnright' positive>Submit</Button>
              </div>
            </div>
          </div>

      </form>
      <div id='note' className='errmsg'></div>

    </div>
  )
}

export default PostlatestNews