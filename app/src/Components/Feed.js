import React from "react";
import Collapsible from "react-collapsible";
import './Feed.css';
import FeedItem from './FeedItem';
import { Card } from "@mui/material";
import handleGetTrainingSessions from "../handles/handleGetTrainingSessions";
import { getCurrentUser } from "./Auth";
import GroupBar from "./GroupBar";
import handleGetSessionInGroup from "../handles/handleGetSessionInGroup"

export default class Feed extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sessions: "empty"
        }
    }
    
    componentDidMount(){
        this.loadFriendSessions();
    }

    loadFriendSessions(){
        this.setState({
            sessions: "empty",
        })
        getCurrentUser().then((user)=>{
            const TrainingSessions = handleGetTrainingSessions(user.email);
            TrainingSessions.then((Sessions)=>{
                console.log(Sessions)
                this.setState({
                    sessions: Sessions,
                },
                () =>
                {
                    console.log(this.state.sessions);
                })
            });

        })
    }

    loadGroup(name, admin){
        this.setState({
            sessions: "empty"
        },()=>{
            handleGetSessionInGroup(name).then((sessions)=>{
            
                this.setState({
                    sessions: sessions
                },()=>{
                    console.log(this.state.sessions);
                })
            })
        })
        
    }
    

    render(){
        return(
            <div className="Bar"> < GroupBar props={{parent: this}}/> 
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
            </div>
        )
    }
}