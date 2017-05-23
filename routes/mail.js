import express from 'express';
let router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.post('/', (req, res, next) => {
  let title = req.body.post.title
  const helper = require('sendgrid').mail;
  let fromEmail = new helper.Email('tessitetsusi@gmail.com');
  let toEmail = new helper.Email(req.body.user.email);
  let subject = '【TextCycle】本を購入しました';
  let content = new helper.Content('text/plain',
    `${title}をご購入頂きありがとうございます。
    ただ今、出品者にメールを送りました。
    出品者から返信があるまで、しばらくお待ち下さい。`);
  let mail = new helper.Mail(fromEmail, subject, toEmail, content);

  let error = {}
  const sgReq = sendgrid.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });
  sendgrid.API(sgReq, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ success: true })
    return;
  })
});

export default router;
