// A node js Application to perform CRUD operation for online Book Cart

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory JSON data store
let books = [
  { id: 1, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', price: 20.00, quantity: 12 },
{ id: 2, title: 'The Guide', author: 'R.K. Narayan', price: 14.50, quantity: 8 },
{ id: 3, title: 'God of Small Things', author: 'Arundhati Roy', price: 18.00, quantity: 6 },
{ id: 4, title: 'Midnight’s Children', author: 'Salman Rushdie', price: 22.00, quantity: 5 },
{ id: 5, title: 'Train to Pakistan', author: 'Khushwant Singh', price: 16.00, quantity: 9 },
{ id: 6, title: 'The White Tiger', author: 'Aravind Adiga', price: 17.50, quantity: 7 },
{ id: 7, title: 'Malgudi Days', author: 'R.K. Narayan', price: 13.00, quantity: 10 },
{ id: 8, title: 'A Suitable Boy', author: 'Vikram Seth', price: 25.00, quantity: 4 },
{ id: 9, title: 'Gitanjali', author: 'Rabindranath Tagore', price: 12.00, quantity: 15 },
{ id: 10, title: 'Interpreter of Maladies', author: 'Jhumpa Lahiri', price: 15.00, quantity: 8 },
{ id: 11, title: 'In Custody', author: 'Anita Desai', price: 14.00, quantity: 6 },
{ id: 12, title: 'The Namesake', author: 'Jhumpa Lahiri', price: 16.50, quantity: 7 },
{ id: 13, title: 'Coolie', author: 'Mulk Raj Anand', price: 11.00, quantity: 10 },
{ id: 14, title: 'Untouchable', author: 'Mulk Raj Anand', price: 12.50, quantity: 9 },
{ id: 15, title: 'Discovery of India', author: 'Jawaharlal Nehru', price: 19.00, quantity: 6 },
{ id: 16, title: 'India After Gandhi', author: 'Ramachandra Guha', price: 23.00, quantity: 5 },
{ id: 17, title: 'The Palace of Illusions', author: 'Chitra Banerjee Divakaruni', price: 17.00, quantity: 7 },
{ id: 18, title: 'Raavan: Enemy of Aryavarta', author: 'Amish Tripathi', price: 18.50, quantity: 8 },
{ id: 19, title: 'Shiva Trilogy: The Immortals of Meluha', author: 'Amish Tripathi', price: 19.00, quantity: 10 },
{ id: 20, title: 'The Secret of the Nagas', author: 'Amish Tripathi', price: 18.00, quantity: 9 },
{ id: 21, title: 'Sita: Warrior of Mithila', author: 'Amish Tripathi', price: 17.50, quantity: 8 },
{ id: 22, title: 'Five Point Someone', author: 'Chetan Bhagat', price: 10.00, quantity: 20 },
{ id: 23, title: '2 States', author: 'Chetan Bhagat', price: 11.50, quantity: 18 },
{ id: 24, title: 'The Namesake', author: 'Jhumpa Lahiri', price: 16.00, quantity: 7 },
{ id: 25, title: 'The Lowland', author: 'Jhumpa Lahiri', price: 18.00, quantity: 6 },
{ id: 26, title: 'Life of Pi', author: 'Yann Martel', price: 15.00, quantity: 8 },
{ id: 27, title: 'An Era of Darkness', author: 'Shashi Tharoor', price: 20.00, quantity: 5 },
{ id: 28, title: 'The Great Indian Novel', author: 'Shashi Tharoor', price: 19.00, quantity: 6 },
{ id: 29, title: 'English, August', author: 'Upamanyu Chatterjee', price: 14.00, quantity: 7 },
{ id: 30, title: 'The Room on the Roof', author: 'Ruskin Bond', price: 12.00, quantity: 12 },
{ id: 31, title: 'The Blue Umbrella', author: 'Ruskin Bond', price: 10.50, quantity: 14 },
{ id: 32, title: 'The Inheritance of Loss', author: 'Kiran Desai', price: 18.00, quantity: 6 },
{ id: 33, title: 'Sea of Poppies', author: 'Amitav Ghosh', price: 17.00, quantity: 7 },
{ id: 34, title: 'The Shadow Lines', author: 'Amitav Ghosh', price: 16.50, quantity: 8 },
{ id: 35, title: 'Sacred Games', author: 'Vikram Chandra', price: 21.00, quantity: 5 },
{ id: 36, title: 'Maximum City', author: 'Suketu Mehta', price: 20.00, quantity: 6 },
{ id: 37, title: 'The Argumentative Indian', author: 'Amartya Sen', price: 19.50, quantity: 7 },
{ id: 38, title: 'Ignited Minds', author: 'A.P.J. Abdul Kalam', price: 15.00, quantity: 11 },
{ id: 39, title: 'My Experiments with Truth', author: 'Mahatma Gandhi', price: 14.00, quantity: 13 },
{ id: 40, title: 'Ghachar Ghochar', author: 'Vivek Shanbhag', price: 13.50, quantity: 9 },
{ id: 41, title: 'The Last Mughal', author: 'William Dalrymple', price: 22.00, quantity: 5 },
{ id: 42, title: 'Freedom at Midnight', author: 'Larry Collins & Dominique Lapierre', price: 21.00, quantity: 6 },
{ id: 43, title: 'The Immortals of Meluha', author: 'Amish Tripathi', price: 19.00, quantity: 10 },
{ id: 44, title: 'Gunahon Ka Devta', author: 'Dharamvir Bharati', price: 12.00, quantity: 14 },
{ id: 45, title: 'Chanakya Neeti', author: 'Chanakya', price: 10.00, quantity: 20 },
{ id: 46, title: 'Ramayana', author: 'Valmiki', price: 25.00, quantity: 8 },
{ id: 47, title: 'Mahabharata', author: 'Ved Vyasa', price: 30.00, quantity: 6 },
{ id: 48, title: 'The Story of My Life', author: 'Hellen Keller (Indian editions)', price: 13.00, quantity: 10 },
{ id: 49, title: 'Pather Panchali', author: 'Bibhutibhushan Bandopadhyay', price: 14.50, quantity: 9 },
{ id: 50, title: 'Devdas', author: 'Sarat Chandra Chattopadhyay', price: 12.50, quantity: 11 }
];

// Get all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// Get book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json(book);
});

// Add a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    quantity: req.body.quantity
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Update entire book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = req.body.title;
  book.author = req.body.author;
  book.price = req.body.price;
  book.quantity = req.body.quantity;

  res.status(200).json(book);
});

// Update partial book details
app.patch('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (req.body.title !== undefined) book.title = req.body.title;
  if (req.body.author !== undefined) book.author = req.body.author;
  if (req.body.price !== undefined) book.price = req.body.price;
  if (req.body.quantity !== undefined) book.quantity = req.body.quantity;

  res.status(200).json(book);
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  const initialLength = books.length;
  books = books.filter(book => book.id !== parseInt(req.params.id));

  if (books.length === initialLength) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json({ message: 'Book deleted successfully' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});