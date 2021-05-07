import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";
// import Examples from "./components/Examples";
import NavBar from "./components/NavBar";

const Examples = lazy(() => import("./components/Examples"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>loading route ...</h1>}>
        <Router>
          <Examples path="/examples" />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
