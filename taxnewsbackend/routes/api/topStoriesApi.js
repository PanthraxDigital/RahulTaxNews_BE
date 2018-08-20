var keystone = require('keystone');
var topStoriesList = keystone.list('TopStories');

exports.getTopStories = function (req, res) {
	topStoriesList.model
		.find()
		.populate('createdBy', 'name') // Reference to User collection, and get only the Name of the User
		.skip(2)
		.limit(2)
		.select('_id title subTitle articleDate createdBy')
		.exec(function (err, data) {
			if (err) return res.json({ err: err });

			res.json({
				topStories: data,
			});
		});
};
