var keystone = require('keystone');
var Types = keystone.Field.Types;

let emailSubscriberList = new keystone.List('EmailSubscribers');

emailSubscriberList.add({
	email: { type: Types.Email, unique: true, required: true, initial: false },
	createdOn: { type: Date, default: Date.now },
});

emailSubscriberList.defaultSort = '-createdOn';
emailSubscriberList.defaultColumns = 'emailId, createdOn';
emailSubscriberList.register();
