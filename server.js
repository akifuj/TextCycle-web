import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path'

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/textcycle';
mongoose.connect(dbUrl, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + dbUrl);
  }
});

/*
import auth from './routes/auth';
import mail from './routes/mail';
*/

import posts from './routes/posts';
import users from './routes/users';
import auth from './routes/auth';

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*
app.use('/api/posts', posts);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/mail/send', mail);
*/

// GETリクエストに対処
app.use('/posts', posts);
app.use('/users', users);
app.use('/auth', auth);

app.listen(port, err => {
  if (err) throw new Error(err)
  else console.log(`listening on port ${port}`)
})
