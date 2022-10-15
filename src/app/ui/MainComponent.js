import React from 'react'

//Importing Components
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Transactions from './pages/Transactions';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Exchange from './pages/Exchange';

const MainComponent = () => {

    // creating component variable
    let component;

    // switch statement to call pages and store them in the component variable
    switch(window.location.pathname){
        case '/' : component = <Home />;
        break;

        case '/login' : component = <Login />;
        break;

        case '/signup' : component = <SignUp />;
        break;

        case '/exchange' : component = <Exchange />;
        break;

        case '/transaction' : component = <Transactions />;
        break;

        case '/aboutus' : component = <Aboutus />;
        break;
    }
  return (
    <>
    <Navbar />
    {component}
    </>
  )
}

export default MainComponent