import React from "react";
import List from "@mui/material/List";
import handleGetFriends from "../handles/handleGetFriends";
import FriendCard from "./FriendCard";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import "./FriendList.css";
import handleUpdateFriends from "../handles/handleUpdateFriends";
import { getCurrentUser } from "./Auth";
import CheckIcon from '@mui/icons-material/Check';
import AddFriendToGroupCard from "./AddFriendToGroupCard";
import handleAddGroup from "../handles/handleAddGroup";



export default class NewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      friends: "Empty",
      members: [],
      groupName: null,
      groupOwner: null,

    };
  }


  componentDidMount(){
    getCurrentUser().then((user)=>{
      let members = this.state.members;
      if(!members.includes(user.email)){
        members.push(user.email);
      }
      this.setState({
        email: user.email,
        members: members,
      }, ()=>{
        console.log(this.state.email);
        this.getFriendList();
      })
      
      
    })
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
      console.log(this.state.friends);
    });
  }

  handleAdd(memberEmail){
    let members = this.state.members;
    if(!(members.includes(memberEmail))){
      members.push(memberEmail)
    }
    this.setState({
      members: members
    }, ()=>{
      console.log(this.state.members);
    })
  }

  handleRemove(memberEmail){
    let members = this.state.members;
    if(members.includes(memberEmail)){
      const i = members.indexOf(memberEmail);
      if (i !== -1) {
        members.splice(i, 1);
      }
    }
    this.setState({
      members: members
    }, ()=>{
      console.log(this.state.members);
    })
  }

  completeGroup(){
    console.log(this.state.groupName, this.state.members, this.state.email)
    let addGroupPromise = handleAddGroup(this.state.groupName, this.state.members, this.state.email);
    addGroupPromise.then(()=>{
      window.location.href = "/Feed";
    })
  }

  onUpdateGroupName(e){
    this.setState({
      groupName: e.target.value
    })
  }

  render() {
    return (
      <List sx="margin-top: 25px;">
      {this.state.friends === "Empty" ? (
        <p>Loading</p>
      ) : (
        this.state.friends.map((friend) => (
          <AddFriendToGroupCard
            props={{ data: friend, add: this.handleAdd, parent: this }}
          />
        ))
      )}
      <TextField label="Group Name" onChange={this.onUpdateGroupName.bind(this)}></TextField>
      <Fab
        onClick={this.completeGroup.bind(this)}
      >
        Done
      </Fab>
    </List>
  );
  }
}
