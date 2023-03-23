import React from "react";
import "./FeedItem.css";
import Avatar from "@mui/material/Avatar";
import Profilbilde from "./Profilbilde.png";
import Collapsible from "react-collapsible";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CommentField from "./CommentField";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getCurrentUser } from "./Auth";
import handleAddLike from "../handles/handleAddLike";
import handleGetLikes from "../handles/handleGetLikes";
import handleRemoveLike from "../handles/handleRemoveLike";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import handleGetAdmin from "../handles/handleGetAdmin";
import handleRemoveSessionFromGroup from "../handles/handleRemoveSessionFromGroup";
import GroupBar from "./GroupBar";

export default class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.setFeedState = this.setFeedState.bind(this);
    this.state = {
      name: props.props.sessionData.name,
      owner: props.props.sessionData.owner,
      exercises: props.props.sessionData.exercises,
      isCommenting: false,
      liked: false,
      likes: 0,
      feed: true,
    };

    console.log(props.props.sessionData);
  }

  setFeedState(value) {
    this.setState({ feed: value });
  }

  componentDidMount() {
    getCurrentUser().then((user) => {
      this.setState({
        user: user.email,
      });
      const likes = handleGetLikes(
        user.email,
        this.state.name,
        this.state.owner
      );
      likes.then((l) => {
        this.setState({
          liked: l[0],
          likes: l[1].length,
        });
      });
    });
  }

  onLike() {
    if (!this.state.liked) {
      handleAddLike(this.state.user, this.state.name, this.state.owner);
      this.setState({
        liked: true,
        likes: this.state.likes + 1,
      });
    } else {
      handleRemoveLike(this.state.user, this.state.name, this.state.owner);
      this.setState({
        liked: false,
        likes: this.state.likes - 1,
      });
    }
  }

  async removeSession() {
    try {
      const user = await getCurrentUser();
      if (user) {
        const isAdmin = handleGetAdmin(user);
        handleRemoveSessionFromGroup(isAdmin, user.email, "Kjørda", "tungt");
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  onComment() {
    let newState = !this.state.isCommenting;
    this.setState({
      isCommenting: newState,
    });
  }

  setStateWhenGroup(state) {
    this.setState({
      feed: state,
    });
  }

  render() {
    return (
      <div class="FeedItem">
        <Avatar alt="Profile" src={Profilbilde}></Avatar>
        <div class="FeedItemBox">
          <Collapsible trigger={this.state.name + "     " + this.state.owner}>
            <ol class="ol-list">
              {this.state.exercises.map((e) => (
                <li class="list-container">
                  <b>{e.data().Øvelse}</b>
                  <p1>Vekt: {e.data().Vekt}</p1>
                  <p1>reps: {e.data().Antall}</p1>
                  <p1>Sets: {e.data().Sett}</p1>
                </li>
              ))}
            </ol>
          </Collapsible>
          <div>
            <Button onClick={this.onComment.bind(this)}>Comments</Button>
            <Button onClick={this.onLike.bind(this)}>
              {this.state.liked ? (
                <FavoriteIcon sx="color:red" />
              ) : (
                <FavoriteIcon sx="color:grey" />
              )}
            </Button>
            {this.state.likes}
          </div>
          {this.state.isCommenting ? (
            <CommentField
              props={{ session: this.state.name, email: this.state.owner }}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="friendCardDeleteButtonContainer">
          {this.state.feed && (
            <Fab onClick={() => this.removeSession()}>
              <DeleteIcon
                sx={{ color: "black", float: "right", right: "0px" }}
              />
            </Fab>
          )}
        </div>
        {/* <GroupBar setFeedState={this.setFeedState} /> */}
      </div>
    );
  }
}
