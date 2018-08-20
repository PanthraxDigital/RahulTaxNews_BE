var keystone = require('keystone');
var incomeTaxList = keystone.list('IncomeTax');

exports.getIncomeTax = function (req, res) {
	incomeTaxList.model.find(function (err, data) {
		if (err) return res.json({ err: err });

		res.json({
			topStories: data,
		});
	}).select('_id title subtitle');
};
