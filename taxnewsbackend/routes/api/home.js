var keystone = require('keystone');
var articleList = keystone.list('Articles');

exports.getHomeDataList = function (req, res) {
	articleList.model
		.aggregate()
		.group({ _id: { category: '$category' } })
		.cursor({ batchSize: 1000 })
		.exec(function (err, data) {
			if (err) return console.log('err', err);
			console.log('data', data);
		});
};

// exports.getHomeDataList = function (req, res) {
// 	articleList.model
// 		.aggregate([
// 			{ $group: { category: '$category', total: { $sum: 1 } } },
// 		]).allowDiskUse(true).cursor({ batchSize: 1000 })
// 		.exec(function (err, data) {
// 			if (err) return res.json({ err: err });
// 			res.json({
// 				homeArticles: data,
// 			});
// 		});
// };

// articleList.model.find({})
// 		.populate('createdBy', 'name')
//		.sort({ articleDate: -1 })
// 		.select('_id category title articleDate createdBy')
// 		.exec(function (err, data) {
// 			if (err) return res.json({ err: err });

// 			res.json({
// 				homeArticles: data,
// 			});
// 		});
