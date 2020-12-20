// the server port
const SERVER_PORT = 3000;

const express = require('express');
const cors = require('cors');
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


//TODO: needs to be replaced by a database
const books = [
    {
      id: "0",
      title: "Test Buch 1",
      author: "Tobias Opgenoorth",
      publisher: "Beispiel Verlag",
      publishYear: 1999,
      borrowed: false,
      borrowedDate: ""
    },
    {
      id: "1",
      title: "Test Buch 2",
      author: "Tobias Opgenoorth",
      publisher: "Beispiel Verlag",
      publishYear: 1999,
      borrowed: true,
      borrowedDate: "2020-12-19"
    }
  ]

/**
 * REST endpoint to get a token.
 * TODO: At this moment the REST endpoint provide no token and just sends a 200.
 */
app.get("/token", (req, res, next) =>{
  res.status(200).end()
})

/**
 * REST endpoint to get all books.
 */
app.get("/books", (req, res, next) => {
  if(books.length === 0){
    res.status(404).end()
  }else{
    res.send(books)
  }
})


/**
 * REST endpoint to add a book.
 */
app.post("/books", (req, res, next) => {
  console.log("test")
	let book = req.body
  book.id = "" + generateId()
	books.push(book)
	res.send(books)
})

/**
 * generates an Id for a new book.
 */
function generateId(){
	return books.length
}

/**
 * REST endpoint to update a book by id.
 */
app.put("/books/:id", (req, res, next) => {
  // searches the index of
	let index = books.map((book) => book.id).indexOf(req.params.id)
	books[index] = req.body
	res.send(books)
})

/**
 * REST endpoint to delete a book by id.
 */
app.delete("/books/:id", (req, res, next) => {
	let index = books.map((book) => book.id).indexOf(req.params.id)
	books.splice(index, 1)
	res.send(books)
})

/**
 * REST endpoint for API documentation
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at http://localhost:${SERVER_PORT}`);
})