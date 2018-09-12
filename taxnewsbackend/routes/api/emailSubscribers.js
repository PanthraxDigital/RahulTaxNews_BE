let keystone = require('keystone');
let EmailSubscribers = keystone.list('EmailSubscribers');

exports.addNewSubscriber = function (req, res) {
	var newEmailSubscriber = new EmailSubscribers.model();
	var data = req.method === 'POST' ? req.body : req.query;
	newEmailSubscriber.getUpdateHandler(req).process(data, function (err) {
		if (err) return res.status(500).json({ error: err });

		res.status(200).json({
			message: newEmailSubscriber, // this is important
		});
	});
};
