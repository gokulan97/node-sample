var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.send('name')
});

router.get('/:name', function(req, res){
	res.send('your name')
})

router.get('/:id', function(req, res){
	var id = req.params.id;
	console.log(req.params);
	res.send('your name'+id)
});

module.exports = router;