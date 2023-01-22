import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const API_URL = 'https://api.lens.dev';

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
