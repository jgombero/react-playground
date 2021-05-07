import React from "react";
import { Router } from "@reach/router";
import Examples from "./components/Examples";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Examples path="/examples" />
      </Router>
    </>
  );
}

export default App;
