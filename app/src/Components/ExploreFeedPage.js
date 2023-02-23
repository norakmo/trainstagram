import React from "react";
import Feed from './Feed';
import ExploreBar from './ExploreBar';

export default class ExploreFeed extends React.Component{
    render(){
        return(
            <div class="FeedContainer">
               <div>
                <ExploreBar/>
                <Feed/>
            </div>
            </div>
        )
    }
}