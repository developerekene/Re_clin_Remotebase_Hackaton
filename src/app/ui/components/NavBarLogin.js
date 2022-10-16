import React from "react";
import ImageComponent from "./ImageComponent";

const NavbarLogin = () => {
  return (
    <div className="mainDiv">
      <div className="logoDiv">
        <a href="/">
          <img className="img" src={require("../../images/logo.png")} />
          <h2>Reclin</h2>
        </a>
      </div>
      <div className="links">
        {/* <div className="mainLinks">
          <ul>
            <li>
              <a href="/aboutus">About us</a>
              <img className="img" src={require("../../images/dropdown.png")} />
            </li>
            <li>
              <a href="#">Services</a>
              <img className="img" src={require("../../images/dropdown.png")} />
            </li>
          </ul>
        </div> */}
        <div className="secondLinks">
          <ul>
            <li>
              <img className="img" src={require("../../images/global.png")} />
              <a className="en">EN</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup" className="signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
