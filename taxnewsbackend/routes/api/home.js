var HomeDataResult = require('./homeDataResult');
var RSSFactory = require('rss');

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
	var feed = new RSSFactory({
		title: 'Latest Tax News',
		description: 'Brushup your day with latest tax related news',
		site_url: 'http://www.taxknowledge.in/',
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
			return HomeDataResult.getDataResult(4); // VAT
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(5); // EXCISE
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(6); // Custom
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(7); // NBFC/RBI
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(8); // SEBI
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(9); // Company Law
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(11); // Finance ACT & Budget
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(12); // General Taxation
		})
		.then(function (result) {
			dataResult.push(result);
			return HomeDataResult.getDataResult(13); // More Others
		})
		.then(function (result) {
			dataResult.push(result);
			dataResult.map(dataVal =>
				dataVal.map((data, index) => {
					return feed.item({
						title: data.title,
						description: data.subTitle,
						date: data.articleDate,
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
