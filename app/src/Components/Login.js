import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import "./Login_Register.css";

function LogIn() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const logInUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="main">
      <div className="wrapper">
        <h1 className="product_title">Trainstagram</h1>
        <h1 className="title">Login to account</h1>
        <div className="container_form">
          <form>
            <div className="field">
              <input
                placeholder="Email"
                onChange={(event) => {
                  setLogInEmail(event.target.value);
                }}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setLogInPassword(event.target.value);
                }}
              />
            </div>
            <button className="btn" onClick={logInUser}>
              Login
            </button>
            <div className="link">
              Not signed up?
              <a href="/Register">Create an account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
