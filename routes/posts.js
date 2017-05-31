import express from 'express';
import post from '../models/post'

let router = express.Router();

router.post('/', (request, response) => {
  /*
  const { username, phoneNumber, major,degree, year, sex, introduction } = request.body
  new user
  */
  post.find({}, (err) => {
    if (err) response.status(500).send();
    else response.status(200).send();
  })
})

router.get('/', (request, response) => {
  post.find({}, (err, postsArray) => {
    if (err) response.status(500).send();
    else response.status(200).send(postsArray);
  })
})

router.get('/:user_id', (request, response) => {
  post.find({ user_id: request.params.user_id }, (err, postsArray) => {
    if (err) response.status(500).send();
    else response.status(200).send(postsArray);
  })
})

router.put('/:id'), (request, response) => {
  iosUser.findByIdAndUpDate(request.params.id, { $set: request.body.params }, err => {
    if (err) response.status(500).send()
    else response.status(200). send()
  })
}

router.delete('/:id', (request, response) => {
  post.findByIdAndRemove(request.params.id, err => {
    if (err) response.status(500).send();
    else response.status(200).send();
  })
})

export default router;
