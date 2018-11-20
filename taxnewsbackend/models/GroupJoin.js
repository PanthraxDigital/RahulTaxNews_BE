var keystone = require('keystone');
var Types = keystone.Field.Types;

var groupJoin = new keystone.List('GroupJoin');

groupJoin.add({
	media: {
		type: Types.Select,
		required: true,
		initial: true,
		options: [
			{ value: '0', label: 'WhatsApp' },
			{ value: '1', label: 'Telegram' },
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
