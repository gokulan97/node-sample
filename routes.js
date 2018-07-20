var express = require('express');

var router = express.Router();
var Student = require('./student.js');

router.get('/', function(req, res){
	Student.find().then(resp => {
		res.send(resp);
	});
});

router.get('/:rollnum', function(req, res){
	var rollnum = req.params.rollnum;

	Student.find({'rollnum' : rollnum}).then(data => {
		res.send(data);
	});
});

router.post('/:name/:rollnum/:mobile', function(req, res){
	console.log(req.params);
	// res.send('success')
	var sample = Student({
		name: req.params.name,
		rollnum: req.params.rollnum,
		mobile: req.params.mobile
	});
	sample.save().then(r => {
		res.send('success')
	})
});

module.exports = router;