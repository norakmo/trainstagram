import "./App.css";
import handleSubmit from "./handles/handlesubmit";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const login = async () => {};
  const forgotPasseor = async () => {};
  const registerUser = async () => {};
  return (
    <div className="App">
      <h1>Login User</h1>
      <form>
        <input type="text" placeholder=" email or username" />
        <input type="text" placeholder=" password" />
        <button> Login</button>
        <a href="url">Forgot Password</a>
        <a href="url">Create Account</a>
      </form>
    </div>
  );
}
