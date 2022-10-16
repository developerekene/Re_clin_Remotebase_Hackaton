import React from "react";

const Login = () => {
  return (
    <div>
      <div className="loginDiv">
        <div>
          <h2 className="textHeader">Login</h2>
        </div>
        <div className="inputDiv">
          <input
            style={{
              width: 460,
              height: 58,
              borderRadius: 8,
              paddingLeft: 16,
              color: "rgba(51, 51, 51, 0.8)",
            }}
            placeholder="Email"
          />
        </div>
        <div className="inputDiv">
          <input
            style={{
              width: 460,
              height: 58,
              borderRadius: 8,
              paddingLeft: 16,
              color: "rgba(51, 51, 51, 0.8)",
            }}
            placeholder="Password 8+ characters"
          />
        </div>

        <div className="signupDiv">
          <p>Forgot Password</p>
          <button
            style={{
              marginTop: 24,
              width: "100%",
              height: 56,
              color: "#ffffff",
              backgroundColor: "#47c92c",
              borderWidth: 0,
              borderRadius: 10
            }}
          >
            Login
          </button>
        </div>

        <div className="signupDivTwo">
          <p>Don't have an account?</p>
          <p>SignUp</p>
        </div>
        <div className="or">
          <img src={require("../../images/Line.png")} />
          <p>OR</p>
          <img src={require("../../images/Line.png")} />
        </div>

        <div className="google">
          <img src={require("../../images/google.png")} onClick={{}} />
          <p>Contuine with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
