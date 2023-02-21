import { useState, useEffect } from "react";
import React from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import "./Login_Register.css";
import { useNavigate } from "react-router-dom";
import { Auth, getCurrentUser } from "./Auth";

function LogIn() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const logInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, logInEmail, logInPassword)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/Feed");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="main">
      <div className="wrapper">
        <h1 className="product_title">Trainstagram</h1>
        <h1 className="title">Login to account</h1>
        <div className="container_form">
          <form onSubmit={logInUser}>
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
            <button className="btn" type="submit">
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
