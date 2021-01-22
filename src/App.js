import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";

function App() {
  return (
    <>
      <Router>
        <Featured path="/" />
        <Categories path="/categories" />
        <Playlists path="/playlists" />
        <Player path="/playlists/player" />
      </Router>
    </>
  );
}

export default App;