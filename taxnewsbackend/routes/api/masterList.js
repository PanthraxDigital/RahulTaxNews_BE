var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getArticleList = function (req, res) {
	articleList.model
		.find({ category: req.params.category })
		.sort('articleDate')
		.populate('createdBy', 'name') // Reference to User collection, and get only the Name of the User
		.select('_id title subTitle articleDate createdBy')
		.limit(20)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });

			res.json({
				articles: data,
			});
		});
};
