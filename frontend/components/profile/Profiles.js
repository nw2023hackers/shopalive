'use client';
import React from 'react';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';

const ProfileGrid = styled.div`
	display: flex;
	flex-direction: row;
	align-items: centre;
	justify-content: space-between;
	padding: 10px 10px;
`;

function Profiles() {
	return (
		<ProfileGrid>
			<ProfilePicture icon="/profile.png" text="Monkey" href="" />
			<ProfilePicture icon="/profile.png" text="Monkey" href="" />
			<ProfilePicture icon="/profile.png" text="Monkey" href="" />
			<ProfilePicture icon="/profile.png" text="Monkey" href="" />
		</ProfileGrid>
	);
}

export default Profiles;
