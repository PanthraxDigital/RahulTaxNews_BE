var keystone = require('keystone');
var Types = keystone.Field.Types;

var articleList = new keystone.List('Articles');

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
		publicPath: '/public/uploads/files', // path where files will be served
	},
});

articleList.add({
	category: {
		type: Types.Select,
		required: true,
		initial: true,
		options: [
			{ value: '0', label: 'From the Desk' },
			{ value: '1', label: 'TopStories' },
			{ value: '2', label: 'IncomeTax' },
			{ value: '3', label: 'GST' },
			{ value: '4', label: 'VAT' },
			{ value: '5', label: 'Excise' },
			{ value: '6', label: 'Custom' },
			{ value: '7', label: 'NBFC/RBI' },
			{ value: '8', label: 'SEBI' },
			{ value: '9', label: 'Company Law' },
			{ value: '10', label: 'Jobs' },
			{ value: '11', label: 'Finance ACT & Budget' },
			{ value: '12', label: 'General Taxation' },
			{ value: '13', label: 'More Others' },
		],
	},
	title: {
		type: String,
		required: true,
		initial: true,
	},
	subTitle: {
		type: String,
		required: false,
		initial: false,
	},
	description: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
	},
	link: { type: Types.Text, required: false },
	// image: { type: Types.File, storage: myStorage, require: false },
	image: { type: Types.CloudinaryImage },
	articleDate: {
		type: Types.Date,
		required: false,
		default: Date.now,
	},

	author: {
		type: Types.Relationship,
		ref: 'User',
		required: false,
	},
});

articleList.defaultColumns = 'category,title,articleDate,author';
articleList.autocreate = true;
articleList.perPage = 5;
articleList.register();
/* NOTE : We will go with Single collection as :
- we have similar fields
- ease the Search Functionality, which is the major feature
*/
