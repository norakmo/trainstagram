import { useState } from "react";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  let navigate = useNavigate();

  return (
    <div className="Register">
      <h1>Register User</h1>
      <form>
        <input
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button
          onClick={() => {
            registerUser();
            navigate("/");
          }}
        >
          Create User
        </button>
      </form>
      <a href="/">Back to login</a>
    </div>
  );
}

export default Register;
