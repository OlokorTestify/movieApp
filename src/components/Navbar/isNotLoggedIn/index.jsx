import React from "react";
import "./index.scss";

const isNotLoggedIn = () => {
  return (
    <>
      <section className="nav-button">
        <div>
          <button>Sign In</button>
        </div>
      </section>
    </>
  );
};
export default isNotLoggedIn;
