import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/">
          <Home />
          <About />
          <Services />
          <Gallery />
          <Team />
          <Pricing />
          <Testimonial />
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
