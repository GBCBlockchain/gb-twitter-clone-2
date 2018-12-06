import React from 'react';

// CSS
import "./tweet.css"
import TweetTile from "./tweetTile";

const Tweet = props => {
	return (
		<TweetTile>
			<div>
				<div className="tweet-container">
					<h4 className="name">{props.name}</h4>
					<h4 className="handle">{props.handle} - {props.date}</h4>
				</div>
				<div className="tweet-body">
					{props.body}
				</div>
			</div>
		</TweetTile>
	)
};

export default Tweet;
