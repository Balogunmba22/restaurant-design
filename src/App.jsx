import React from "react";
import "./App.css";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Hero,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
