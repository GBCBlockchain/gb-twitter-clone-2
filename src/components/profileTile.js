import React from 'react';

import "./profileTile.css"

const ProfileTile = props => {
	return (
		<div className="profile-container">
			{props.children}
		</div>
	)
};

export default ProfileTile;
