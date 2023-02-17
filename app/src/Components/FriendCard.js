import React from "react";
import Card from "@mui/material/Card"
import { Avatar } from "@mui/material";



export default class FriendCard extends React.Component{
    constructor(props){
        console.log(props.props.data.data());
        super(props);
        this.state={
            name: props.props.data.data().email,
        }
    }

    render(){
        return(
            <Card sx="margin: 5px; padding: 5px;  ">
                
                <div>
                    <div>
                        <Avatar/>
                    </div>
                    <p>
                    {this.state.name}
                    </p>
                </div>
            </Card>
        )
    }
}