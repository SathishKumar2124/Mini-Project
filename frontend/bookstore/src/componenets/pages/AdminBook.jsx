import React from 'react'
import './AdminBook.css'
import  {Link} from 'react-router-dom'


const AdminBook = (props) => {
    const {_id,name,author,description,image,available} = props.book 
  return (
    <div className='cd'>
        <img src={image} alt='name'  />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2 className={available?"avail":"unavail"}>{available ? "available" : "unavailable"}</h2>
       <Link to={`/updatebook/${_id}`}><button className='update'>Update</button></Link> 
       <Link to={`/deletebook/${_id}`}><button className='delete'>Delete</button> </Link>
    </div>
  )
}

export default AdminBook