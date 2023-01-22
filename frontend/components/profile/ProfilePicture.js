import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { getProfile, client } from '../../pages/api/api';

const returnProfileInfo = async () => {
	try {
		const result = await client.query({
			query: getProfile,
		});
		console.log(result);
		return result;
	} catch (error) {
		console.log('error', error);
	}
};

const Button = styled.button`
	border: none;
	background: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 3rem;

	font-size: 0.6rem;
`;

function ProfilePicture({ icon, text }) {
	return (
		<Button onClick={returnProfileInfo}>
			<Image src={icon} alt="" width={80} height={80} />
			{text}
		</Button>
	);
}

export default ProfilePicture;
