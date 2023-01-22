import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const API_URL = 'https://api-mumbai.lens.dev/';

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

// export const createPost = gql`
// 	mutation CreatePostTypedData($profileId: String!, $contentURI: String!) {
// 		createPostTypedData(
// 			request: {
// 				profileId: $profileId
// 				contentURI: $contentURI
// 				collectModule: { freeCollectModule: { followerOnly: false } }
// 				referenceModule: { followerOnlyReferenceModule: false }
// 			}
// 		) {
// 			id
// 			expiresAt
// 			typedData {
// 				types {
// 					PostWithSig {
// 						name
// 						type
// 					}
// 				}
// 				domain {
// 					name
// 					chainId
// 					version
// 					verifyingContract
// 				}
// 				value {
// 					nonce
// 					deadline
// 					profileId
// 					contentURI
// 					collectModule
// 					collectModuleInitData
// 					referenceModule
// 					referenceModuleInitData
// 				}
// 			}
// 		}
// 	}
// `;

// replaced
export const createPost = gql`
	mutation CreatePostTypedData {
		createPostTypedData(
			request: {
				profileId: "0x633f"
				contentURI: "ipfs://bafkreiai2czqcucpsb5hkwf5u2n3fgcpy2i6p2rjigo7ymhcuko4vjd454"
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

export const getProfile = gql`
	query Profile {
		profile(request: { profileId: "0x633f" }) {
			id
			name
			bio
			attributes {
				displayType
				traitType
				key
				value
			}
			followNftAddress
			metadata
			isDefault
			picture {
				... on NftImage {
					contractAddress
					tokenId
					uri
					verified
				}
				... on MediaSet {
					original {
						url
						mimeType
					}
				}
				__typename
			}
			handle
			coverPicture {
				... on NftImage {
					contractAddress
					tokenId
					uri
					verified
				}
				... on MediaSet {
					original {
						url
						mimeType
					}
				}
				__typename
			}
			ownedBy
			dispatcher {
				address
				canUseRelay
			}
			stats {
				totalFollowers
				totalFollowing
				totalPosts
				totalComments
				totalMirrors
				totalPublications
				totalCollects
			}
			followModule {
				... on FeeFollowModuleSettings {
					type
					amount {
						asset {
							symbol
							name
							decimals
							address
						}
						value
					}
					recipient
				}
				... on ProfileFollowModuleSettings {
					type
				}
				... on RevertFollowModuleSettings {
					type
				}
			}
		}
	}
`;
