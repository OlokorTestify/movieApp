import React from "react";

import IsNotLoggedIn from "./isNotLoggedIn";
import "./index.scss";

const navBar = () => {
  return (
    <>
      <section>
        <header className="header">
          <div>
            <p>iStream</p>
          </div>
          <IsNotLoggedIn />
        </header>
      </section>
    </>
  );
};

export default navBar;
