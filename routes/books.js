import express from 'express';

import { addBook, books, viewAll, viewOne, delBook,updateBook } from "../controllers/books.js";


const router = express.Router();


// get all the books
router.get('/', viewAll);

// add new book
router.post('/', addBook);

// get book with a particular id
router.get("/:id", viewOne);


// delete book
router.delete("/:id", delBook);

// update book records
router.patch('/:id', updateBook);

export default router;