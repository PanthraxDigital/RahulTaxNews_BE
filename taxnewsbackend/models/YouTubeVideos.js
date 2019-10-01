var keystone = require("keystone");
var Types = keystone.Field.Types;

var youtubeVideos = new keystone.List("YouTubeVideos");

youtubeVideos.add({
	VideoTitle: {
		type: String,
		required: true,
		initial: true,
	},
	EmbedVideoLink: {
		type: String,
		required: true,
		initial: true,
	}
});

youtubeVideos.defaultColumns = "VideoTitle,EmbedVideoLink";
youtubeVideos.register();
