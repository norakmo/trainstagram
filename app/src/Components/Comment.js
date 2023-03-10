import React from "react";



export default class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: props.props.username,
            content: props.props.content,
        }
    }

    render(){
        return(
            <p><b>{this.state.username}</b> { this.state.content}</p>
        )
    }
}