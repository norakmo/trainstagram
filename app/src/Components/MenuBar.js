import React from "react";
import './MenuBar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default class MenuBar extends React.Component {

    

    render() {

        let value = "Feed";

        return (
            <div class="MenubarContainer">
                {/* <table class="Menubar">
                        <tr>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Feed"><HomeIcon sx="font-size: 300%;"/></a></th>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Feed"><HomeIcon sx="font-size: 300%;"/></a></th>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Feed"><HomeIcon sx="font-size: 300%;"/></a></th>
                            <th class="MenuItem"><a class="MenuItemButton" href="./Profile"><AccountBoxIcon sx="font-size: 300%;"/></a></th>
                        </tr>
                    </table> */}
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        const navBarMap = new Map();
                        navBarMap.set(0, "/Feed");
                        navBarMap.set(1, "/Feed");
                        navBarMap.set(2, "/Profile");
                        value=newValue;
                        window.location.href = navBarMap.get(newValue);
                        console.log(newValue);
                    }}
                >
                    <BottomNavigationAction label="Feed" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Stuff" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Profie" icon={<AccountBoxIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}