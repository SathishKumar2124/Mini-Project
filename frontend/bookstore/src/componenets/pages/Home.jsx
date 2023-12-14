import { useState,useEffect } from "react"
import axios from 'axios'
import Book from "./Book"
import './Book.css'


const Home = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/books')
        .then((response)=>setBooks(response.data))
        .catch(err=>console.log(err))
        console.log(books)
    },[])
    return (
    <div  >
        <ul className="cd">
            {
                books && books.map((book)=>(
                    <div className="cd" key={Math.random()*10}>
                        <Book  book={book}/>
                    </div>
                ))
            }
        </ul>
    </div>
  )
}

export default Home