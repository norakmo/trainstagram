import { useState, useEffect } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";

function Register() {
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

  const createUser = (event) => {
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
    <div className="CreateUser">
      <h1>Create user</h1>
      <form onSubmit={createUser}>
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

        <button type="submit">Create User</button>
        <a href="/">Back to login</a>
      </form>
    </div>
  );
}

export default Register;
