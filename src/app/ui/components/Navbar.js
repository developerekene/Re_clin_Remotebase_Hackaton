import React from "react";

const Navbar = () => {
  return (
    <div className="mainDiv">
      <div>
        <a href="/">
          <img src={require("../../images/logo.png")} />
          <h2>Reclin</h2>
        </a>
      </div>
      <div>
        <div>
          <ul>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a>EN</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
