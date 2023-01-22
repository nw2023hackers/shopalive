import Nav from "./Nav";

import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
