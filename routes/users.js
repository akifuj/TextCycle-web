import express from 'express';
import user from '../models/ios-user'

let router = express.Router();

router.post('/', (request, response) => {
  user.find({}, (err, usersArray) => {
    if (err) response.status(500).send();
    else response.status(200).send();
  })
})

router.get('/:id', (request, response) => {
  user.findById(request.params.id, (err, user) => {
    if (err) response.status(500).send();
    else response.status(200).send(user);
  })
})

router.put('/:id', (request, response) => {
  iosUser.findByIdAndUpDate(request.params.id, { $set: request.body.params }, err => {
    if (err) response.status(500).send()
    else response.status(200). send()
  })
})

router.delete('/:id', (request, response) => {
  user.findByIdAndRemove(request.params.id, err => {
    if (err) response.status(500).send();
    else response.status(200).send();
  })
})

export default router;
