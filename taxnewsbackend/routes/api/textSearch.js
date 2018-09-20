var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.searchArticle = function (req, res) {
	console.log('search article ' + req.query.searchText);

	articleList.model
		.find({ description: req.params.searchText })
		// .where({ category: req.params.category })
		// .populate('author', 'name') // Reference to User collection, and get only the Name of the User
		// .select('_id title subTitle articleDate author image link description')
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};

// .populate('author', 'name')
// .select('_id title subTitle articleDate author image link description')
