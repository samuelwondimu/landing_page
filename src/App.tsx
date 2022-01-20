import { CssBaseline } from "@mui/material";
import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StandOut from "./components/StandOut";
import Testomnial from "./components/Testominal";
import TransformYourBrand from "./components/TransformYourBrand";
import Works from "./components/Works";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Hero />
      <TransformYourBrand />
      <StandOut />
      <Works />
      <Testomnial />
      <Gallery />
      <Footer />
    </Fragment>
  );
}
export default App;
