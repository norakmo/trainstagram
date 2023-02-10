import React from "react";
import './FeedItem.css';


export default class FeedItem extends React.Component{
    render(){
        return(
            <div class="FeedItem">
                <div class="FeedItemProfile">

                </div>
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