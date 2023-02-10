import './App.css';
import handleSubmit from './handles/handlesubmit';
import MenuBar from './Components/MenuBar';
import Feed from './Components/Feed';
import GroupBar from './Components/GroupBar';
import MyWorkouts from './Components/MyWorkouts';
import ProfilePage from './Components/ProfilePage';
import { useRef } from 'react';

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
    );
}

export default App;