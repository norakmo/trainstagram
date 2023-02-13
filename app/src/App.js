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
import FeedPage from './Components/FeedPage';

 
function App() {
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
 
  return (
  <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Profile" element ={
            <div>
              <ProfilePage/>
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
  );
}

export default App;
