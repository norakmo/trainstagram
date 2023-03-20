import React from "react";
import Card from "@mui/material/Card"
import { Avatar } from "@mui/material";
import Fab from "@mui/material/Fab"
import "./AddCriendToGroupCard.css";
import Add from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';



export default class AddFriendToGroupCard extends React.Component{


    constructor(props){
        super(props);
        this.state={
            name: 
                props.props.data.data().name !== "name" ?
                props.props.data.data().name :
                props.props.data.data().email,

            add: props.props.add,
            email: props.props.data.data().email,
            parent: props.props.parent,
            added: false,
        }
    }
    handleSwitchAdded(){
        this.setState({
            added: !this.state.added
        })
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
                    <div className="addFriendToGroupButtonContainer">

                        {
                        !this.state.added ? 
                        <Fab onClick={() => {
                            this.state.parent.handleAdd(this.state.email);
                            this.handleSwitchAdded();
                            }}>

                            <Add sx="font-color=red; float: right; right: 0px;"/>
                        </Fab>
                        :
                        <Fab onClick={() => {
                            this.state.parent.handleRemove(this.state.email);
                            this.handleSwitchAdded();
                            }}>

                            <RemoveIcon sx="font-color: red; float: right; right: 0px;"/>
                        </Fab>
                        }
                    </div>

            </Card>
        )
    }
}