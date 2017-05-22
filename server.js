import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path'

import users from './routes/users';
import auth from './routes/auth';
import mail from './routes/mail';

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

import Book from './models/book';

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/mail/send', mail);

app.post('/api/books', (request, response) => {
  const { title, author, publisher, image } = request.body;

  new Book({
    title,
    author,
    publisher,
    image,
  }).save(err => {
    if (err) response.status(500);
    else response.status(200);
  })
})

app.get('/api/books', (request, response) => {
  Book.find({}, (err, testArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(testArray);
  })
})

app.listen(port, err => {
  if (err) throw new Error(err)
  else console.log(`listening on port ${port}`)
})
