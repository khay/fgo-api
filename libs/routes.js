var express = require('express');
var servantlist = require('./controllers/servantlist');

var router = express.Router();

router.route('/servantlist').get(servantlist.getServantList);
router.route('/servantlist').post(servantlist.addNewServantList);

module.exports = function (app) {
	app.use('/api', router);
}