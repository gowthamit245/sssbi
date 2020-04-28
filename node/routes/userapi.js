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

loginInfo.insertApplyJobDetails = function (req, res, next) { 
  console.log(req.body);
  input =   JSON.parse(req.body.input_user);
  imagefile  = req.files;
   console.log(imagefile);
   let imgPathUrl = '';
   if(imagefile){
       let imgPath = imagefile.uploads.path;
       imgArr = imgPath.split('\\');
       imgPathUrl = imgArr[imgArr.length-1];
   }
  var insertQuery=`INSERT INTO apply_job_details (name, email, ph_no, notice_period, resume, user_status) VALUES ('${input.name}',
  '${input.email}',
  '${input.ph_no}','${input.notice_period}','${imgPathUrl}', '${input.user_status}')`;
  console.log(insertQuery);
              con.query(insertQuery , function (err, result, fields) {
                  if(err){
                      console.log('Sql error');
                  } else {
                      res.send({
                          "code": 200,
                          "message": 'success',
                          "data": result
                      });
                  }
              });
 
}
// loginInfo.getjobdetails = function (req, res, next) { 
  // console.log(req.body);
  // input = req.body[0];
  // console.log(input);
//   var insertQuery=`SELECT * FROM job_tbl ORDER BY id  DESC `;
//   console.log(insertQuery);
//               con.query(insertQuery , function (err, result, fields) {
//                   if(err){
//                       console.log('Sql error');
//                   } else {
//                       // sendMail(input);
//                       res.send({
//                           "code": 200,
//                           "message": 'success',
//                           "data": result
//                       });
//                   }
//               });
// }

loginInfo.searchJobs = function (req, res, next) { 
  console.log(req.body);
  input = req.body[0];
  console.log(input);
  var insertQuery=`SELECT * FROM job_tbl where job_title= '${input.job_title}' `;
  console.log(insertQuery);
              con.query(insertQuery , function (err, result, fields) {
                  if(err){
                      console.log('Sql error');
                  } else {
                      // sendMail(input);
                      res.send({
                          "code": 200,
                          "message": 'success',
                          "data": result
                      });
                  }
              });
}

loginInfo.getjobDetailsOnId = function (req, res, next) { 
  console.log(req.body);
  input = req.body[0];
  console.log(input);
  var insertQuery=`SELECT * FROM job_tbl where id= ${input} `;
  console.log(insertQuery);
              con.query(insertQuery , function (err, result, fields) {
                  if(err){
                      console.log('Sql error');
                  } else {
                      // sendMail(input);
                      res.send({
                          "code": 200,
                          "message": 'success',
                          "data": result
                      });
                  }
              });
}
loginInfo.getjobdetails = function (req, res, next) { 
  console.log(req.body);
  input = req.body[0];
  console.log(input);
  whereCondi=`WHERE  status = 'active' `;

  checkWhereCondi = ``;
if(input.full_time){
    if(!checkWhereCondi){
        checkWhereCondi= ` job_type='Full Time' `;
    } else {
        checkWhereCondi= checkWhereCondi + ` OR job_type='Full Time' `;
    }
}
if(input.part_time){
    if(!checkWhereCondi){
        checkWhereCondi= ` job_type='Part Time' `;
    } else {
        checkWhereCondi= checkWhereCondi + `  OR job_type='Part Time' `;
    }
}
if(input.temporary){
    if(!checkWhereCondi){
        checkWhereCondi= ` job_type='Temporary' `;
    } else {
        checkWhereCondi= checkWhereCondi + `  OR job_type='Temporary' `;
    }
}
if(input.freelance){
  if(!checkWhereCondi){
      checkWhereCondi= ` job_type='Freelance' `;
  } else {
      checkWhereCondi= checkWhereCondi + `  OR job_type='Freelance' `;
  }
}
if(input.internship){
  if(!checkWhereCondi){
      checkWhereCondi= ` job_type='Internship' `;
  } else {
      checkWhereCondi= checkWhereCondi + `  OR job_type='Internship' `;
  }
}

// whereCondi = whereCondi + ` and ( ` + checkWhereCondi + ` ) `;
// if(!checkWhereCondi){
//   whereCondi = whereCondi + ` and ( ` + checkWhereCondi + ` ) `;
// }

 if(input.job_title){
    whereCondi= whereCondi + ` and  job_title like '%${input.job_title}%' `;
  }
  if(input.job_location){
    whereCondi= whereCondi + ` and  job_location like '%${input.job_location}%' `;
  }

  // if(input.full_time){
  //   whereCondi= whereCondi + ` OR  job_type='Full Time' `;
  // }
  // if(input.part_time){
  //   whereCondi= whereCondi + ` OR  job_type='Part Time' `;
  // }
  // if(input.temporary){
  //   whereCondi= whereCondi + ` OR  job_type='Temporary' `;
  // }
  // if(input.freelance){
  //   whereCondi= whereCondi + ` OR  job_type='Freelance' `;
  // }
  // if(input.internship){
  //   whereCondi= whereCondi + ` OR  job_type='Internship' `;
  // }
  // if(input.job_title){
  //   whereCondi= whereCondi + ` and  job_title like '%${input.job_title}%' `;
  // }
  // if(input.job_location){
  //   whereCondi= whereCondi + ` and  locatoin like '%${input.job_location}%' `;
  // }
  whereCondi = whereCondi +` ORDER BY id  DESC`;

  var selectQuery=`SELECT * from job_tbl ${whereCondi}`;
  
 console.log(selectQuery);
  // var insertQuery=`SELECT * FROM job_tbl ORDER BY id  DESC `;
  // console.log(insertQuery);
              con.query(selectQuery , function (err, result, fields) {
                  if(err){
                      console.log('Sql error');
                  } else {
                      // sendMail(input);
                      res.send({
                          "code": 200,
                          "message": 'success',
                          "data": result
                      });
                  }
              });
}
module.exports = loginInfo;