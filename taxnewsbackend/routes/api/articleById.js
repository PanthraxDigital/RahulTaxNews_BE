var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getArticleById = function (req, res) {
	console.log('category ' + req.params.category);
	console.log('articleId ' + req.params.articleId);
	articleList.model
		.findOne({ _id: req.params.articleId })
		.where({ category: req.params.category })
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select('_id title subTitle articleDate author Image link description')
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};
