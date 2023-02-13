import React from "react";
import './ProfilePage.css';
import Avatar from '@mui/material/Avatar';
import PropTypes from "prop-types";
import Profilbilde from './Profilbilde.png'



export default class ProfilePage extends React.Component{

    render(){
        return(
            <div>
                <div class="TopBar">
                    <button class="EditProfileButton">
                        
                    </button>
                </div>
                <div class="ProfilePage">
                    <div class="ProfilePicture">
                        <img class="Picture" src={Profilbilde} alt="ProfilePicture"></img>
                    </div>
                    <div class="ProfileInfoBox">
                        <h1>Navn Navnesen</h1>
                        <p>Fødselsdato: {this.props.date}</p>
                        <p>Høyde: </p>
                        <p>Vekt: </p>
                        <p>Kjønn: </p>
                        <button class="MyWorkoutsButton">Mine Økter</button>
                    </div>
                </div>
            </div>
        )
    }
}