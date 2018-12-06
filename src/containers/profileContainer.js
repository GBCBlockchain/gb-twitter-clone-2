import React from 'react';
import ProfileTile from "../components/profileTile";

import "./profileContainer.css"

export default class ProfileContainer extends React.Component {
	state = {
		totalTweets: 31,
		following: 123,
		followers: 432,
		name: "Gregroy Markou",
		handle: "@gregthegreek"
	};

	render() {
		return (
			<ProfileTile>
				<div className="profile-container">
					<div className="profile-top">
						<div className="profile-photo"/>
						<div className="info-container">
							<h4>{this.state.name}</h4>
							<h4>{this.state.handle}</h4>
						</div>
					</div>
					<div className="profile-bottom">
						<div className="profile-stats">
							<h6>Tweets</h6>
							<h4>{this.state.totalTweets}</h4>
						</div>
						<div className="profile-stats">
							<h6>Following</h6>
							<h4>{this.state.following}</h4>
						</div>
						<div className="profile-stats">
							<h6>Followers</h6>
							<h4>{this.state.followers}</h4>
						</div>
					</div>
				</div>
			</ProfileTile>
		)
	}
}
