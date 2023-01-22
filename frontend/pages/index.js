"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { client, challenge, authenticate, createPost } from "./api/api";
import Router from "next/router";

export default function Home() {
  /* local state variables to hold user's address and access token */
  const [address, setAddress] = useState();
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("authToken"));

    /* when the app loads, check to see if the user has already connected their wallet */
    checkConnection();
  }, []);

  async function checkConnection() {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();
    const accounts = await provider.listAccounts();
    if (accounts.length) {
      setAddress(accounts[0]);
    }
  }

  async function connect() {
    /* this allows the user to connect their wallet */
    const account = await window.ethereum.send("eth_requestAccounts");
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
      localStorage.setItem("authToken", accessToken);
    } catch (err) {
      console.log("Error signing in: ", err);
    }
  }

  function redirect() {
    const initialState = {
      access:
        typeof window !== "undefined"
          ? window.localStorage.getItem("authToken")
          : false,
      refresh:
        typeof window !== "undefined"
          ? window.localStorage.getItem("refresh")
          : false,
      isAuthenticated: null,
      user: null,
    };

    // const accessToken = localStorage.getItem("authToken");
    if (initialState.access) {
      Router.push("/welcome");
    }
  }

  async function createStreamerPost() {
    try {
      const result = await client.mutate({
        mutation: createPost,
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      console.log(result);
    } catch (err) {
      const error = err;
      console.log("Error posting stream: ", error instanceof Error);
    }
  }

  // TAKE THIS OUT LATER

  // const crypto = require('crypto')
  // function generateMockIpfsUri() {
  // 	const hash = crypto.randomBytes(32).toString('hex');
  // 	const ipfsHash = `ipfs://${hash}`;
  // 	return ipfsHash;
  // }

  // const ipfsHash = generateMockIpfsUri();

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
      {redirect()}

      {/* {address && token && (
        <div onClick={createStreamerPost}>
          <button>create stream thing</button>
        </div>
      )} */}
    </div>
  );
}
