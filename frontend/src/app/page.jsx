'use client';
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.jsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//         <div className={styles.thirteen}>
//           <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
//         </div>
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { client, challenge, authenticate } from '../../api';

export default function Home() {
	/* local state variables to hold user's address and access token */
	const [address, setAddress] = useState();
	const [token, setToken] = useState();
	useEffect(() => {
		/* when the app loads, check to see if the user has already connected their wallet */
		checkConnection();
	}, []);
	async function checkConnection() {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const accounts = await provider.listAccounts();
		if (accounts.length) {
			setAddress(accounts[0]);
		}
	}
	async function connect() {
		/* this allows the user to connect their wallet */
		const account = await window.ethereum.send('eth_requestAccounts');
		if (account.result.length) {
			setAddress(account.result[0]);
		}
	}
	async function login() {
		try {
			/* first request the challenge from the API server */
			const challengeInfo = await client.query({
				query: challenge,
				variables: { address },
			});
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			/* ask the user to sign a message with the challenge info returned from the server */
			const signature = await signer.signMessage(
				challengeInfo.data.challenge.text
			);
			/* authenticate the user */
			const authData = await client.mutate({
				mutation: authenticate,
				variables: {
					address,
					signature,
				},
			});
			/* if user authentication is successful, you will receive an accessToken and refreshToken */
			const {
				data: {
					authenticate: { accessToken },
				},
			} = authData;
			console.log({ accessToken });
			setToken(accessToken);
		} catch (err) {
			console.log('Error signing in: ', err);
		}
	}

	return (
		<div>
			{/* if the user has not yet connected their wallet, show a connect button */}
			{!address && <button onClick={connect}>Connect</button>}
			{/* if the user has connected their wallet but has not yet authenticated, show them a login button */}
			{address && !token && (
				<div onClick={login}>
					<button>Login</button>
				</div>
			)}
			{/* once the user has authenticated, show them a success message */}
			{address && token && <h2>Successfully signed in!</h2>}
		</div>
	);
}
