import React from "react";
import './FeedItem.css';
import Avatar from "@mui/material/Avatar"
import Profilbilde from './Profilbilde.png'
import Collapsible from "react-collapsible";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CommentField from "./CommentField";


export default class FeedItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.props.sessionData.name,
            owner: props.props.sessionData.owner,
            exercises: props.props.sessionData.exercises,
            isCommenting: false,
        }

        console.log(props.props.sessionData);

    }

    onLike(){

    }


    onComment(){
        let newState = !this.state.isCommenting;
        this.setState({
            isCommenting: newState,
        })
    }

    render() {
        return (
            <div class="FeedItem">
                <Avatar alt="Profile" src={Profilbilde}></Avatar>
                <div class="FeedItemBox">
                    <Collapsible trigger={this.state.name + "     " + this.state.owner}>
                        <ol class="ol-list">
                            {
                                this.state.exercises.map((e) => (
                                    <li class="list-container">
                                        <b>{e.data().Øvelse}</b>
                                        <p1>Vekt: {e.data().Vekt}</p1>
                                        <p1>reps: {e.data().Antall}</p1>
                                        <p1>Sets: {e.data().Sett}</p1>
                                    </li>
                                ))
                            }
                        </ol>
                    </Collapsible>
                    <div>
                        <Button onClick={this.onComment.bind(this)}>Comments</Button>
                        <Button>Like</Button>
                    </div>
                    {this.state.isCommenting ?

                        <CommentField props={{session: this.state.name, email: this.state.owner}}/>

                    :
                    <div></div>
                    
                    }
                </div>

            </div>
        );
    }

}