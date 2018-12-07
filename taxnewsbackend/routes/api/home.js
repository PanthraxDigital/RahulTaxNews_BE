var HomeDataResult = require('./homeDataResult');
var RSSFactory = require('rss');
var moment = require('moment');
var commonUtility = require('../../utility/common');

// SINGLE API > Muitple DB call > combine result > RESPONSE
exports.getHomeDataList = function (req, res) {
	let dataResult = [];
	HomeDataResult.getDataResult(0) // From the Desk
		.then(function (result) {
			// console.log('result ' + result);
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

// Get Feed Data list
exports.getFeedDataList = function (req, res) {
	let dataResult = [];
	var feed = new RSSFactory({
		title: 'Taxknowledge Team',
		description: 'Brushup your day with latest tax related news',
		site_url: 'http://www.taxknowledge.in/',
		pubDate: moment().format(),
	});

	HomeDataResult.getFeedDataResult(0) // From the Desk
		.then(function (result) {
			dataResult[0] = result;
			return HomeDataResult.getFeedDataResult(1); // Top Stories
		})
		.then(function (result) {
			dataResult[1] = result;
			return HomeDataResult.getFeedDataResult(2); // Income Tax
		})
		.then(function (result) {
			dataResult[2] = result;
			return HomeDataResult.getFeedDataResult(3); // GST
		})
		.then(function (result) {
			dataResult[3] = result;
			return HomeDataResult.getFeedDataResult(4); // VAT
		})
		.then(function (result) {
			dataResult[4] = result;
			return HomeDataResult.getFeedDataResult(5); // EXCISE
		})
		.then(function (result) {
			dataResult[5] = result;
			return HomeDataResult.getFeedDataResult(6); // Custom
		})
		.then(function (result) {
			dataResult[6] = result;
			return HomeDataResult.getFeedDataResult(7); // NBFC/RBI
		})
		.then(function (result) {
			dataResult[7] = result;
			return HomeDataResult.getFeedDataResult(8); // SEBI
		})
		.then(function (result) {
			dataResult[8] = result;
			return HomeDataResult.getFeedDataResult(9); // Company Law
		})
		.then(function (result) {
			dataResult[10] = result;
			return HomeDataResult.getFeedDataResult(11); // Finance ACT & Budget
		})
		.then(function (result) {
			dataResult[11] = result;
			return HomeDataResult.getFeedDataResult(12); // General Taxation
		})
		.then(function (result) {
			dataResult[12] = result;
			return HomeDataResult.getFeedDataResult(13); // More Others
		})
		.then(function (result) {
			dataResult[13] = result;
			dataResult.map(dataVal =>
				dataVal.map((data, index) => {
					return feed.item({
						title: data.title,
						description: data.subTitle.toString().substring(0, 250),
						date: data.articleDate,
						url: `http://www.taxknowledge.in${commonUtility.getArticleURL(
							parseInt(data.category)
						)}/${data._id}`,
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
