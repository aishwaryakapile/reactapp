import React, { useEffect, useState } from 'react'
import './adminDashboard.css'
import { Button } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import axios from 'axios'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'


const DeltExamnot = () => {
  const [exam, setExam] = useState([]);
  useEffect(() => {
    axios.get(' http://localhost:4000/examnot')
      .then(res => {
        setExam(res.data)
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

  function deleteData(examnotif) {
    axios.delete('http://localhost:4000/examnot/' + examnotif)
      .then(res => {
        document.getElementById('note').innerHTML = "Data deleted successfully"
      })
      .catch(err => {
        document.getElementById('note').innerHTML = "Unable to delete data"
      })
  }
  return (
    <div>
      <div className='mt-5'>
      <table className='mt-4' id='tableex'>
        <thead>
          <tr>
            <th className='text-center'>Exam Type</th>
            <th className='text-center'>Exam Date</th>
            <th className='text-center'>Exam Discription</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            exam.map((examntf) => {
              return (
                <tr key={examntf.examtype}>
                  <td>{examntf.examtype}</td>
                  <td>{examntf.examdate}</td>
                  <td>{examntf.examdiscr}</td>
                  <td><Button variant='danger' onClick={() => deleteData(examntf.examtype)}><Icon name='trash' /></Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div id='note' className='errmsg mt-3'></div>
      </div>
    </div>
  )
}

export default DeltExamnot