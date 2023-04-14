import React, { useEffect, useState } from 'react'
import './adminDashboard.css'
import { Button } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import axios from 'axios'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'jquery/dist/jquery'
import $ from 'jquery'

const EditdeltStud = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fathername, setFathername] = useState('');
  const [joiningdate, setJoiningdate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/student')
      .then(res => {
        setStudents(res.data)
      })
      .catch(err => {
        console.log(err);
      })

      setTimeout(()=>{
        $(function(){
          $('#tableex').DataTable()
        },1000)
      })
  })

  function deleteData(userid) {
    axios.delete('http://localhost:4000/student/' + userid)
      .then(res => {
        document.getElementById('note').innerHTML = "Data deleted successfully"
      })
      .catch(err => {
        document.getElementById('note').innerHTML = "Unable to delete data"
      })
  }
  function editData(userid) {
    axios.get('http://localhost:4000/student/' +userid)
      .then(res => {
        setId(res.data.id);
        setFname(res.data.fname);
        setLname(res.data.lname);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setFathername(res.data.fathername);
        setJoiningdate(res.data.joiningdate);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/student/' + id, {
      id, fname, lname, phone, email, fathername, joiningdate
    })
      .then(res => {
        document.getElementById('note').innerHTML = "Data Updated successfully"
      })
      .catch(err => {
        document.getElementById('note').innerHTML = "Unable to update data"
      })
  }
  return (
    <div className='mt-3'>
      <div className='container border-bottom'>

        <form onSubmit={submitHandler}>
          <div className='row mt-3'>
            <div className='col-md-3'>
              <input type="text" placeholder='Id' className='form-control' name="id" value={id} onChange={(e)=>setId(e.target.value)}/>
            </div>
            <div className='col-md-3'>
              <input type="text" placeholder='First Name' className='form-control' name="fname" value={fname} onChange={(e)=>setFname(e.target.value)} />
            </div>
            <div className='col-md-3'>
              <input type="text" placeholder='Last Name' className='form-control' name="lname" value={lname} onChange={(e)=>setLname(e.target.value)}/>
            </div>
            <div className='col-md-3'>
              <input type="text" placeholder='Phone No.' className='form-control' name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-md-3'>
              <input type="text" placeholder='Email' className='form-control' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='col-md-3'>
              <input type="text" placeholder='Father Name' className='form-control' name="fathername" value={fathername} onChange={(e)=>setFathername(e.target.value)}/>
            </div>
            <div className='col-md-3'>
              <input type="text" placeholder='Date of Joining' className='form-control' name="joiningdate" value={joiningdate} onChange={(e)=>setJoiningdate(e.target.value)} />
            </div>

          </div>
          <div className='col-md-12 mt-4 mb-4'>

            <input type='submit' value='Update' className='btn btn-success pr-3' /></div>

        </form>

      </div>
      <table className='mt-5' id='tableex'>
        <thead>
          <tr>
            <th className='text-center'>Id</th>
            <th className='text-center'>First Name</th>
            <th className='text-center'>Last Name</th>
            <th className='text-center'>Phone No.</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Father Name</th>
            <th className='text-center'>Date of Joining</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((stu) => {
              return (
                <tr key={stu.id}>
                  <td>{stu.id}</td>
                  <td>{stu.fname}</td>
                  <td>{stu.lname}</td>
                  <td>{stu.phone}</td>
                  <td>{stu.email}</td>
                  <td>{stu.fathername}</td>
                  <td>{stu.joiningdate}</td>
                  <td><Button variant='danger' onClick={() => deleteData(stu.id)}><Icon name='trash' /></Button></td>
                  <td><Button onClick={() => editData(stu.id)}><Icon name='pencil' /></Button></td>
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

export default EditdeltStud