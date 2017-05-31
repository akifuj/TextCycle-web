import express from 'express';
import post from '../models/post'

let router = express.Router();

router.post('/', (request, response) => {
  const { user_id, buyer_id, title, author, publisher, listPrice, condition, price, image } = request.body
  new post({ user_id, buyer_id, title, author, publisher, listPrice, condition, price, image }).save(err => {
    if (err) response.status(500).send(err)
    else response.status(200).send(`${title} was successfully created.`)
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

router.put('/:id', (request, response) => {
  const { image } = request.body
  post.findByIdAndUpdate(request.params.id, { $set: { image: image } }, err => {
    if (err) response.status(500).send(err)
    else response.status(200). send(`${image}`)
  })
})

router.delete('/:id', (request, response) => {
  post.findByIdAndRemove(request.params.id, err => {
    if (err) response.status(500).send(err);
    else response.status(200).send();
  })
})

export default router;
