var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var servant = new Schema({
	_id: String,
	name: {
		english: String,
		japanese: String,
		Alias: String
	},
	idServantList: {
		type: String,
		required: true
	}
	icon: {
		type: String,
		required: true
	},
	rarity: {
		type: String,
		required: false
	},
	status: {
		hp: String,
		atk: String,
		attribute: String,
		ghp: String,
		gatk: String,
		va: String,
		illustrator: String
	},
	traits: Array,
	Ascension: [{
		n: String
		items: [{
			idItem: String,
			amount: Number
		}],
		qp: Number
	}]
});

servant.index({ name: 'text'});
module.exports = mongoose.model('Servant', servant);