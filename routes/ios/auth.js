import express from 'express';
import post from '../../models/ios-user';

let router = express.Router();

router.get('/', (request, response) => {
  const { phoneNumber } = request.body
  user.find({ phoneNumber: request.body.phoneNumber }, (err, user) => {
    if (user.length > 0) {
      response.status(200).send(user[0])
    } else {
      response.status(500).json({ error: 'ログインできませんでした'})
    }
  })
})

export default router;
