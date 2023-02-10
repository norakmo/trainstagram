import "./App.css";
/* import handleSubmit from "./handles/handlesubmit";*/
import { useRef } from "react";
import Register from "./Components/Register";

function App() {
  /* const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  }; */
  return (
    <div>
      <Register></Register>
    </div>
  );
}

export default App;
