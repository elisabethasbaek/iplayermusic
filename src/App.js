import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Albums from "./pages/Albums";
import AlbumDetails from "./pages/AlbumDetails";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Welcome path="/welcome"/>
        <Login path="/login" />
        <Albums path="/albums" />
        <AlbumDetails path="/albums/albumdetails" />
        <Playlists path="/playlists" />
        <Player path="/playlists/player" />
        <Featured path="/" />
        <Categories path="/categories" />
      </Router>
    </>
  );
}

export default App;