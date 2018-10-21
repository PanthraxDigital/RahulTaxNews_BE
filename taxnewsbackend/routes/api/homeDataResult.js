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
	let year = new Date().getFullYear();
	let month = new Date().getMonth() + 1;
	let date = new Date().getDate();
	let dateVal = new Date(year + '-' + month + '-' + date).toISOString().slice(0, 10) + ' 00:00:00.000';

	return new Promise(function (resolve) {
		articleList.model
			.find({
				category: _category,
				articleDate: {
					$eq: dateVal,
				},
			})
			.sort({ articleDate: -1 }) // descending order
			.limit(4) // top 4 (TODO : ADS)
			.select({
				_id: 1,
				title: 1,
				subTitle: 1,
				category: 1,
				articleDate: 1,
			})
			.exec(function (err, data) {
				if (err) return console.log('err', err);
				resolve(data);
			});
	});
};
