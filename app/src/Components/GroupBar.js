import React from "react";
import './GroupBar.css';
import handleGroupBar from "../handles/handleGroupBar";
import Collapsible from "react-collapsible";
import { getCurrentUser } from "./Auth";
import BottomNavigation from "@mui/material/BottomNavigation";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FriendsList from "./FriendsList";



export default class GroupBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            groupsMap: new Map(),
            showFriends: false
        }; 
    }


    async componentDidMount() {
        const myUser = await getCurrentUser();
        try {
            if (myUser) {
                const groupsMap = await handleGroupBar(myUser);
                this.setState({ groupsMap });
            }
            
        } catch (error) {
            console.log(error);
        }        
    }

    handleShowFriends = () => {
        this.setState({
            showFriends: !this.state.showFriends,
        });
    }

    render() {

        let value = "Feed";

        const {groupsMap} = this.state;
        
        const groups = Array.from(groupsMap.entries());


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
                    {groups.map(([groupName, members], index) => (
                        <Collapsible key={index} className="GroupInGroupBar" trigger={
                            <div className="GroupName">{groupName}</div>}>
                            {members.map((member, i) => (
                            <div className="MembersInGroup" key={i}> {member.Email} </div>))}
                        </Collapsible>
                    ))}
                </div>
            </div>
        );
    }
}
