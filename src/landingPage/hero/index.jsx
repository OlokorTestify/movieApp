import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h1>
            Unlimited movies, TV <br />
            shows, and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <input type="text" placeholder="Email Address" />
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
