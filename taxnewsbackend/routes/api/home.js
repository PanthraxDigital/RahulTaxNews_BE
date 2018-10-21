var HomeDataResult = require('./homeDataResult');
var RSSFactory = require('rss');
var moment = require('moment');

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

// Get Feed Data list
exports.getFeedDataList = function (req, res) {
	let dataResult = [];
	var feed = new RSSFactory({
		title: 'Latest Tax News from Taxknowledge Team',
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
						description: data.subTitle,
						date: data.articleDate,
						url: `http://www.taxknowledge.in${getArticleURL(parseInt(data.category))}/${data._id}`,
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

function getArticleURL (_index) {
	switch (_index) {
		case 0:
			return '/from-desk';
		case 1:
			return '/top-stories';
		case 2:
			return '/income-tax';
		case 3:
			return '/gst';
		case 4:
			return '/vat-cst';
		case 5:
			return '/excise';
		case 6:
			return '/custom';
		case 7:
			return '/nbfc-rbi';
		case 8:
			return '/sebi';
		case 9:
			return '/roc-company-law';
		case 10:
			return '/jobs';
		case 11:
			return '/finance-budget';
		case 12:
			return '/generalTax';
		case 13:
			return '/others';
	}
}
