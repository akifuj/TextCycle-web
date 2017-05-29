import express from 'express';
import auth from 'basic-auth';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

import user from '../models/user';
import bcrypt from 'bcrypt-nodejs';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  user.find({ email: req.body.email }, function (err, user) {
    if (user.length > 0) {
      if (bcrypt.compareSync(password, user[0].hashed_password)) {
        const token = jwt.sign({
          id: user[0]._id,
          username: user[0].username,
          email: user[0].email
        }, config.jwtSecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials'}});
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials'}});
    }
  })
});

export default router;
