import React from "react";
import List from "@mui/material/List";
import handleGetFriends from "../handles/handleGetFriends";
import FriendCard from "./FriendCard";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab"
import Card from "@mui/material/Card"
import TextField from "@mui/material/TextField"
import "./FriendList.css";


export default class FriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: props.props.email,
            friends: "Empty",
            addFriendState: false
        }
        const getFriends = handleGetFriends(this.state.email);
        getFriends.then((friends) => {
            this.setState({
                friends: friends
            });
        })
    }


    handleAddFriend = () => {
        this.setState({
            addFriendState: true
        })
    }

    handleAddFriendComplete = () =>{
        const newFriend = document.getElementById("emailOfNewFriend");
        console.log(newFriend)
        this.setState({
            addFriendState: false
        })
    }

    render(){
        console.log(this.state.friends);
        return(
            <List sx="margin-top: 25px;">
                {
                    this.state.friends === "Empty" ?
                    <p>Loading</p> 
                    :
                    this.state.friends.map((friend) => (
                        <FriendCard props={{data: friend}}/>
                    ))
                    
                }
                {
                this.state.addFriendState ?
                    <Card sx="margin: 5px; padding: 5px;">
                        <form>
                            <TextField sx="width: 80%;" helperText="email of friend to add" id="emailOfNewFriend"/>
                            <Fab color="primary" aria-label="add" onClick={this.handleAddFriendComplete}>
                                <AddIcon />
                            </Fab>
                        </form>
                    </Card>

                :
                <Fab color="primary" aria-label="add" onClick={this.handleAddFriend} sx="margin: 5px;">
                    <AddIcon />
                </Fab>
                

                }
            </List>
        )
    }
}