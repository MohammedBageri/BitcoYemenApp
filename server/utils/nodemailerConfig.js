module.exports = {
  host: 'mail.privateemail.com',
  port: 465, //587,
  //secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
}

//user: 'cecelia4@ethereal.email',
//pass: '56HsqwpHFFgGKCV6wr'