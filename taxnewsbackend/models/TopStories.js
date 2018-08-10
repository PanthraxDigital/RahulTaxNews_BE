var keystone = require('keystone');
var Types = keystone.Field.Types;

var topStories = new keystone.List('TopStories');

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
		publicPath: '/public/uploads/files', // path where files will be served
	},
});

topStories.add({
	topStoriesImage: { type: Types.File, storage: myStorage },
	title: { type: String, require: true, index: true, initial: true },
	subTitle: { type: String, require: true },
	description: { type: Types.Markdown, height: 500, require: true },
	link: { type: Types.Text, require: false },
	articleDate: {
		type: Types.Datetime,
		require: false,
		default: Date.now,
	},
	createdBy: { type: Types.Relationship, ref: 'User' },
});

topStories.defaultColumns = 'title,subTitle,description,articleDate';
topStories.register();
