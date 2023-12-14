import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const handleLogin = () => {
    if(username === "admin" && password === "webdev"){
      navigate('/adminhome')
    }else{
      alert("invalid credentials")
      location.reload()
    }
  }
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='enter username' />
          <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='enter password' />
          <button onClick={() => handleLogin()}> login</button>
        </form>
        
    </div>
  )
}

export default Admin