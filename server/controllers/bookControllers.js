const Book = require('../model/Book')
const mongoose = require('mongoose')

const getBooks = async(req,res)  => {
    let books;
    try{
         books = await Book.find()
    }catch(err){
        console.log(err)
    }
    if(!books){
        return res.status(401).json({message:"no books found"})
    }
    return res.status(201).json(books)
}

const getbookbyId = async(req,res)=>{
    try{
        const {id} =req.params;
        const book = await Book.findById(id)
        res.status(201).json(book)
    }catch(err){
        console.log(err)
    }
}

const addBook = async(req,res) =>{
    const {name,author,description,price,available,image} = req.body
    try{
        const newbook = {
            name:name,author:author,description:description,price:price,available:available,image:image
        }
        const book = Book.create(newbook)
        if(!book){
            return res.status(500).json({message:"unable to add"})
        }
        return res.status(201).json(newbook)
    }catch(err){
        console.log(err)
    }
}

const updateBook = async (req, res, next) => { 
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
      book = await Book.findByIdAndUpdate(id, {
        name,
        author,
        description,
        price,
        available,
        image,
      });
      book = await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
  };

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  

module.exports = { getBooks,addBook,getbookbyId,updateBook,deleteBook}