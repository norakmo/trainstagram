import { useState, useEffect } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";
import "./Login_Register.css";

function Register() {
  const [logInEmail, setRegisterEmail] = useState("");
  const [logInPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLoggedIn(true);
      }
    });
  }, []);

  const registerUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, logInEmail, logInPassword)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="main">
      <div className="wrapper">
        <h1 className="title">Register User</h1>
        <div className="container_form">
          <form onSubmit={registerUser}>
            <div className="field">
              <input
                placeholder="Email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <button className="btn" type="submit">
              Create User
            </button>
            <div className="link">
              <a href="/">Back to login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
