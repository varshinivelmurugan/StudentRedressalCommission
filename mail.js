const sgMail = require('@sendgrid/mail')
const id='5f8983afaba6b8141522be52';
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'ramanibabu23082001@gmail.com', // Change to your recipient
  from: 'studentgrievancecommission@outlook.com', // Change to your verified sender
  subject: 'SGC',
  text: 'signuped',
  html: `<body><h1>Your Complaint register successfully</h1><br><h2> Your Complaint id ${id}</h3><h3>It will be  used for check your status after purpose</h3><a href="http://localhost:3000/status">Check Status </a></body>`
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })