import React from "react";
import './GroupBar.css';
import handleGroupBar from "../handles/handleGroupBar";
import Collapsible from "react-collapsible";
import { getCurrentUser } from "./Auth";
import BottomNavigation from "@mui/material/BottomNavigation";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FriendsList from "./FriendsList";
import GroupBarElement from "./GroupBarElement";



export default class GroupBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            showFriends: false
        }; 
    }




    handleShowFriends = () => {
        this.setState({
            showFriends: !this.state.showFriends,
        });
    }

    render() {

        let value = "Feed";

    return(
            <div class="GroupBarContainer">
                <div class="GroupBar">
                    
                    
                    <BottomNavigation class ="nav"
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            const navBarMap = new Map();
                            navBarMap.set(0, "/newgroup");
                            value=newValue;
                            window.location.href = navBarMap.get(newValue);
                            console.log(newValue);
                        }}
                    >
                    <BottomNavigationAction label="New group" icon={
                        <AddCircleOutlineIcon class ="Icon"/>} onClick={this.handleShowFriends}/>
                    </BottomNavigation>
                </div>
            </div>
        );
    }
}
