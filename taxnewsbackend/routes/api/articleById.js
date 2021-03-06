var keystone = require('keystone');
var articleList = keystone.list('Articles');
var commonUtility = require('../../utility/common');

exports.getArticleByCategory = function (req, res) {
	articleList.model
		.find({ _id: req.params.articleId })
		.where({
			categories: {
				$in: [commonUtility.getMenuMappingProd(req.params.category)],
				//$in: [commonUtility.getMenuMappingDev(req.params.category)],
			},
		})
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select(
			'_id title subTitle articleDate author imageLink uploadImage attachmentLink description'
		)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};

exports.getArticleById = function (req, res) {
	articleList.model
		.find({ _id: req.params.articleId })
		.populate('author', 'name') // Reference to User collection, and get only the Name of the User
		.select(
			'_id title subTitle articleDate author imageLink uploadImage attachmentLink description'
		)
		.exec(function (err, data) {
			if (err) return res.json({ err: err });
			res.json({
				articles: data,
			});
		});
};
