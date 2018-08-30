var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getArticleList = function (req, res) {
	articleList.model
		.find({ category: req.params.category })
		.sort('articleDate')
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select('_id title subTitle articleDate author Image')
		.limit(20)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			// res.send(200);
			res.json({
				articles: data,
			});
		});
};
