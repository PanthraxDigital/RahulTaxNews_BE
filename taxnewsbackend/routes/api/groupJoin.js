var keystone = require('keystone');
var groupJoin = keystone.list('GroupJoin');

exports.getLinkList = function (req, res) {
	groupJoin.model.find().exec(function (err, data) {
		if (err) return res.json({ err: err });
		res.json({
			result: data,
		});
	});
};
