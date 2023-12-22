import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }
  const handleAdmin = () => {
    navigate('/admin')
  }
     
  return (
    <div className='navbar' >
      <h1 className='title' onClick={() => handleHome()}>Book Checker</h1>
      <h2 className='admin' onClick={() => handleAdmin()}>Admin</h2>
    </div>
  )
}

export default Navbar