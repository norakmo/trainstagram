import React from "react";
import './MenuBar.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default class MenuBar extends React.Component{

    render(){
        return (
            <div class="MenubarContainer">
                    <table class="Menubar">
                        <tr>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Feed"><HomeIcon sx="font-size: 300%;"/></a></th>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Feed"><HomeIcon sx="font-size: 300%;"/></a></th>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Feed"><HomeIcon sx="font-size: 300%;"/></a></th>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Profile"><AccountBoxIcon sx="font-size: 300%;"/></a></th>
                        </tr>
                    </table>
            </div>
        )
    }
}