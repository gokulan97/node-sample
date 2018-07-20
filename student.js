var mongoose = require('mongoose');

var schema = mongoose.Schema;

var UserSchema = new schema({
	name: String,
	rollnum: String,
	mobile: Number
});

var student = mongoose.model('user', UserSchema);

module.exports = student;