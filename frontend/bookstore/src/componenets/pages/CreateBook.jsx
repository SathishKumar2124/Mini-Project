import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateBook = () => {
  const [name,setName] = useState('')
  const [author,setAuthor] = useState('')
  const [description,setDescription] = useState('')
  const [available,setAvailable] = useState(false)
  const[image,setImage] = useState('')
  const navigate = useNavigate()
 
 
  const handleSubmit = () => {
    const data = {
      name ,
      author,
      description,
      available,
      image,
    }
    
      axios.post('http://localhost:3000/books',data)
      .then(() => {
        navigate('/adminhome')
    } )
      .catch((err) => console.log(err))
  }
 
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder='author' onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <input type="text"  placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
         <div onClick={()=>setAvailable(!available)}>{available ? "available" : "unavailable"}</div>
        </div>
        <div>
          <input type="text" placeholder='image'  onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button onClick={() => handleSubmit()}>submit</button>
      </form>
    </div>
  )
}

export default CreateBook