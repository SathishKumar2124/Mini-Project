const express = require('express')
const router = express.Router()
const {getBooks,addBook,getbookbyId,updateBook,deleteBook} = require('../controllers/bookControllers')

router.get('/',getBooks)
router.post('/',addBook)
router.get('/:id',getbookbyId)
router.put('/:id',updateBook)
router.delete('/:id',deleteBook)

module.exports = router