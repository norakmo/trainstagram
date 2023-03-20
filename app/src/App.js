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
// import ExerciseSession from "./Components/ExerciseSession";
import Strength from "./Components/Strength";
import Cardio from "./Components/Cardio";
import ExploreFeedPage from "./Components/ExploreFeedPage";
import Programs from "./Components/ExerciseProgram";
import AddProgram from "./Components/AddProgram";
import Program from "./Components/Program";
import GroupBar from "./Components/GroupBar";
// import FriendsList from "./Components/FriendsList";
import NewGroup from "./Components/NewGroup";

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

        {/* <Route
          path="/Exercise"
          element={
            <div>
              <ExerciseSession />
            </div>
          }
        /> */}
        <Route
          path="/Strength"
          element={
            <div>
              <Strength />
              <MenuBar/>
            </div>
          }
        />
        <Route
          path="/NewGroup"
          element={
            <div>
              <NewGroup />
            </div>
          }
        />
        <Route
          path="/ExploreFeed"
          element={
            <div>
              <ExploreFeedPage />
              <MenuBar/>
            </div>
          }
        />

        <Route
          path="/GroupBar"
          element={
            <div>
              <GroupBar />
            </div>
          }
        />
          
          <Route path="/Profile" element ={
            <div>
              <ProfilePage props={{userId: "zEGkukLht4E88w8pFRrc"}}/>
              <MenuBar/>
            </div>
          }/>
          <Route path="/Feed" element ={
            <div>
              <FeedPage/>
              <MenuBar/>
            </div>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
