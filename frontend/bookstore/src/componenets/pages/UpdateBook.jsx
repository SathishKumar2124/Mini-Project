import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './UpdateBook.css'

const UpdateBook = () => {
  const [name,setName] = useState('')
  const [author,setAuthor] = useState('')
  const [description,setDescription] = useState('')
  const [takerId,setTakerId] = useState('')
  const [available,setAvailable] = useState()
  const[image,setImage] = useState('')
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  
   useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`)
    .then((response)=>{
    setName(response.data.name)
    setAuthor(response.data.author)
    setDescription(response.data.description)
    setTakerId(response.data.takerId)
    setAvailable(response.data.available)
    setImage(response.data.image)
    setLoading(false)
  })
    .catch(err=>console.log(err))
  },[])

  const handleSubmit= () => {
    const data = {
      name ,
      author,
      description,
      takerId,
      available,
      image,
    }
    setLoading(true)
    axios.put(`http://localhost:3000/books/${id}`,data)
    .then((response)=> {
      setLoading(false)
      navigate('/adminhome')})
    .catch((err) => console.log(err))
  }
 

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div><h1>Update Book</h1></div>
        <div>
          <input  type="text"  value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input value={author} type="text"  onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <input  value={description} type="text"   onChange={ (e) => setDescription(e.target.value) }/>
        </div>
        <div>
          <input  value={takerId} type="text" placeholder='takerId'  onChange={ (e) => setTakerId(e.target.value) }/>
        </div>
        <div>
         <div className={available ? "true" : "false"}  onClick={()=>setAvailable(!available)}>{available ? "available" : "unavailable"}</div>
        </div>
        <div>
          <input value={image} type="text"   onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button onClick={() => handleSubmit()}>submit</button>
        </form>
    </div>
  )
}

export default UpdateBook