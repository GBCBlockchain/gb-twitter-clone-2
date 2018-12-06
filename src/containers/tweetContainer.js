import React from 'react';
import Tweet from "../components/tweet";
// import FakeDb from "../fakedb";

import "./tweetContianer.css"

export default class TweetContainer extends React.Component {
	state = {
		tweets: []
	};

	fetchTweets() {
		const url = `http://localhost:8080/tweets?_sort=id&_order=desc`
		fetch(url)
			.then(response => response.json())
			.then(data => data.map(tweet => {
				return {
					id: tweet["id"],
					handle: tweet["handle"],
					name: tweet["name"],
					date: tweet["date"],
					body: tweet["body"]
				}
			}))
			.then((data) => {
				this.setState({
					tweets: data
				});
			})
	}
	componentDidMount() {
		// Can perform API request here
		// this.setState({ tweets: FakeDb})
		this.fetchTweets()
	}

	renderTweets() {
		return this.state.tweets.map(tweet => {
			return <Tweet
				key={"tweet-" + tweet.id}
				name={tweet.name}
				handle={tweet.handle}
				date={tweet.date}
				body={tweet.body}
			/>
		})
	}

	render() {
		return (
			<div className="tweets-container">
				{this.renderTweets()}
			</div>
		)
	}
}
