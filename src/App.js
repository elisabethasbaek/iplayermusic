import React from "react";
import {Router} from "@reach/router"
import Featured from "./pages/Featured";
import MainNav from "./components/MainNav";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <Router>
        <Featured path="/" />
        <Categories path="/categories" />
      </Router>

      <MainNav />
    </>
  );
}

export default App;