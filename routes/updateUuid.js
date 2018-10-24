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
	//SQL语句
	// var sql = "INSERT INTO `saoyisao`.`saotoken` ( `uuid`) VALUES ('" + req.body.uuid + "')";

	//UPDATE table_name SET field1=new-value1, field2=new-value2

	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 

	jwt.verify(auth, JWT_PASSWORD, (err, data) => {
		if (err) {
			return res.status(401).json({
				status: false,
				msg: -1
			})
		} else {
			res.json({
				"status": true,
				"msg": "返回成功",
				"data": {
					token: data
				}
			})
		}



	});


	var sql = "update `saoyisao`.`saotoken` set token='" + req.body.token + "' where uuid='" + req.body.uuid + "'";

	connection.query(sql, function(err, result) {
		if (err == null) {
			res.json({
				status: true,
				msg: "执行成功"
			})
		} else {
			res.json({
				status: false,
				msg: "执行失败"
			})
		}

		// console.log(result);
	});

});

module.exports = router;