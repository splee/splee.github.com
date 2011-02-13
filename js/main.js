$(document).ready(function() {
	twttr.anywhere(function(T) {
		T('#twitter-login').connectButton();
		T('#twitter-follow').followButton("splee");
	});
});
