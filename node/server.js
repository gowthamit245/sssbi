const express = require('express');
var mysql = require('mysql');
var http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: 'sssbi_website'
  
});

const app = express()
const port = 3000

app.get('/emp', function (req, res){
  con.query("SELECT * FROM tblemployees", function (err, result, fields) {
	//console.log(result);
	res.send({
		"code": 200,
		"message": 'message',
		"data": result 
	});
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))