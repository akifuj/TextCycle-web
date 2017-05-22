import express from 'express';
let router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

if (process.env.SENDGRID_API_KEY) {
  console.log("ZZZZZZZZZ")
}

router.post('/', (req, res) => {
  let errors = {};
  sendgrid.send({
    to: 'tessitetsusi@gmail.com',
    from: 'tessitetsusi@gmail.com',
    subject: 'Hello World',
    text: 'Hello from SendGrid'
  }, function(err, json) {
    if (err) { res.status(500).json({ error: err }); }
    res.json({ success: true })
  });
});

export default router;
