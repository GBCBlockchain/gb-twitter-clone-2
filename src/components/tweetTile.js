import React from 'react';

// CSS
import "./tweetTile.css";

const TweetTile = props => {
	return (
		<div className="tweet-tile-container">
			{props.children}
		</div>
	)
};

export default TweetTile;
