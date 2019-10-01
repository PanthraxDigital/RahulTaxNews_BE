var keystone = require("keystone");
var youtubeVideo = keystone.list("YouTubeVideos");

exports.getVideoList = function(req, res) {
	youtubeVideo.model
		.find()
		.limit(3)
		.select('_id VideoTitle EmbedVideoLink')
		.exec(function(err, data) {
			if (err) return res.json({ err: err });
			res.json({
				result: data
			});
		});
};
