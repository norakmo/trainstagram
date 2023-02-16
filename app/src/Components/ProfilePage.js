import React from "react";
import "./ProfilePage.css";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Profilbilde from "./Profilbilde.png";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
//import { user, setUser } from "./Login";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Navn Navnesen",
      //bruker: { user },
      DateOfBirth: "01.01.01",
      height: 180,
      weight: 80,
      gender: "Male",
    };
  }

  render() {
    //let user = user;
    return (
      <div>
        <div class="ProfilePage">
          <div class="ProfilePicture">
            <Avatar
              sx="width: 200px; height: 200px; margin: auto;"
              src={Profilbilde}
              alt="ProfilePicture"
            />
          </div>
          <div class="ProfileInfoBox">
            <h1>{this.state.name}</h1>
            <p>Bruker: {this.state.bruker}</p>
            <p>Fødselsdato: {this.state.DateOfBirth}</p>
            <p>Høyde: {this.state.height}</p>
            <p>Vekt: {this.state.weight}</p>
            <p>Kjønn: {this.state.gender}</p>
            <Button
              variant="contained"
              onClick={() => {
                this.setState({ name: "Bror" });
              }}
            >
              Mine Økter
            </Button>
          </div>
        </div>
        <div class="TopBar">
          <Button sx="right: 5px;">
            <SettingsIcon />
          </Button>
        </div>
      </div>
    );
  }
}
