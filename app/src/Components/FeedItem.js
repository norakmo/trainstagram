import React from "react";
import './FeedItem.css';
import Avatar from "@mui/material/Avatar"
import Profilbilde from './Profilbilde.png'
import Collapsible from "react-collapsible";



export default class FeedItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: props.props.sessionData.name,
            owner: props.props.sessionData.owner,
            exercises: props.props.sessionData.exercises,

        }

        console.log(props.props.sessionData);

    }

    render(){
        return(
            <div class="FeedItem">
                <Avatar alt="Profile" src={Profilbilde}></Avatar>
                <div class="FeedItemBox">
                    <Collapsible trigger={this.state.name + "     " + this.state.owner}>
                        <ol class="ol-list">
                            {
                                this.state.exercises.map((e) =>(
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
                </div>

            </div>
        );
    }

}