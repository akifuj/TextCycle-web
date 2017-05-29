import express from 'express';
import user from '../models/user'

let router = express.Router();

app.post('/', (request, response) => {
  user.find({}, (err, usersArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

app.get('/:id', (request, response) => {
  user.findById(id, (err, usersArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(usersArray);
  })
})

app.put('/:id'), (request, response) => {
  iosUser.findByIdAndUpDate(id, { $set: request.body.params }, err => {
    if (err) response.status(500).send()
    else response.status(200). send()
  })
}

app.delete('/:id', (request, response) => {
  user.findByIdAndRemove(id, err => {
    if (err) respnse.status(500).send();
    else response.status(200).send();
  })
})

export default router;
