import express from 'express';
let router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('tessitetsusi@gmail.com');
var toEmail = new helper.Email('tessitetsusi@gmail.com');
var subject = 'Hello World from the SendGrid Node.js Library!';
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);

router.post('/', (req, res, next) => {
  let error = {}
  const sgReq = sendgrid.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });
  sendgrid.API(sgReq, (err) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ success: true })
    return;
  })
});

export default router;
