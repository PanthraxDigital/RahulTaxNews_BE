var keystone = require('keystone');
var Types = keystone.Field.Types;

var incomeTax = new keystone.List('IncomeTax');

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
		publicPath: '/public/uploads/files', // path where files will be served
	},
});

incomeTax.add({
	title: { type: String, require: true, index: true, initial: true },
	subTitle: { type: String, require: true },
	description: { type: Types.Markdown, height: 500, require: true },
	link: { type: Types.Text, require: false },
	incomeTaxImage: { type: Types.File, storage: myStorage },
	articleDate: {
		type: Types.Datetime,
		require: false,
		default: Date.now,
	},
	createdBy: { type: Types.Relationship, ref: 'User' },
});

incomeTax.defaultColumns = 'title,subTitle,description,articleDate';
// incomeTax.register();
