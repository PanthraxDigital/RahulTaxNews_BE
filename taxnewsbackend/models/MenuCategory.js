var keystone = require('keystone');

var menuCategory = new keystone.List('MenuCategory', {
	map: { name: 'menu' },
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
// menuCategory.schema.pre('save', function (next) {

// });

menuCategory.defaultColumns = 'menuId, menu';
menuCategory.defaultSort = 'menuId';
menuCategory.register();
