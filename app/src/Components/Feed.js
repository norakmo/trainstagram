import React from "react";
import Collapsible from "react-collapsible";
import './Feed.css';
import FeedItem from './FeedItem';
import { Card } from "@mui/material";

export default class Feed extends React.Component{
    render(){
        return(
            <div class="FeedContainer">
                <div class="Feed">
                        <FeedItem></FeedItem> 
                        <FeedItem></FeedItem> 
                        <FeedItem></FeedItem> 
                        <FeedItem></FeedItem> 
    
                </div>
            </div>
        )
    }
}