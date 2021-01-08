import React from "react";
import "./style.scss";
import image from "../../Assets/device-pile.png";

const Body = () => {
  return (
    <>
      <section className="bg-body">
        <div className="bg-container">
          <div className="bg-text">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className="bg-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="bg-container">
          <div className="bg-text">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className="bg-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="bg-container2">
          <div className="bg-text">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className="bg-image">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
