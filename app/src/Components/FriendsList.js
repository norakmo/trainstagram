import React from "react";
import List from "@mui/material/List";
import handleGetFriends from "../handles/handleGetFriends";
import FriendCard from "./FriendCard";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab"
import Card from "@mui/material/Card"
import TextField from "@mui/material/TextField"
import "./FriendList.css";
import handleUpdateFriends from "../handles/handleUpdateFriends";


export default class FriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: props.props.email,
            friends: "Empty",
            addFriendState: false
        }
        this.getFriendList();
    }


    handleAddFriend = () => {
        this.setState({
            addFriendState: true
        })
    }

    handleAddFriendComplete = (e) =>{
        e.preventDefault();
        console.log(this.state.emailToAdd);
        handleUpdateFriends(this.state.email, false, this.state.emailToAdd);
        this.setState({
            addFriendState: false
        });
        this.getFriendList();
    }

    handleRemoveFriend = (email) =>{
        console.log(email);
        handleUpdateFriends(this.state.email, true, email);
        this.getFriendList();
        
    }

    getFriendList(){
        const getFriends = handleGetFriends(this.state.email);
        getFriends.then((friends) => {
            this.setState({
                friends: friends
            });
        })
    }

    render(){
        return(
            <List sx="margin-top: 25px;">
                {
                    this.state.friends === "Empty" ?
                    <p>Loading</p> 
                    :
                    this.state.friends.map((friend) => (
                        <FriendCard props={{data: friend, remove: this.handleRemoveFriend}}/>
                    ))
                    
                }
                {
                this.state.addFriendState ?
                    <Card sx="margin: 5px; padding: 5px;">
                        <form onSubmit={this.handleAddFriendComplete}>
                            <TextField sx="width: 80%;" helperText="email of friend to add" id="emailOfNewFriend" onChange={(e)=>{
                                this.setState({
                                    emailToAdd: e.target.value
                                });
                            }}/>
                            <Fab color="primary" aria-label="add" type="submit">
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