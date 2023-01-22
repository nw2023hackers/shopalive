// import { apolloClient } from '../apollo-client';
// import {
// 	PublicationDocument,
// 	PublicationQueryRequest,
// } from '../graphql/generated';

// import { getProfile } from 'api';

// const returnProfileInfo = async () => {
// 	const pfid = '0x633f';
// 	const result = await getProfile(pfid);
// 	console.log(result);
// 	return result;
// };

// const getPublicationRequest = async (request: PublicationQueryRequest) => {
// 	const result = await apolloClient.query({
// 		query: PublicationDocument,
// 		variables: {
// 			request,
// 		},
// 	});

// 	return result.data.publication;
// };

// export const getPublication = async () => {
// 	const result = await getPublicationRequest({ publicationId: '0x0f-0x01' });
// 	console.log('publication: result', result);

// 	return result;
// };

// (async () => {
// 	await getPublication();
// })();

'use client';
import Profiles from '../components/profile/Profiles';

export default function profiles() {
	return (
		<div>
			<Profiles />
		</div>
	);
}
