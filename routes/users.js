import express from 'express';
import auth from 'basic-auth';
import jwt from 'jsonwebtoken';

import user from '../models/user';
import bcrypt from 'bcrypt-nodejs';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

router.post('/', (req, res) => {
  let errors = {};
  user.find({ email: req.body.email }, function (err, user) {
    if (user.length > 0) {
      errors.email = 'There is user with such email';
      res.status(400).json(errors);
    } else {
      const { username, email, password } = req.body;
      const hashed_password = bcrypt.hashSync(password);
      new user({
        username,
        email,
        hashed_password
      }).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
    }
  })
});

export default router;
