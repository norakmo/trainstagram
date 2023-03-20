import React from "react";
import handleGetFriends from "../handles/handleGetFriends";
import "./FriendList.css";

export default class NewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //email: props.props.email,
      friends: "Empty",
    };
    this.getFriendList();
  }


  getFriendList() {
    const getFriends = handleGetFriends(this.state.email);
              this.setState({
                friends: "Empty",
              });
              getFriends.then((friends) => {
                this.setState({
                  friends: friends,
                });
              });     
  }

  render() {
    return (
     <h1>hello</h1>   
    );
  }
}
