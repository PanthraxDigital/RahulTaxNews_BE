var keystone = require('keystone');
var Types = keystone.Field.Types;

var topStories = new keystone.List('Articles');

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
		publicPath: '/public/uploads/files', // path where files will be served
	},
});

topStories.add({
	category: {
		type: Types.Select,
		required: true,
		initial: true,
		options: [
			{ value: '1', label: 'TopStories' },
			{ value: '2', label: 'IncomeTax' },
			{ value: '3', label: 'GST' },
			{ value: '4', label: 'VAT' },
			{ value: '5', label: 'Excise' },
			{ value: '6', label: 'Custom' },
			{ value: '7', label: 'IndirectTax Others' },
			{ value: '8', label: 'NBFC/RBI' },
			{ value: '9', label: 'SEBI' },
			{ value: '10', label: 'Finance ACT & Budget' },
			{ value: '11', label: 'Company Law' },
			{ value: '12', label: 'More Others' },
		],
	},
	title: { type: String, require: true, index: true, initial: true },
	subTitle: { type: String, require: true },
	description: { type: Types.Markdown, height: 500, require: true },
	link: { type: Types.Text, require: false },
	image: { type: Types.File, storage: myStorage, require: false },
	articleDate: {
		type: Types.Datetime,
		require: false,
		default: Date.now,
	},
	author: { type: Types.Relationship, ref: 'User', require: true },
});

topStories.defaultColumns = 'category,title,articleDate,author';
topStories.register();
/* NOTE : We will go with Single collection as :
- we have similar fields
- ease the Search Functionality, which is the major feature
*/
