import React from "react";
import State from "./components/State";
import HR from "./components/HorizontalRule";
import Effect from "./components/Effect";
import Context from "./components/Context";
import Ref from "./components/Ref";
import Reducer from "./components/Reducer";
import Memo from "./components/Memo";
import Callback from "./components/Callback";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
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
    </div>
  );
}

export default App;
