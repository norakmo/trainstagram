import React from "react";
import './ProfilePage.css';
import Avatar from '@mui/material/Avatar';
import PropTypes from "prop-types";
import Profilbilde from './Profilbilde.png';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField"
import handleGetProfile from "../handles/handleGetProfile";
import handleUpdateProfile from "../handles/handleUpdateProfile";
import { touchRippleClasses } from "@mui/material";
import MyWorkouts from "./MyWorkouts";



export default class ProfilePage extends React.Component {

    constructor(props) {
        console.log(props.props.userId);
        super(props);
        this.state= {
            name: "name",
            DateOfBirth: "DateOfBirth",
            height: "height",
            weight: "weight",
            gender: "gender",
            userId: props.props.userId,
            editMode: false,
            showWorkouts: false
        }
        try {
            const promise = handleGetProfile(props.props.userId);
            
            promise.then((data) => {
                this.setState({
                    name: data.name,
                    DateOfBirth: data.dateOfBirth,
                    height: data.height,
                    weight: data.weight,
                    gender: data.gender
                });
                console.log(data);
            })
        }catch(e){
            console.log("Cant load profile", e);
        }
    }

    handleEdit = () => {
        if(this.state.editMode){
            this.setState({
                name: document.getElementById("nameTextField").value,
                DateOfBirth: document.getElementById("dateOfBirthTextField").value,
                height: document.getElementById("heightTextField").value,
                weight: document.getElementById("weightTextField").value,
                gender: document.getElementById("genderTextField").value
            })

            this.setState({editMode: false});
            handleUpdateProfile(this.state);
        }else{
            this.setState({editMode: true});
        }
    }

    handleShowWorkouts = () => {
        this.setState({showWorkouts: !this.state.showWorkouts});
    }

    render() {
        return (
    
            <div>
                {
                !this.state.showWorkouts ?
                <div className="ProfilePage">
                    <div className="ProfilePicture">
                        <Avatar sx="width: 200px; height: 200px; margin: auto;" src={Profilbilde} alt="ProfilePicture" />
                    </div>
                    <div class="ProfileInfoBox">
                        <h1>{
                            this.state.editMode ?
                            <Textfield defaultValue={this.state.name} id="nameTextField"/>
                            :
                            this.state.name
                        }</h1>
                        <p>Fødselsdato: {
                            this.state.editMode ?
                            <Textfield defaultValue={this.state.DateOfBirth} id="dateOfBirthTextField"/>
                            :
                            this.state.DateOfBirth}</p>
                        <p>Høyde: {
                            this.state.editMode ?
                            <Textfield defaultValue={this.state.height} id="heightTextField"/>
                            :
                            this.state.height}</p>
                        <p>Vekt: {
                            this.state.editMode ?
                            <Textfield defaultValue={this.state.weight} id="weightTextField"/>
                            :
                            this.state.weight}</p>
                        <p>Kjønn: {
                            this.state.editMode ?
                            <Textfield defaultValue={this.state.gender} id="genderTextField"/>
                            :
                            this.state.gender}</p>
                        
                    </div>
                </div>
                :
                <MyWorkouts/>
                }
                <div className="TopBar">
                    <Button onClick={this.handleEdit}>
                        {this.state.editMode ?
                            <CheckIcon/ > :
                            <SettingsIcon />
                        }
                    </Button>
                    <Button onClick={this.handleShowWorkouts}>
                        {
                        this.state.showWorkouts ?
                            "Profile" :
                            "Mine Økter"
                        }
                        </Button>
                    
                </div>
            </div>

        )
    }
}