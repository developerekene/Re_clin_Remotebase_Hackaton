import React from "react";

//Importing Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Exchange from "./pages/Exchange";
import NavbarLogin from "./components/NavBarLogin";

const MainComponent = () => {
  // creating component variable
  let component;
  let nav;

  // switch statement to call pages and store them in the component variable
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/login":
      component = <Login />;
      break;

    case "/signup":
      component = <SignUp />;
      break;

    case "/exchange":
      component = <Exchange />;
      break;

    case "/transaction":
      component = <Transactions />;
      break;

    case "/aboutus":
      component = <Aboutus />;
      break;

    default:
      break;
  }

  switch (window.location.pathname) {
    case "/":
      nav = <Navbar />;
      break;

    case "/login":
      nav = <NavbarLogin />;
      break;

      case "/signup" : nav = <NavbarLogin/>;
      break;

    default:
      break;
  }
  return (
    <>
      {nav}
      {component}
    </>
  );
};

export default MainComponent;
