var HomeDataResult = require('./homeDataResult');
var RSS = require('rss');

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
			return HomeDataResult.getDataResult(12); // General Taxation
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

exports.getFeedDataList = function (req, res) {
	let dataResult = [];
	var feed = new RSS({
		TITLE: 'Latest Tax News',
		URL: 'http://www.taxknowledge.in/',
	});

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
			dataResult.map(dataVal =>
				dataVal.map((data, index) => {
					return feed.item({
						TITLE: data.title,
						URL: 'http://www.taxknowledge.in/',
						guid: index,
					});
				})
			);
			res.set('Content-Type', 'text/xml');
			res.send(feed.xml());
		})
		.catch(function (err) {
			console.log(err);
		});
};
