var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getDataResult = function (_category) {
	return new Promise(function (resolve) {
		articleList.model
			.find({ category: _category })
			.sort({ articleDate: -1 }) // descending order
			.limit(3) // top 3
			.select({ _id: 1, title: 1, subTitle: 1, category: 1, image: 1 })
			.exec(function (err, data) {
				if (err) return console.log('err', err);
				resolve(data);
			});
	});
};
