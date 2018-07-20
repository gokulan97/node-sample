var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.send('hello world')
});

router.get('/hello', function(req, res){
	res.send('hello')
})

router.get('/:id', function(req, res){
	var id = req.params;
	console.log(req.params);
	res.send('hello world'+req.params.id)
});

module.exports = router;