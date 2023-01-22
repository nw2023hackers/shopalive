import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const API_URL = 'https://api-sandbox-mumbai.lens.dev';

export const client = new ApolloClient({
	uri: API_URL,
	cache: new InMemoryCache(),
});

export const challenge = gql`
	query Challenge($address: EthereumAddress!) {
		challenge(request: { address: $address }) {
			text
		}
	}
`;

export const authenticate = gql`
	mutation Authenticate($address: EthereumAddress!, $signature: Signature!) {
		authenticate(request: { address: $address, signature: $signature }) {
			accessToken
			refreshToken
		}
	}
`;

export const createPost = gql`
	mutation CreatePostTypedData {
		createPostTypedData(
			request: {
				profileId: "0x03"
				contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl"
				collectModule: { freeCollectModule: { followerOnly: false } }
				referenceModule: { followerOnlyReferenceModule: false }
			}
		) {
			id
			expiresAt
			typedData {
				types {
					PostWithSig {
						name
						type
					}
				}
				domain {
					name
					chainId
					version
					verifyingContract
				}
				value {
					nonce
					deadline
					profileId
					contentURI
					collectModule
					collectModuleInitData
					referenceModule
					referenceModuleInitData
				}
			}
		}
	}
`;
