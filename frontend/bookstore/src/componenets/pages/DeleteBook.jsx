import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './DeleteBook.css'

const DeleteBook = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/books/${id}`)
    .then((result)=> navigate('/adminhome'))
    .catch((err)=>console.log(err))
  }
  return (
    <div className='del-cont'>
      <h1 className='del-h'>Delete</h1>
      <p className='del-p'>Are you sure ? Do you want to delete this book....</p>
      <button className='del-btn' onClick={()=>handleDelete()}>Yes ! Delete It</button>
    </div>
  )
}

export default DeleteBook