import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Admin from './backend/admin'
import Login from './backend/login'
import AddExamnot from './backend/addExamnot'
import AddStudent from './backend/addStudent'
import AdminDashboard from './backend/adminDashboard'
import DeltExamnot from './backend/deltExamnot'
//import EditdeltBlog from './backend/editdeltBlog'
import EditdeltlatestNews from './backend/editdeltlatestNews'
import EditdeltStud from './backend/editdeltStud'
//import PostBlog from './backend/postBlog'
import PostlatestNews from './backend/postlatestNews'
import Home from './frontend/home'
import AboutUs from './frontend/aboutUs'
import Research from './frontend/research'
import Facilities from './frontend/facilities'
import ContactUs from './frontend/contactUs'
//import Frontend from './frontend/frontend'
// import Login from './login'

const Routing = () => {
  return (
    <div className='container'>
      <Routes>
        {/* frontend routes */}
        <Route path='/' element={<Home />} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='facilities' element={<Facilities/>} />
        <Route path='research' element={<Research />} />
        <Route path='contactUs' element={<ContactUs/>} />
        {/* backendroutes */}
        <Route path='login' element={<Login />} />
        <Route path='adminDashboard' element={<AdminDashboard/>}>
          <Route path='addstudent' element={<AddStudent />} />
          <Route path='editdeltStud' element={<EditdeltStud />} />
          <Route path='addExamnot' element={<AddExamnot />} />
          <Route path='deltExamnot' element={<DeltExamnot />} />
          <Route path='postlatestNews' element={<PostlatestNews />} />
          <Route path='editdeltlatestNews' element={<EditdeltlatestNews />} />
        </Route>

      </Routes>

    </div>
  )
}

export default Routing