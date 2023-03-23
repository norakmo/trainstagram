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
import GroupIcon from '@mui/icons-material/Group';
import { touchRippleClasses } from "@mui/material";



export default class GroupBar extends React.Component{

    
    constructor(props) {
        super(props);
        this.state = {
            groups: null,
            showFriends: false,
            parent: props.props.parent,
            selected: "friends"
        };
    }



    getGroup(name, admin){
        if(this.state.selected !== "friends"){
            document.getElementById(this.state.selected).style.color = "black";
        }
        console.log("getgroup")
        if(this.state.selected === name){
            this.setState({
                selected: "friends"
            })
                
            this.state.parent.loadFriendSessions();
        }else{
            this.setState({
                selected: name
            })
            this.state.parent.loadGroup(name, admin);
            document.getElementById(name).style.color = "white";
        }
    }

    handleNewGroup(){
        window.location.href = "/newGroup";
    }

    componentDidMount(){
        getCurrentUser().then((user)=>{
            handleGroupBar(user.email).then((groups)=>{
                this.setState({
                    groups: groups,
                })
            })
        })
    }

    render() {
        
        let value = "Feed";

    return(
            <div class="GroupBarContainer">
                <div class="GroupBar">
                    
                    
                    
                    {/* <BottomNavigation class ="nav"
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
                    </BottomNavigation> */}

                    <fab onClick={this.handleNewGroup} label="new group">
                        <AddCircleOutlineIcon class ="Icon"/>
                        
                    </fab>
                    {
                        this.state.groups == null ?
                        <div/>
                        :
                        this.state.groups.map((group)=>(
                            <fab onClick={()=>{this.getGroup(group[0], group[1])}} id={group[0]}>
                                <div className="groupIconContainer">
                                    <GroupIcon class="Icon"></GroupIcon>
                                    <div>{group[0]}</div>
                                </div>
                            </fab>
                        ))
                    }
                </div>
            </div>
        );
    }
}
