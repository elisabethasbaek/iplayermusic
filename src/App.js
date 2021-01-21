import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Player from "./pages/Player";

function App() {
  return (
    <>
      <Router>
        <Featured path="/" />
        <Categories path="/categories" />
        <Player path="/playlist/player" />
      </Router>
    </>
  );
}

export default App;