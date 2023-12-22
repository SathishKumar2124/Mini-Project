import React from 'react'


const Book = (props) => {
    const {name,author,description,image,available} = props.book 
  return (
    <div className='cd'>
        <img src={image} alt='name'  />
        <article>By {author}</article>
        <h3 className='name'>{name}</h3>
        <p >{description}</p>
        <h2 className={available?"avail":"unavail"}>{available ? "available" : "unavailable"}</h2>
    </div>
  )
}

export default Book