import { useState, useEffect } from "react";
import React from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
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

  /* const logInUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
        );
        navigate("/Feed");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }; */

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="Login">
      <h1>Login to account</h1>
      <form onSubmit={logInUser}>
        <input
          placeholder="Email"
          value={logInEmail}
          onChange={(event) => {
            setLogInEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          value={logInPassword}
          onChange={(event) => {
            setLogInPassword(event.target.value);
          }}
        />

        <button type="submit">Login</button>
      </form>
      <a href="/Register">Create an account</a>

      <h2>User logged in</h2>
      {user?.email}
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default LogIn;
