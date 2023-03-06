/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="container-main rounded">
        <div class="container-second rounded d-flex justify-content-center align-items-center">
          <div className="div-welcome d-flex ">
            <h2 className="welcome rounded m-0 ml-1 mt-3 mb-3 d-inline">
              WelCome <br />
              My Rooms
            </h2>
          </div>
          <div>
            <button className="btn-signup rounded  p-1  mb-4">
              <img
                className="img-ggl rounded mx-1"
                src="https://play-lh.googleusercontent.com/RZ5luCUwc5QtJP9xDn-ZCwEutT160GVyoh5K1eu4YJ5fD7v4LP5ptVdgR9mz4Hnr7A"
                alt="..."
              />
              signup with google
            </button>
          </div>
          <form className="form ">
            <label className="label d-block">Email</label>
            <input className="input  d-block" type="mail"></input>
            <label className="label mt-1 d-block">Password</label>
            <input className="input d-block" type="password"></input>
            <a href="#">forget password</a>
			<br/>

            <button className="login-button rounded mt-2 ">login</button>
            <button className="signup-button  ml-2 rounded mt-2 ">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
