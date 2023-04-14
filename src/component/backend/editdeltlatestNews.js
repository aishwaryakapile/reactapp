import React, { useEffect, useState } from 'react'
import './adminDashboard.css'
import { Button } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import axios from 'axios'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'

const EditdeltlatestNews = () => {
  const [latestnews, setLatestnews] = useState([]);
  const [id, setId] = useState('');
  const [newsdiscription, setNewsdiscription] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/latestnews')
      .then(res => {
        setLatestnews(res.data)
      })
      .catch(err => {
        console.log(err);
      })

    setTimeout(() => {
      $(function () {
        $('#tableex').DataTable()
      }, 1000)
    })
  })
  function deleteData(userid) {
    axios.delete('http://localhost:4000/latestnews/' + userid)
      .then(res => {
        document.getElementById('note').innerHTML = "News deleted successfully"
      })
      .catch(err => {
        document.getElementById('note').innerHTML = "Unable to delete news"
      })
  }
  function editData(userid) {
    axios.get('http://localhost:4000/latestnews/' + userid)
      .then(res => {
        setId(res.data.id);
        setNewsdiscription(res.data.newsdiscription);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/latestnews/' + id, {
      id, newsdiscription})
      .then(res => {
        document.getElementById('note').innerHTML = "News Updated successfully"
      })
      .catch(err => {
        document.getElementById('note').innerHTML = "Unable to update news"
      })
  }

  return (
    <div className='mt-3'>
      <div className='container border-bottom mb-5'>

        <form onSubmit={submitHandler}>
          <div className='row mt-3'>
            <div className='col-md-6'>
              <input type="text" placeholder='Id' className='form-control' name="id" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
          </div>
          <div className='mt-4'>
            <input type="text" placeholder='Edit News discription' className='form-control' name="newsdiscription" value={newsdiscription} onChange={(e) => setNewsdiscription(e.target.value)} />
          </div>
          <div className='col-md-12 mt-4 mb-4'>

            <input type='submit' value='Update' className='btn btn-success pr-3' /></div>

        </form>

      </div>
      <table className='mt-4' id='tableex'>
        <thead>
          <tr>
            <th className='text-center'>Id</th>
            <th className='text-center'>Latest News</th> 
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            latestnews.map((news) => {
              return (
                <tr key={news.id}>
                  <td>{news.id}</td>
                  <td>{news.newsdiscription}</td>
                  <td><Button variant='danger' onClick={() => deleteData(news.id)}><Icon name='trash' /></Button></td>
                  <td><Button onClick={() => editData(news.id)}><Icon name='pencil' /></Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div id='note' className='errmsg mt-3'></div>
    </div>
  )
}

export default EditdeltlatestNews