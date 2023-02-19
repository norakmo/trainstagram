import React from "react";
import Card from "@mui/material/Card"
import { Avatar } from "@mui/material";
import Fab from "@mui/material/Fab"
import DeleteIcon from '@mui/icons-material/Delete';
import "./FriendCard.css";



export default class FriendCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: props.props.data.data().name,
            removeFriend: props.props.remove,
            email: props.props.data.data().email
        }
    }

    render(){
        return(
            <Card sx="margin: 5px; padding: 5px; display: flex: flex-direction: right;">
                    <Avatar sx="margin-right: 15px; float: left;"/>
                    <div className="friendCardNameContainer">
                        <p>
                            {this.state.name}
                        </p>
                    </div>
                    <div className="friendCardDseleteButtonContainer">
                        <Fab onClick={() => {
                            this.state.removeFriend(this.state.email);
                            }}>
                            <DeleteIcon sx="font-color=red; float: right; right: 0px;"/>
                        </Fab>
                    </div>

            </Card>
        )
    }
}