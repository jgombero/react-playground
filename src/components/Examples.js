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
import styled from "@emotion/styled";

const Examples = () => {
  return (
    <Div>
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
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Examples;
