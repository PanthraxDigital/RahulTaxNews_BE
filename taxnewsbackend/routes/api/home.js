let dataResult = [];
var HomeDataResult = require('./homeDataResult');

// Temporary we can hit Individual collection with Single API and then at the end would merge the result
// SINGLE API > Muitple DB call > combine result > RESPONSE
exports.getHomeDataList = function (req, res) {
	HomeDataResult.getDataResult(1)
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(2);
		}).then(function (result) {
			dataResult.push(result);
			res.json({
				homeArticles: dataResult,
			});
		})
		.catch(function (err) {
			console.log(err);
		});


};

