import './App.css';
import handleSubmit from './handles/handlesubmit';
import MenuBar from './Components/MenuBar';
import Feed from './Components/Feed';
import GroupBar from './Components/GroupBar'
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
            <MenuBar></MenuBar>
        </div>
    );
}

export default App;