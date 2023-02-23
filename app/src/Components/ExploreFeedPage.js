import React from "react";
import ExploreFeed from './ExploreFeed';
import ExploreBar from './ExploreBar';

export default class ExploreFeedPage extends React.Component{
    render(){
        return(
            <div class="FeedContainer">
               <div>
                <ExploreBar/>
                <ExploreFeed/>
            </div>
            </div>
        )
    }
}