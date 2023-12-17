import { useState,useEffect } from "react"
import axios from 'axios'
import AdminBook from "./AdminBook"
import './AdminBook.css'
import  {Link} from 'react-router-dom'


const AdminHome = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/books')
        .then((response)=>setBooks(response.data))
        .catch(err=>console.log(err))
    },[])
    return (
    <div  >
      <Link to='/addbook'><button className="create" >Create Book</button></Link>
        <ul className="cd">
          
            {
              
                books && books.map((book)=>(
                    <div className="cd" key={Math.random()*10}>
                        <AdminBook  book={book}/>
                    </div>
                ))
            }
        </ul>
    </div>
  )
}

export default AdminHome