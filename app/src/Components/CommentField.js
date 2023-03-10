import { Button, TextField } from "@mui/material";
import React from "react";


import Comment from "./Comment";
import "./CommentField.css"
import handleGetComments from "../handles/handleGetComments";


export default class CommentField extends React.Component{

    constructor(props){
        super(props);
        this.state={
        }
        const comments = handleGetComments(props.props.email, props.props.session);
        comments.then((c)=>{
            this.setState({
                users: c
            })
        })
    }


    render(){
        return(
            <div>
                <TextField/><Button variant="contained">Comment</Button>
                <ul className="commentList">
                    <li>
                        <Comment props={{username: "Bob@gmail.com", content: "this is bobs comment"}}/>
                    </li>
                </ul>
            </div>
        )
    }
}