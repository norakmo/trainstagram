import React from "react";
import './FeedItem.css';
import Avatar from "@mui/material/Avatar"
import Profilbilde from './Profilbilde.png'
import Collapsible from "react-collapsible";



export default class ExploreFeedItem extends React.Component{

    render(){
        return(
            <div class="FeedItem">
                <Avatar alt="Profile" src={Profilbilde}></Avatar>
                <div class="FeedItemBox">
                    <b>Friend</b>
                    <button class="button">Add</button>
                </div>

            </div>
        );
    }

}