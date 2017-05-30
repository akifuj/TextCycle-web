import express from 'express';
import user from '../models/ios-user'

let router = express.Router();

router.post('/', (request, response) => {
  user.find({}, (err, usersArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

router.get('/:id', (request, response) => {
  user.findById(id, (err, user) => {
    if (err) response.status(500).send();
    else response.status(200).send(user);
  })
})

router.put('/:id', (request, response) => {
  iosUser.findByIdAndUpDate(id, { $set: request.body.params }, err => {
    if (err) response.status(500).send()
    else response.status(200). send()
  })
})

router.delete('/:id', (request, response) => {
  user.findByIdAndRemove(id, err => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

export default router;
