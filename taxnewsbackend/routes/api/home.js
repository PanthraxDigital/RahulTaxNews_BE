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
		title: 'Latest Tax News',
		description: 'Brushup your day with latest tax related news',
		site_url: 'http://www.taxknowledge.in/',
		author: 'TaxKnowledge Team',
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
						title: data.title,
						description: data.subTitle,
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
