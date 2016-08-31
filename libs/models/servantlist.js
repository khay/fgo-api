var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var servantlist = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
	icon: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('ServantList', servantlist);