import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
//import { Icon } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import logoimg  from './logo1.jpg'



const Login = () => {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (uname === "admin" && pwd === "admin") {
      navigate('/adminDashboard')
    }
    else {
      document.getElementById('note').innerHTML = "Invalid Username or  Password"
    }
  }

  return (
    <div>
      <div className='container marginlog'>
        <div className='row'>
          <div className='col-md-3'>
          </div>
          <div className='col-md-6'>
            <div className='row box'>
              <div className='col-md-4'>
                <img className='loginlogo' src={logoimg} alt='' />
              </div>
              <div className='col-md-8'>
                <div className='heading'>
                  <h1>LOGIN</h1>
                </div>

                <form className='' onSubmit={submitHandler}>
                  <div className='bg-gray'>
                   <div className='form-control bg-gray'>
                      <Input size='large' icon='user' iconPosition='left' type="text" name="uname" placeholder="User Name"  value={uname} onChange={(e) => setUname(e.target.value)} />
                    </div>
                    <div className='form-control bg-gray'>
                      <Input size='large'  icon='unlock alternate' iconPosition='left' type="password" name="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    <div className='form-control bg-gray'>
                      <input type="submit" value="Login" />
                    </div>
                  </div>
                </form>
                <div id='note' className='errmsg'></div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login