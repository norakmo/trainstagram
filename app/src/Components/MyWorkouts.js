import React from "react";
import './MyWorkouts.css';
import List from "@mui/material/List"
import WorkoutDisplay from "./WorkoutDisplay";
import FeedItem from "./FeedItem";
import "./Feed.css";
import getSessions from "../handles/handleGetSessions";
import { getCurrentUser } from "./Auth";



export default class MyWorkouts extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            sessions: "empty"
        }
        getCurrentUser().then((user)=>{
            getSessions(user).then((sessions)=>{
                console.log(sessions);
                this.setState({
                    sessions: sessions
                })
            })
        })
    }

   

    render(){
        return(
            <div class="FeedContainer">
                <div class="Feed">
                        {
                        this.state.sessions === "empty" ?
                        <p>Loading</p>
                        :
                        this.state.sessions.map((session)=>(
                            <FeedItem props={{sessionData: session}}/>
                        ))
                        }
    
                </div>
            </div>
        )
    }
}