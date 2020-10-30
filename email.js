const nodemailer  = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
  auth : {
          api_key :'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'//this api key from sendgrip website login and get api from it you can use any website  
  }
}));
transporter.sendMail({
    to: 'ramanibabu23082001@gmail.com',
    from: 'studentgrievancecommission@outlook.com',
    subject: 'Signup succeeded!',
    html: '<h1>You successfully signed up!</h1>'
  })
  .then(result=>
    {
console.log("email send");
    })
    .catch(err =>
        {
            console.log(err);
        })