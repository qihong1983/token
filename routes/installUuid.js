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

	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	//SQL语句
	var sql = "INSERT INTO `saoyisao`.`saotoken` ( `uuid`) VALUES ('" + req.body.uuid + "')";

	connection.query(sql, function(err, result) {

		console.log(err, 'err');

		if (err == null) {
			res.json({
				status: true,
				msg: "执行成功",
				data: req.body.uuid
			})
		} else {
			res.json({
				status: false,
				msg: "执行错误"
			})
		}

		console.log(result, 'result');

	});

});

module.exports = router;