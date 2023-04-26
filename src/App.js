import React from "react";
import "./App.css";
import Footer from "./component/Footer";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Department from "./component/Department";
import Contact from "./component/Contact";
import Doctor from "./component/Doctor";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Department">
          <Department />
        </Route>
        <Route path="/Doctor">
          <Doctor />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
