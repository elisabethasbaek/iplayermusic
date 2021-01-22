import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Albums from "./pages/Albums";

function App() {
  return (
    <>
      <Router>
        <Albums path="/albums" />
        <Playlists path="/playlists" />
        <Player path="/playlists/player" />
        <Featured path="/" />
        <Categories path="/categories" />
      </Router>
    </>
  );
}

export default App;