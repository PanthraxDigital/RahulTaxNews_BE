var keystone = require('keystone');
var Types = keystone.Field.Types;

var groupJoin = new keystone.List('GroupJoin');

groupJoin.add({
	media: {
		type: Types.Select,
		required: true,
		initial: true,
		options: [
			{ value: 'WhatsApp', label: 'WhatsApp' },
			{ value: 'Telegram', label: 'Telegram' },
		],
	},
	link: {
		type: String,
		required: true,
		initial: true,
	},
});

groupJoin.defaultColumns = 'media,link';
groupJoin.register();
