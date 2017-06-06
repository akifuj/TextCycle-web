import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path'

import posts from './routes/ios/posts';
import users from './routes/ios/users';
import auth from './routes/ios/auth';

import webPosts from './routes/web/posts';
import webUsers from './routes/web/users';
import webAuth from './routes/web/auth';
import mail from './routes/web/mail';

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/textcycle';
mongoose.connect(dbUrl, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + dbUrl);
  }
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ios
app.use('/posts', posts);
app.use('/users', users);
app.use('/auth', auth);

// web版
app.use('/api/posts', webPosts);
app.use('/api/users', webUsers);
app.use('/api/auth', webAuth);
app.use('/api/mail/send', mail);

app.listen(port, err => {
  if (err) throw new Error(err)
  else console.log(`listening on port ${port}`)
})
