/* eslint-disable spaced-comment */
var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.searchArticle = function (req, res) {
	console.log('search article ' + req.query.searchText);

	articleList.model
		.find({ $text: { $search: req.query.searchText } })
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.populate('categories', 'menu')
		.select('_id title subTitle articleDate author categories')
		.limit(20)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				searchResult: data,
			});
		});
};


// TODO : pagination for getting next set of records
