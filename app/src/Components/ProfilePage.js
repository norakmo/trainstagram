import React from "react";
import "./ProfilePage.css";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Profilbilde from "./Profilbilde.png";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import { getCurrentUser } from "./Auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";

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

  componentDidMount() {
    getCurrentUser()
      .then((user) => {
        this.setState({ user });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logOut = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        await auth.signOut();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { user } = this.state;

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
            <p>Bruker: {user?.email}</p>
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
          <div>
            <Button
              variant="contained"
              onClick={() => {
                this.logOut();
                window.location.href = "/";
              }}
            >
              Log ut
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
