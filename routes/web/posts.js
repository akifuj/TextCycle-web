import express from 'express';
import post from '../../models/post'

import jwt from 'jsonwebtoken';
import config from '../../config/config.js';

let router = express.Router();

router.get('/', (request, response) => {
  post.find({}, (err, testArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(testArray);
  })
})

router.delete('/', (req, res) => {
  const { id } = req.body;
  post.findByIdAndRemove(id, err => {
    if (err) res.status(500).send()
    else res.status(200)
  })
})

export default router;
