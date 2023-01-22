import "../styles/globals.css";
import Layout from "components/layout";

import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: '0e8919d3-107b-4f9d-9f19-81b81e1b7b5b' }),
});



export default function App({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout></LivepeerConfig>
  );
}
