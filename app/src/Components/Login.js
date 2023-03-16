import { useState, useEffect } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import "./Login_Register.css";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./Auth";
import handleStreak from "../handles/handleStreak";
import handleStreakUpdate from "../handles/handleStreakUpdate";
import handleGetStreak from "../handles/handleGetStreak";

function LogIn() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [date, setDate] = useState("");
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

  const logInUser = async (event) => {
    event.preventDefault();
    updateStreak();
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

  const updateStreak = async (event) => {
    const d1 = new Date(); // today
    const streakData = await handleGetStreak(logInEmail);
    const d2 = new Date(streakData.lastLoggedIn);

    console.log(d1.getTime() - d2.getTime() + "hva får jeg her?");
    if (d1.getDate() === d2.getDate()) {
      handleStreakUpdate(logInEmail, d1.getTime(), streakData.streak);
    } else if (
      d1.getDate() !== d2.getDate() &&
      d1.getTime() - d2.getTime() < 86400001
    ) {
      handleStreakUpdate(logInEmail, d1.getTime(), streakData.streak + 1);
    } else {
      handleStreakUpdate(logInEmail, d1.getTime(), 0);
    }
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
