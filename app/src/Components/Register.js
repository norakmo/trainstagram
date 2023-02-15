import { useState } from "react";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";
import "./Login_Register.css";

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
    <div className="main">
      <div className="wrapper">
        <h1 className="title">Register User</h1>
        <div className="container_form">
          <form>
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
            <button
              className="btn"
              onClick={() => {
                registerUser();
                navigate("/");
              }}
            >
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
