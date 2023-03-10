import { Button, TextField } from "@mui/material";
import React from "react";


import Comment from "./Comment";
import "./CommentField.css"
import handleGetComments from "../handles/handleGetComments";
import handlePostComment from "../handles/handlePostComment";
import { getCurrentUser } from "./Auth";


export default class CommentField extends React.Component{

    constructor(props){
        super(props);
        this.state={
            commentToAdd: "",
            sessionOwner: props.props.email,
            sessionName: props.props.session,
            comments: ""
        }
        const comments = handleGetComments(this.state.sessionOwner, this.state.sessionName);
        comments.then((c)=>{
            this.setState({
                comments: c
            })
            console.log(c.length);
            c.forEach((com)=>{
                console.log(com);
            })
        })

    }

    componentDidMount(){
        getCurrentUser().then((user)=>{
            this.setState({
                email: user.email
            })
        })
    }

    onCommentChange(comment){

        this.setState({
            commentToAdd: comment.target.value,
        })
    }

    onSubmitComment(){
        handlePostComment(this.state.sessionOwner, this.state.sessionName, this.state.commentToAdd, this.state.email);
    }

    render(){
        return(
            <div>
                <TextField onChange={this.onCommentChange.bind(this)}/><Button variant="contained" onClick={this.onSubmitComment.bind(this)}>Comment</Button>
                <ul className="commentList">
                    {
                        this.state.comments !== ""?
                        this.state.comments.map((c)=>(
                            <li>
                                <Comment props={{username: c.data().commentOwner, content: c.data().content}}/>
                            </li>
                        ))
                        :
                        <div/>
                    }
                </ul>
            </div>
        )
    }
}