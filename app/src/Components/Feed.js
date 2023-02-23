import React from "react";
import Collapsible from "react-collapsible";
import './Feed.css';
import FeedItem from './FeedItem';
import { Card } from "@mui/material";
import handleGetTrainingSessions from "../handles/handleGetTrainingSessions";

export default class Feed extends React.Component{


    componentDidMount(){
        const TrainingSessions = handleGetTrainingSessions();
        TrainingSessions.then((Sessions)=>{
            this.setState({
                sessions: Sessions
            })
        })
    }

    render(){
        return(
            <div class="FeedContainer">
                <div class="Feed">
                        {
                        this.state.sessions?.map((session)=>(
                            <FeedItem props={{sessionData: session}}/>
                        ))
                        }
    
                </div>
            </div>
        )
    }
}