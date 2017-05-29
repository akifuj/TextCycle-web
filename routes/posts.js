import express from 'express';
import post from '../models/post'

let router = express.Router();

app.post('/', (request, response) => {
  post.find({}, (err, postsArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

app.get('/', (request, response) => {
  post.find({}, (err, postsArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(postsArray);
  })
})

app.get('/:user_id', (request, response) => {
  post.find({ user_id: request.body.user_id }, (err, postsArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(postsArray);
  })
})

app.put('/:id'), (request, response) => {
  iosUser.findByIdAndUpDate(id, { $set: request.body.params }, err => {
    if (err) response.status(500).send()
    else response.status(200). send()
  })
}

app.delete('/:id', (request, response) => {
  post.findByIdAndRemove(id, err => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

export default router;
