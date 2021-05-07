import React from "react";
import State from "./State";
import HR from "./HorizontalRule";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import Layout from "./Layout";
import ImperativeHandle from "./ImperativeHandle";
import { css } from "@emotion/react";

const Examples = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      `}
    >
      <State />
      <HR />
      <Effect />
      <HR />
      <Context />
      <HR />
      <Ref />
      <HR />
      <Reducer />
      <HR />
      <Memo />
      <HR />
      <Callback />
      <HR />
      <Layout />
      <HR />
      <ImperativeHandle />
      <HR />
    </div>
  );
};

export default Examples;
