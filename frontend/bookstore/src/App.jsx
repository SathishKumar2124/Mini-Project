import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './componenets/pages/Home'
import Navbar from './componenets/Navbar'
import './App.css'
import Admin from './componenets/pages/Admin'
import AdminHome from './componenets/pages/AdminHome'
import CreateBook from './componenets/pages/CreateBook'
import UpdateBook from './componenets/pages/UpdateBook'

const App = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='bd'>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/addbook' element={<CreateBook />} />
        <Route path= '/updatebook' element={<UpdateBook />} />
      </Routes>
      </div>
      
    </div>
  )
}

export default App