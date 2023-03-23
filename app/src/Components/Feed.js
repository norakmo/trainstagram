import React from "react";
import Collapsible from "react-collapsible";
import "./Feed.css";
import FeedItem from "./FeedItem";
import { Card } from "@mui/material";
import handleGetTrainingSessions from "../handles/handleGetTrainingSessions";
import { getCurrentUser } from "./Auth";
import GroupBar from "./GroupBar";
import handleGetSessionInGroup from "../handles/handleGetSessionInGroup";
import handleRemoveSessionFromGroup from "../handles/handleRemoveSessionFromGroup";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: "empty",
      isAdmin: false,
      user: null,
      group: null
    };
  }

  componentDidMount() {
    this.loadFriendSessions();
  }

  loadFriendSessions() {
    this.setState({
      sessions: "empty",
      isAdmin: false,
      group: null
    });

    getCurrentUser().then((user) => {
      const TrainingSessions = handleGetTrainingSessions(user.email);
      TrainingSessions.then((Sessions) => {
        console.log(Sessions);
        this.setState(
          {
            sessions: Sessions,
            user: user.email
          },
          () => {
            console.log(this.state.sessions);
          }
        );
      });
    });
  }

  loadGroup(name, admin) {

    console.log(admin[0]);
    console.log(this.state.user);
    this.setState(
      {
        sessions: "empty",
        isAdmin: admin[0].Email === this.state.user,
        group: name,
        admin: admin
      },
      () => {
        handleGetSessionInGroup(name).then((sessions) => {
          this.setState(
            {
              sessions: sessions,
            },
            () => {
              console.log(this.state.sessions);
              console.log(this.state.isAdmin)
            }
          );
        });
      }
    );
  }

  handleRemoveSession(sessionOwner, session){
    handleRemoveSessionFromGroup(sessionOwner, this.state.group, session).then(()=>{
      this.loadGroup(this.state.group, this.state.admin);
    })
  }

  render() {
    return (
      <div className="Bar">
        {" "}
        <GroupBar props={{ parent: this }} />
        <div class="FeedContainer">
          <div class="Feed">
            {this.state.sessions === "empty" ? (
              <p>Loading</p>
            ) : (
              this.state.sessions.map((session) => (
                <FeedItem props={{ sessionData: session , isAdmin:this.state.isAdmin, parent: this}} />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
