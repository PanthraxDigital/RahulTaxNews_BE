var keystone = require('keystone');
// http://0.0.0.0:4002/keystone/menu-categories
var menuCategory = new keystone.List('MenuCategory', {
	map: { name: 'menu' },
	nodelete: true,
	hidden: true,
});

menuCategory.add({
	menu: {
		type: String,
		required: true,
		initial: true,
	},
	menuId: {
		type: String,
		required: true,
		initial: true,
		index: true,
	},
});

menuCategory.defaultColumns = 'menuId, menu';
menuCategory.defaultSort = 'menuId';
menuCategory.register();
