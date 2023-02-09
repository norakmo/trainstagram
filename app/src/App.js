import './App.css';
import handleSubmit from './handles/handlesubmit';
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
            <div class="GroupBar">
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
                <a class="GroupItem">PlaceHolder</a>
            </div>
            <div class="FeedContainer">
                <div class="Feed">
                    <p>heiFirst</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p><p>hei</p>
                    <p>hei</p>
                    <p>hei</p>
                    <p>hei</p><p>hei</p><p>hei</p><p>hei</p><p>heiLast</p>
                </div>
            </div>
            <div class="MenubarContainer">
                <table class="Menubar">
                    <tr>
                        <th class="MenuItem"><button class="MenuItemButton"></button></th>
                        <th class="MenuItem"><button class="MenuItemButton"></button></th>
                        <th class="MenuItem"><button class="MenuItemButton"></button></th>
                        <th class="MenuItem"><button class="MenuItemButton"></button></th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default App;