var express = require('express');
var router = express.Router();

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

let jwt = require('jsonwebtoken');
var JWT_PASSWORD = 'token';


var mysql = require('mysql');

function handleError(err) {
	if (err) {
		// 如果是连接断开，自动重新连接
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			connect();
		} else {
			console.error(err.stack || err);
		}
	}
}

// 连接数据库
function connect() {
	db = mysql.createConnection({
		host: '39.106.140.80',
		user: 'root',
		password: 'Qihong38752673',
		database: 'saoyisao'
	});
	db.connect(handleError);
	db.on('error', handleError);
}



// var connection = mysql.createConnection({
// 	host: '39.106.140.80',
// 	user: 'root',
// 	password: 'Qihong38752673',
// 	database: 'saoyisao'
// });

//执行创建连接 
// connection.connect();

var db;
connect();

router.post('/', bodyParser.json(), function(req, res, next) {


	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	var sql = "SELECT * FROM `saotoken` WHERE uuid='" + req.body.uuid + "'";

	db.query(sql, function(err, result) {

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