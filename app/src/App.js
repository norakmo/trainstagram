import "./App.css";
import handleSubmit from "./handles/handlesubmit";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MenuBar from "./Components/MenuBar";
import ProfilePage from "./Components/ProfilePage";
import FeedPage from "./Components/FeedPage";
import { AuthProvider } from "react-auth-kit";
import Strength from "./Components/Strength";
import Cardio from "./Components/Cardio";
import Programs from "./Components/ExerciseProgram";
import AddProgram from "./Components/AddProgram";
import Program from "./Components/Program";

function App() {
  const dataRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/program" element={<AddProgram />} />
          <Route path="/program2" element={<Program />} />

          <Route
            path="/Strength"
            element={
              <div>
                <Strength />
              </div>
            }
          />
          <Route
            path="/Cardio"
            element={
              <div>
                <Cardio />
              </div>
            }
          />

          <Route
            path="/Profile"
            element={
              <div>
                <ProfilePage props={{ userId: "zEGkukLht4E88w8pFRrc" }} />
                <MenuBar />
              </div>
            }
          />
          <Route
            path="/Feed"
            element={
              <div>
                <FeedPage />
                <MenuBar />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
