import express from 'express';
import post from '../models/post'

let router = express.Router();

router.post('/', (request, response) => {
  post.find({}, (err, postsArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

router.get('/', (request, response) => {
  post.find({}, (err, postsArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(postsArray);
  })
})

router.get('/:user_id', (request, response) => {
  post.find({ user_id: request.body.user_id }, (err, postsArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(postsArray);
  })
})

router.put('/:id'), (request, response) => {
  iosUser.findByIdAndUpDate(id, { $set: request.body.params }, err => {
    if (err) response.status(500).send()
    else response.status(200). send()
  })
}

router.delete('/:id', (request, response) => {
  post.findByIdAndRemove(id, err => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

export default router;
