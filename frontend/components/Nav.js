"use client";
import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import Link from "next/link";
import { House, Fire, MagnifyingGlass, Bag, User } from "phosphor-react";

const NavBar = styled.nav`
  display: flex;
  position: absolute;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  background: black;
  justify-content: space-around;
  height: 7vh;
  align-items: center;
`;

function Nav() {
  // A nav bar with 5 buttons
  // button onClick functionality
  return (
    <NavBar>
      <Link href="/home">
        <NavButton text="Home">
          <House size={24} />
        </NavButton>
      </Link>
      <Link href="/feed">
        <NavButton text="Feed">
          <Fire size={24} />
        </NavButton>
      </Link>
      <Link href="/search">
        <NavButton text="Search">
          <MagnifyingGlass size={24} />
        </NavButton>
      </Link>
      <Link href="/orders">
        <NavButton text="Orders">
          <Bag size={24} />
        </NavButton>
      </Link>
      <Link href="/account">
        <NavButton text="Account">
          <User size={24} />
        </NavButton>
      </Link>
    </NavBar>
  );
}

export default Nav;
