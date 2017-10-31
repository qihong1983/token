var express = require('express');
var router = express.Router();


/* GET home page. */
//router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express' });
//});


router.get('/', function(req, res, next) {
	res.json({
		"status": true,
		"msg": "返回成功",
		"data": [{
			"key": 1,
			"date": "2017-05-17",
			"newUsers": "534,123",
			"activeUser": "444,123"
		}, {
			"key": 2,
			"date": "2017-05-18",
			"newUsers": "1,123",
			"activeUser": "14,123"
		}, {
			"key": 3,
			"date": "2017-05-19",
			"newUsers": "21,123",
			"activeUser": "114,123"
		}]
	});
});



module.exports = router;