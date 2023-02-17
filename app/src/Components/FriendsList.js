import React from "react";
import List from "@mui/material/List";
import handleGetFriends from "../handles/handleGetFriends";
import FriendCard from "./FriendCard";


export default class FriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: props.props.email,
            friends: "Empty"
        }
        const getFriends = handleGetFriends(this.state.email);
        getFriends.then((friends) => {
            this.setState({
                friends: friends
            });
        })
    }

    render(){
        console.log(this.state.friends);
        return(
            <List>
                {
                    this.state.friends === "Empty" ?
                    <p>Loading</p> :
                    this.state.friends.map((friend) => (
                        <FriendCard props={{data: friend}}/>
                    ))
                    
                }
            </List>
        )
    }
}