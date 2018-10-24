var express = require('express');
var router = express.Router();

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

let jwt = require('jsonwebtoken');
var JWT_PASSWORD = 'token';


var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '39.106.140.80',
	user: 'root',
	password: 'Qihong38752673',
	database: 'saoyisao'
});

//执行创建连接 
connection.connect();

router.post('/', bodyParser.json(), function(req, res, next) {

	var sql = "SELECT * FROM `saotoken` WHERE uuid='" + req.body.uuid + "'";

	connection.query(sql, function(err, result) {

		if (err == null) {
			res.json({
				status: true,
				msg: "执行成功",
				data: result
			})
		} else {
			res.json({
				status: false,
				msg: "执行失败",
				data: err
			});
		}

	});


});

module.exports = router;