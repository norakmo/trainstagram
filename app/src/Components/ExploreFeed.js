import React from "react";
import Collapsible from "react-collapsible";
import './Feed.css';
import ExploreFeedItem from './ExploreFeedItem';

export default class ExploreFeed extends React.Component{
    render(){
        return(
            <div class="FeedContainer">
                <div class="Feed">
                        <ExploreFeedItem></ExploreFeedItem> 
                        <ExploreFeedItem></ExploreFeedItem> 
                        <ExploreFeedItem></ExploreFeedItem> 
                        <ExploreFeedItem></ExploreFeedItem> 
                        <ExploreFeedItem></ExploreFeedItem> 
    
                </div>
            </div>
        )
    }
}