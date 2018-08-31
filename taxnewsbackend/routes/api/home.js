var HomeDataResult = require('./homeDataResult');
// SINGLE API > Muitple DB call > combine result > RESPONSE
exports.getHomeDataList = function (req, res) {
	let dataResult = [];
	HomeDataResult.getDataResult(0) // From the Desk
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(1); // Top Stories
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(2); // Income Tax
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(3); // GST
		})
		.then(function (result) {
			dataResult.push(result);
			res.json({
				homeArticles: dataResult,
			});
		})
		.catch(function (err) {
			console.log(err);
		});
};
