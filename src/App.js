import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Albums from "./pages/Albums";
import AlbumDetails from "./pages/AlbumDetails";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import Callback from "./pages/Callback";

function App() {
  return (
    <>
      <Router>
        <LogIn default />
        <Callback path="/callback" />
        <Welcome path="/welcome"/>
        <Albums path="/albums" />
        <AlbumDetails path="/albums/albumdetails" />
        <Playlists path="/playlists" />
        <Player path="/playlists/player" />
        <Featured path="/featured" />
        <Categories path="/categories" />
      </Router>
    </>
  );
}

export default App;