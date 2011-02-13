$(document).ready(function() {
	twttr.anywhere(function(T) {
		var tweet_data = {};
		if ( root_tweet_id ) {
			tweet_data.in_reply_to_status_id = root_tweet_id;
		}
		T("#tweetbox").tweetBox({
			height: 100,
			width: 580,
			label: "Tweet your reaction",
			data: tweet_data
		});
	});
});
