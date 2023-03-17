import React from "react";
import "./ProfilePage.css";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Profilbilde from "./Profilbilde.png";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { getCurrentUser } from "./Auth";
import { auth } from "../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";
import Textfield from "@mui/material/TextField";
import handleGetProfile from "../handles/handleGetProfile";
import handleUpdateProfile from "../handles/handleUpdateProfile";
import { touchRippleClasses } from "@mui/material";
import MyWorkouts from "./MyWorkouts";
import FriendsList from "./FriendsList";
import handleGetStreak from "../handles/handleGetStreak";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name",
      DateOfBirth: "DateOfBirth",
      height: "height",
      weight: "weight",
      gender: "gender",
      userId: props.props.userId,
      editMode: false,
      showWorkouts: false,
      showFriends: false,
      streak: "empty",
      lastLoggedIn: "empty",
    };
  }

  componentDidMount() {
    getCurrentUser()
      .then((user) => {
        this.setState({ user });
        const promise = handleGetProfile(user.email, false);
        promise.then((data) => {
          this.getStreak();
          this.setState({
            name: data.name,
            DateOfBirth: data.dateOfBirth,
            height: data.height,
            weight: data.weight,
            gender: data.gender,
          });
        });
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

  handleEdit = () => {
    if (this.state.editMode) {
      this.setState({
        name: document.getElementById("nameTextField").value,
        DateOfBirth: document.getElementById("dateOfBirthTextField").value,
        height: document.getElementById("heightTextField").value,
        weight: document.getElementById("weightTextField").value,
        gender: document.getElementById("genderTextField").value,
      });

      this.setState({ editMode: false });
      handleUpdateProfile(this.state);
    } else {
      this.setState({ editMode: true });
    }
  };

  handleShowWorkouts = () => {
    this.setState({
      showWorkouts: !this.state.showWorkouts,
      showFriends: false,
    });
  };

  handleShowFriends = () => {
    this.setState({
      showFriends: !this.state.showFriends,
      showWorkouts: false,
    });
  };

  getStreak = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        const streakData = await handleGetStreak(user.email);
        this.setState({
          streak: streakData.streak,
          lastLoggedIn: new Date(streakData.lastLoggedIn).toString(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        {!(this.state.showWorkouts || this.state.showFriends) ? (
          <div className="ProfilePage">
            <div className="ProfilePicture">
              <Avatar
                sx="width: 200px; height: 200px; margin: auto;"
                src={Profilbilde}
                alt="ProfilePicture"
              />
            </div>
            <div class="ProfileInfoBox">
              <h1>
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.name}
                    id="nameTextField"
                  />
                ) : (
                  this.state.name
                )}
              </h1>
              <p>{user?.email}</p>
              <p>
                Fødselsdato:{" "}
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.DateOfBirth}
                    id="dateOfBirthTextField"
                  />
                ) : (
                  this.state.DateOfBirth
                )}
              </p>
              <p>
                Høyde:{" "}
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.height}
                    id="heightTextField"
                  />
                ) : (
                  this.state.height
                )}
              </p>
              <p>
                Vekt:{" "}
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.weight}
                    id="weightTextField"
                  />
                ) : (
                  this.state.weight
                )}
              </p>
              <p>
                Kjønn:{" "}
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.gender}
                    id="genderTextField"
                  />
                ) : (
                  this.state.gender
                )}
              </p>
              <p>
                Streak:{" "}
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.streak}
                    id="genderTextField"
                  />
                ) : (
                  this.state.streak
                )}
              </p>
              <p>
                Sist logget inn:{" "}
                {this.state.editMode ? (
                  <Textfield
                    defaultValue={this.state.lastLoggedIn}
                    id="genderTextField"
                  />
                ) : (
                  this.state.lastLoggedIn
                )}
              </p>
            </div>
          </div>
        ) : this.state.showFriends ? (
          <FriendsList props={{ email: this.state.user.email }} />
        ) : (
          <MyWorkouts />
        )}
        <div className="TopBar">
          <Button onClick={this.handleEdit}>
            {this.state.editMode ? <CheckIcon /> : <SettingsIcon />}
          </Button>
          <Button onClick={this.handleShowWorkouts}>
            {this.state.showWorkouts ? "Profile" : "Mine Økter"}
          </Button>
          <Button onClick={this.handleShowFriends}>
            {this.state.showFriends ? "Profile" : "Friends"}
          </Button>
          <Button
            onClick={() => {
              this.logOut();
              window.location.href = "/";
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
}
