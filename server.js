const express = require('express');
const app = express();
app.use(express.json());

let books = [];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).send();
});

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = req.body;

  let index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = book;
    res.send();
  } else {
    res.status(404).send();
  }
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;

  let index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.send();
  } else {
    res.status(404).send();
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
