import React from "react";
import './GroupBar.css';
import handleGroupBar from "../handles/handleGroupBar";
import Collapsible from "react-collapsible";
import { getCurrentUser } from "./Auth";

export default class GroupBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            groupsMap: new Map(),
        }; 
    }


    async componentDidMount() {
        const myUser = await getCurrentUser();
        try {
            if (myUser) {
                const groupsMap = await handleGroupBar(myUser);
                this.setState({ groupsMap });
            }
            
        } catch (error) {
            console.log(error);
        }        
    }

    render() {
        const {groupsMap} = this.state;
        
        const groups = Array.from(groupsMap.entries());


    return(
            <div class="GroupBarContainer">
                <div class="GroupBar">
                    {groups.map(([groupName, members], index) => (
                        <Collapsible key={index} className="GroupInGroupBar" trigger={
                            <div className="GroupName">{groupName}</div>}>
                            {members.map((member, i) => (
                            <div className="MembersInGroup" key={i}> {member.Email} </div>))}
                        </Collapsible>
                    ))}
                </div>
            </div>
        );
    }
}
