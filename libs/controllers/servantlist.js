var ServantList = require('../models/servantlist');

// Get all ServantList
// Sabar, Archer, Lancer, Rider, Caster, Assassin, Berserker, Avenger and Shielder
exports.getServantList = function (req, res) {
	console.log('here');
	ServantList.find({}, function(err, lists) {		
		res.json(lists);
	}).lean();
}

// Add Servant to List
exports.addNewServantList = function (req, res) {
	var servant = new ServantList();
	servant.name = req.body.name;
	servant.description = req.body.description;
	servant.icon = req.body.icon;
	servant.save(function(err, done) {
		if (err)
			res.status(400).send(err);
		if (done)
			res.json({message: 'New servant ' + servant.name + ' is added to Servant List.'});
	})
}