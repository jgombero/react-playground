import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/react";

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: hotpink;
        padding: 15px;
      `}
    >
      <Link to="/">Home</Link>
      <span role="img" aria-label="logo">
        🥸
      </span>
    </header>
  );
};

export default NavBar;
