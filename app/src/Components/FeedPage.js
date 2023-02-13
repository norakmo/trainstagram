import React from "react";
import Feed from './Feed';
import GroupBar from './GroupBar';


export default class FeedPage extends React.Component{
    render(){
        return(
            <div>
                <GroupBar/>
                <Feed/>
            </div>
        )
    }
}