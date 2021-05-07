import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import colors from "../colors";
import styled from "@emotion/styled";

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
      <div style={{ display: "flex" }}>
        <Div>
          <Link to="/">Home</Link>
        </Div>
        <Div>
          <Link to="examples">Examples</Link>
        </Div>
      </div>
      <Span role="img" aria-label="logo">
        🥸
      </Span>
    </header>
  );
};

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

const Div = styled.div`
  padding: 10px;
`;

const Span = styled.span`
  font-size: 60px;
  display: inline-block;
  animation: 1s ${spin} linear;
  animation-iteration-count: 5;
  &:hover {
    animation: 1s ${spin} linear infinite reverse;
    text-decoration: underline ${colors.dark};
  }
`;

export default NavBar;
