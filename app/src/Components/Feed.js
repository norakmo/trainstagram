import React from "react";
import Collapsible from "react-collapsible";
import './Feed.css';
import FeedItem from './FeedItem';
import { Card } from "@mui/material";
import handleGetTrainingSessions from "../handles/handleGetTrainingSessions";
import { getCurrentUser } from "./Auth";

export default class Feed extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sessions: "empty"
        }
    }

    componentDidMount(){
        getCurrentUser().then((user)=>{
            const TrainingSessions = handleGetTrainingSessions(user.email);
            TrainingSessions.then((Sessions)=>{
                this.setState({
                    sessions: Sessions
                });
                console.log(this.state.Sessions);
            })
        })
    }

    render(){
        if(!(this.state.sessions === "empty")){
            this.state.sessions.forEach((e)=>{
                console.log(e);
            })
        }
        return(
            <div class="FeedContainer">
                <div class="Feed">
                        {
                        this.state.sessions === "empty" ?
                        <p>Loading</p>
                        :
                        this.state.sessions?.map((session)=>(
                            <FeedItem props={{sessionData: session}}/>
                        ))
                        }
    
                </div>
            </div>
        )
    }
}