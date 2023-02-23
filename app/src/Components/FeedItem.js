import React from "react";
import './FeedItem.css';
import Avatar from "@mui/material/Avatar"
import Profilbilde from './Profilbilde.png'
import Collapsible from "react-collapsible";



export default class FeedItem extends React.Component{

    render(){
        return(
            <div class="FeedItem">
                <Avatar alt="Profile" src={Profilbilde}></Avatar>
                <div class="FeedItemBox">
                    <Collapsible trigger="Title">
                        <div class="button-container">
                            <button>Friends</button>
                            <button>Sessions</button>
                        </div>
                    </Collapsible>      
                </div>

            </div>
        );
    }

}