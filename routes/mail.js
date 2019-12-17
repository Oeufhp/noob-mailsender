const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer')
require('dotenv').config()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_APP_PASSWORD
    }
  })
  let mailOptions = {
    to: req.body.recEmail,
    subject: req.body.subject,
    text: req.body.message,
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err)
    }
    console.log('info ==>', info)
  })
  res.writeHead(301, { Location: 'index.html' })
  res.end()
})

module.exports = router;
