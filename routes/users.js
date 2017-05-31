import express from 'express';
import user from '../models/ios-user'

let router = express.Router();

router.post('/', (request, response) => {
  const { username, phoneNumber, major,degree, year, sex, introduction } = request.body
  new user({ username, phoneNumber, major, degree, year, sex, introduction }).save(err => {
    if (err) response.status(500).send(err)
    else response.status(200).send(`${username} was successfully created.`)
  })
})

router.get('/:id', (request, response) => {
  user.findById(request.params.id, (err, user) => {
    if (err) response.status(500).send();
    else response.status(200).send(user);
  })
})

router.get('/tel/:tel', (request, response) => {
  user.find({ phoneNumber: request.params.tel }, (err, user) => {
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
