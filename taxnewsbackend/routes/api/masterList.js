var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getArticleList = function (req, res) {
	articleList.model
		.find({ category: req.params.category })
		.sort('-articleDate')
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select('_id title subTitle articleDate author image')
		.limit(20)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};

exports.getNextArticleList = (req, res) => {
	articleList.model
		.find({ category: req.params.category })
		.where('articleDate')
		.lt(req.params.lastArticleDate)
		.limit(20)
		.sort('-articleDate')
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select('_id title subTitle articleDate author image')
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};
