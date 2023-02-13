import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MenuBar from './Components/MenuBar';
import Feed from './Components/Feed';
import GroupBar from './Components/GroupBar';
import MyWorkouts from './Components/MyWorkouts';
import ProfilePage from './Components/ProfilePage';

 
function App() {
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
 
  return (
  <div>
            <GroupBar></GroupBar>
            <Feed></Feed>
            {/* <ProfilePage></ProfilePage> */}
            {/* <MyWorkouts></MyWorkouts> */}
            <MenuBar></MenuBar>
        </div>

<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Router>
  );
}

export default App;
