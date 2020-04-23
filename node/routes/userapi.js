var mysql = require('mysql');
var config = require('../config');
// var passwordHash = require('password-hash');
var con = mysql.createConnection(config);
var loginInfo = {};
 
// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true, // use SSL
    auth: {
      user: 'indutestmail123@gmail.com',
      pass: 'hindu@111'
    
    }
  }));
  function sendMail(customer_details) {
    var body='<p>Name :' + customer_details.name +'</p>';
      body+='<br><p>Email Id :'+customer_details.email + '</p>';
      body+='<br><p>Message : </p>'+customer_details.message;
    var mailOptions = {
        from: customer_details.email, // sender address
        to: 'indutestmail123@gmail.com', // list of receivers
        subject: customer_details.subject, // Subject line
        html: body// plain text body
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });  
}
loginInfo.user_deatils = function (req, res, next) { 
    // console.log(req.body);
    input = req.body[0];
    nput = req.body[0].name;
    console.log(nput);
    console.log(input);
    var insertQuery=`INSERT INTO contact_form(name, email, ph_no, message) VALUES ('${input.name}',
    '${input.email}',
    '${input.ph_no}','${input.message}')`;
    console.log(insertQuery);
                con.query(insertQuery , function (err, result, fields) {
                    if(err){
                        console.log('Sql error');
                    } else {
                        sendMail(input);
                        res.send({
                            "code": 200,
                            "message": 'success',
                            "data": result
                        });
                    }
                });
   
}



module.exports = loginInfo;