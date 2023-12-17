import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './UpdateBook.css'

const UpdateBook = () => {
  const [name,setName] = useState('')
  const [author,setAuthor] = useState('')
  const [description,setDescription] = useState('')
  const [available,setAvailable] = useState()
  const[image,setImage] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/books/${id}`)
    .then((response)=>{
    setName(response.data.name)
    setAuthor(response.data.author)
    setDescription(response.data.description)
    setImage(response.data.image)

  })
    .catch(err=>console.log(err))
  })

  const handleSubmit= () => {
    const data = {
      name ,
      author,
      description,
      available,
      image,
    }
    axios.put(`http://localhost:3000/books/${id}`,data)
    .then((response)=> navigate('/adminhome'))
    .catch((err) => console.log(err))
  }

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input value={name} type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input value={author} type="text" placeholder='author' onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <input value={description} type="text"  placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
         <div className={available ? "true" : "false"}  onClick={()=>setAvailable(!available)}>{available ? "available" : "unavailable"}</div>
        </div>
        <div>
          <input value={image} type="text" placeholder='image'  onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button onClick={() => handleSubmit()}>submit</button>
      </form>
    </div>
  )
}

export default UpdateBook