import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
