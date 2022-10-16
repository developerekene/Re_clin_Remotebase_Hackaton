import React from "react";

const Login = () => {
  return (
    <div>
      <div className="loginDiv">
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <input placeholder="Email"></input>
          <input placeholder="Password 8+ characters"></input>
        </div>
        <div>
          <p>Forgot Password</p>
          <button>Login</button>
        </div>
        <div className="signup">
          <p>Don't have an account?</p>
          <p>SignUp</p>
        </div>
        <div className="or">
          <img src={require('../../images/Line.png')}/>
          <p>OR</p>
          <img src={require('../../images/Line.png')}/>
        </div>

        <div className="google">
        <img src={require('../../images/google.png')} onClick={{}}/>
        <p>Contuine with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
