import React, { useState } from "react";
import { Router } from "@reach/router";
import * as Sentry from "@sentry/react";
import TokenContext from "./TokenContext";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Albums from "./pages/Albums";
import AlbumDetails from "./pages/AlbumDetails";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import Callback from "./pages/Callback";

Sentry.init({
  dsn: "https://88109078aa9d457d9ffbebed30e70136@o541232.ingest.sentry.io/5659833"
});

function App() {
  var tokenState = useState(null);

  return (
    <TokenContext.Provider value={tokenState}>
      <Router>
        {(function () {
          if (tokenState[0]?.access_token)
            return (
              <>
                <Welcome path="/welcome" />
                <Albums path="/albums" />
                <AlbumDetails path="/albums/albumdetails" />
                <Playlists path="/playlists" />
                <Playlists path="/playlists/:id" />
                <Player path="/playlists/player" />
                <Player path="/playlists/player/:id" />
                <Featured path="/featured" />
                <Featured path="/featured" />
                <Categories path="/categories" />
              </>
            );
        })()}
        <LogIn default />
        <Callback path="/callback" />
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
