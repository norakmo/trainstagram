import React from "react";
import './FeedItem.css';
import Avatar from "@mui/material/Avatar"
import Profilbilde from './Profilbilde.png'


export default class FeedItem extends React.Component{
    render(){
        return(
            <div class="FeedItem">
                <Avatar alt="Profile" src={Profilbilde}></Avatar>
                <div class="FeedItemBox">
                    <h3 class="FeedItemTitle">Title</h3>
                    <div class="FeedItemInfo">
                        <p class="FeedItemInfoItem">Name</p>
                        <p class="FeedItemInfoItem">Type</p>
                        <p class="FeedItemInfoItem">Duration</p>
                    </div>
                </div>
            </div>
        )
    }

}