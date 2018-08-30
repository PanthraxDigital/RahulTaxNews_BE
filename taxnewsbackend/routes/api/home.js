var HomeDataResult = require('./homeDataResult');
let dataResult = [];

// Temporary we can hit Individual collection with Single API and then at the end would merge the result
// SINGLE API > Muitple DB call > combine result > RESPONSE
exports.getHomeDataList = function (req, res) {
	HomeDataResult.getDataResult(1) // Top stories
		.then(function (result) {
			dataResult.push(result);
			console.log('Top stories ' + dataResult.length);
			return HomeDataResult.getDataResult(2); // Income Tax
		})
		.then(function (result) {
			dataResult.push(result);
			console.log('IncomeTax ' + dataResult.length);
			return HomeDataResult.getDataResult(3); // GST
		})
		.then(function (result) {
			dataResult.push(result);
			console.log('GST ' + dataResult.length);
			res.json({
				homeArticles: dataResult,
			});
		})
		.catch(function (err) {
			console.log(err);
		});
};
