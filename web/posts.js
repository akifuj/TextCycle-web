import express from 'express';
import book from '../models/book'

let router = express.Router();

router.get('/', (request, response) => {
  book.find({}, (err, testArray) => {
    if (err) respnse.status(500).send();
    else response.status(200).send(testArray);
  })
})

router.delete('/', (req, res) => {
  const { id } = req.body;
  book.findByIdAndRemove(id, err => {
    if (err) res.status(500).send()
    else res.status(200)
  })
})

export default router;
