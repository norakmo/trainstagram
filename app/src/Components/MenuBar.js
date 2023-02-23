import React from "react";
import './MenuBar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BottomNavigation from "@mui/material/BottomNavigation";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ExploreIcon from '@mui/icons-material/Explore';


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
                        navBarMap.set(1, "/ExploreFeed");
                        navBarMap.set(2, "/Strength");
                        navBarMap.set(3, "/Profile");
                        value=newValue;
                        window.location.href = navBarMap.get(newValue);
                        console.log(newValue);
                    }}
                >
                    <BottomNavigationAction label="Feed" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
                    <BottomNavigationAction label="Session" icon={<SportsGymnasticsIcon />} />
                    <BottomNavigationAction label="Profie" icon={<AccountBoxIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}