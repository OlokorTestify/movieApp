import React from "react";
import Hero from "./hero";
import Navbar from "../components/Navbar";
import Body from "./body";
import "./style.scss";

const landingPage = () => {
  return (
    <>
      <section className="landing">
        <Navbar />
        <Hero />
      </section>
      <Body />
    </>
  );
};

export default landingPage;
