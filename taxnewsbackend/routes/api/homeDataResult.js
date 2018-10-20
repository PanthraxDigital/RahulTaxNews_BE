var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getDataResult = function (_category) {
	return new Promise(function (resolve) {
		articleList.model
			.find({ category: _category })
			.sort({ articleDate: -1 }) // descending order
			.limit(4) // top 4 (TODO : ADS)
			.select({
				_id: 1,
				title: 1,
				subTitle: 1,
				category: 1,
				uploadImage: 1,
				articleDate: 1,
				imageLink: 1,
			})
			.exec(function (err, data) {
				if (err) return console.log('err', err);
				resolve(data);
			});
	});
};

exports.getFeedDataResult = function (_category) {
	return new Promise(function (resolve) {
		articleList.model
			.find({ category: _category, articleDate: { $eq: new Date() } })
			.sort({ articleDate: -1 }) // descending order
			.limit(4) // top 4 (TODO : ADS)
			.select({
				_id: 1,
				title: 1,
				subTitle: 1,
				category: 1,
				uploadImage: 1,
				articleDate: 1,
				imageLink: 1,
			})
			.exec(function (err, data) {
				if (err) return console.log('err', err);
				resolve(data);
			});
	});
};
