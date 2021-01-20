import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
      <Router>
        <Featured path="/" />
      </Router>

      <MainNav />
    </>
  );
}

export default App;