import React from "react";
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar";
import './WorkoutDisplay.css';

export default class WorkoutDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.props.name
        }
    }

    render() {
        return (
            <Paper elevation={4} sx="padding: 7px; margin: 10%;">
                <div class="WorkoutDisplayTop">
                    <Avatar sx="margin-right: 10px;"/>
                    <p>{this.state.name}</p>
                </div>
                <div>
                    In occaecat minim id magna velit ad nostrud nostrud quis. Esse culpa excepteur labore tempor proident
                </div>
            </Paper>
        )
    }
}