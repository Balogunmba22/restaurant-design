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
      {/* <SpecialMenu /> */}
      <Intro />
      <Chef />
      <Gallery />
      <Laurels />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
