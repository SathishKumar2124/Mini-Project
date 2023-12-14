const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose")
const router = require('./routes/bookRoutes')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/BookStore").then(result => console.log("connected to DataBase"))

app.use('/books',router)

app.listen(3000,()=>{
    console.log("server is running")
})