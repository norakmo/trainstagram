import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";

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
    <div className="Login">
      <h1>Login to account</h1>
      <form>
        <input
          placeholder="Email"
          onChange={(event) => {
            setLogInEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          onChange={(event) => {
            setLogInPassword(event.target.value);
          }}
        />
        <button onClick={logInUser}> Login</button>
      </form>
      <a href="/Register">Create an account</a>
    </div>
  );
}

export default LogIn;
