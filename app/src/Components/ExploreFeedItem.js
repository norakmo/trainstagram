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
                    <Collapsible trigger="Hei">
                        <ol class="ol-list">
                            <li class="list-container">
                                <b>Benk</b>
                                <p1>Vekt</p1>
                                <p1>Kg</p1>
                                <p1>Sets</p1>
                            </li>
                            <li class="list-container">
                                <b>Mark</b>
                                <p1>Vekt</p1>
                                <p1>Kg</p1>
                                <p1>Sets</p1>
                            </li>
                        </ol>
                    </Collapsible>      
                </div>

            </div>
        );
    }

}