import React from "react";
import './MyWorkouts.css';
import List from "@mui/material/List"
import WorkoutDisplay from "./WorkoutDisplay";



export default class MyWorkouts extends React.Component{
    
    

   

    render(){
        return(
            <div>
                <List sx="margin-top: 40px; text-align: center; padding-right: 5%;padding-left: 5%;">
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                    <WorkoutDisplay props={{name: "NameOfWorkout"}}/>
                </List>
            </div>
        )
    }
}