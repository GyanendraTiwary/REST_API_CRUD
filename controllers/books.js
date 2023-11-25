
import { v4 as uuidv4 } from 'uuid';

export var books = [
    
]

export const addBook = (req,res) => { 
        const book = req.body;
    
    
        books.push({...book, id: uuidv4()});
    
        res.send(`Book with name ${book.name} added successfully to database`);
    }

export const viewAll = (req,res) =>  {
    res.send(books);
}

export const  viewOne =  (req,res) => {
    const { id } = req.params;

    const foundBook = books.find((book) => book.id === id)

    res.send(foundBook);
}

export const delBook = (req,res) => {

    const { id } = req.params;

    books = books.filter((book) => book.id !== id)

    res.send(`Book with ${id} is deleted form database`)

}

export const updateBook = (req, res) =>{
    const { id } = req.params;
    const { name, author, publisher } = req.body;

    const book = books.find((book) => book.id === id );

    if(name) {
        book.name = name;
    }
    if(author) {
        book.author = author;
    }
    if(publisher) {
        book.publisher = publisher;
    }
    
    
    res.send(`Book with ID: ${id} updated successfuly`);
}