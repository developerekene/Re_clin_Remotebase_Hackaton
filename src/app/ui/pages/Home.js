import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="homeMain">
        <h2>Exchange Your Trash for Cash and</h2>
        <h2 className="colorToGreen">help us save the Enviroment</h2>

        <p>
          We recycle your trash, turn it into useful value and you get paid while
          you make your enviroment clean.
        </p>
        <button className="mainButton">
          <h4>Get Started for free</h4>
        </button>
      </div>
      <div className="homeMainTwo">
        <img className="imgOne" src={require('../../images/Polygon.png')}/>
        <img className="imgTwo" src={require('../../images/trash-bags-removebg-preview.png')}/>

      </div>
      <div></div>
    </div>
  );
};

export default Home;
