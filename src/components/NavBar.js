import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import colors from "../colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [goodColor, setGoodColor] = useState(true);
  const color = goodColor ? "hotpink" : "limegreen";

  return (
    <header
      onClick={() => setGoodColor(!goodColor)}
      css={css`
        background-color: ${color};
        padding: 15px;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>
        <Link
          css={css`
            padding: 15px;
          `}
          to="/"
        >
          Home
        </Link>
        <Link
          css={css`
            padding: 15px;
          `}
          to="examples"
        >
          Examples
        </Link>
      </div>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear;
          animation-iteration-count: 5;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline ${colors.dark};
          }
        `}
        role="img"
        aria-label="logo"
      >
        🥸
      </span>
    </header>
  );
};

export default NavBar;
