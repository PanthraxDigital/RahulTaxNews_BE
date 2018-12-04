var keystone = require('keystone');

var menuCategory = new keystone.List('MenuCategory', {
	map: { name: 'menu' },
});

menuCategory.add({
	menu: {
		type: String,
		required: true,
		initial: true,
		index: true,
	},
});

menuCategory.defaultColumns = 'menu';
menuCategory.register();
