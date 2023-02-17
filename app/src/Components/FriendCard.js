import React from "react";
import Card from "@mui/material/Card"
import { Avatar } from "@mui/material";



export default class FriendCard extends React.Component{
    constructor(props){
        console.log(props.props.data.data());
        super(props);
        this.state={
            name: props.props.data.data().name,
        }
    }

    render(){
        return(
            <Card>
                <Avatar/>
                <p>
                {this.state.name}
                </p>
            </Card>
        )
    }
}