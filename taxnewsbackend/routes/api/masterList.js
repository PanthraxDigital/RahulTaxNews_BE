var keystone = require('keystone');
var articleList = keystone.list('Articles');
var commonUtility = require('../../utility/common');

exports.getArticleList = function (req, res) {
	articleList.model
		// .find({ category: req.params.category })
		.find({
			categories: {
				$in: [commonUtility.getMenuMappingDev(req.params.category)],
			},
		})
		.sort('-articleDate')
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select(
			'_id title subTitle articleDate author categories uploadImage imageLink'
		)
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
		.find({
			categories: {
				$in: [commonUtility.getMenuMappingDev(req.params.category)],
			},
		})
		.where('articleDate')
		.lt(req.params.lastArticleDate)
		.limit(20)
		.sort('-articleDate')
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select(
			'_id title subTitle articleDate author categories uploadImage imageLink'
		)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};
