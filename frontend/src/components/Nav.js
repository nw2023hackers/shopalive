import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { House, Fire, MagnifyingGlass, Bag, User } from "phosphor-react";

const NavBar = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

function Nav() {
  // A nav bar with 5 buttons
  // button onClick functionality
  return (
    <NavBar>
      <NavButton text="Home">
        <House size={32} />
      </NavButton>
      <NavButton text="Feed">
        <Fire size={32} />
      </NavButton>
      <NavButton text="Search">
        <MagnifyingGlass size={32} />
      </NavButton>
      <NavButton text="Orders">
        <Bag size={32} />
      </NavButton>
      <NavButton text="Account">
        <User size={32} />
      </NavButton>
    </NavBar>
  );
}

export default Nav;
