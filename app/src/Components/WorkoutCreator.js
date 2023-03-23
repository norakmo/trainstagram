import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import "./WorkoutCreator.css";
import handleStrengthExercise from "../handles/handleStrengthExercise";
import { getCurrentUser } from "./Auth";
import { Checkbox } from "@mui/material";
import handleGroupBar from "../handles/handleGroupBar";
import handleAddSessionToGroup from "../handles/handleAddSessionToGroup";



export default class WorkoutCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            toAddExercise: "",
            toAddWeight: null,
            toAddReps: null,
            toAddSets: null,
            title: "",
            addingState: false,
            groups: null,
            shareToGroup: []
        }
    }


    componentDidMount(){
        getCurrentUser().then((user)=>{
            handleGroupBar(user.email).then((groups)=>{
                this.setState({
                    groups: groups
                },()=>{
                    console.log(this.state.groups)
                })
            })
        })
    }


    handleChangeMovement(exer) {
        this.setState({
            toAddExercise: exer.target.value
        })

    }

    handleUpdateToAddWeight(c) {
        this.setState({
            toAddWeight: c.target.value
        })

    }

    handleUpdateToAddReps(c) {
        this.setState({
            toAddReps: c.target.value
        })

    }

    handleUpdateToAddSets(c) {

        this.setState({
            toAddSets: c.target.value
        })

    }

    handleAddNewExercise() {
        if (this.state.toAddExercise === "" || this.state.toAddWeight == null || this.state.toAddReps == null || this.state.toAddSets == null) {
            return;
        }
        let exercises = this.state.exercises;
        exercises.push([this.state.toAddExercise, this.state.toAddWeight, this.state.toAddReps, this.state.toAddSets]);
        this.setState({
            exercises: exercises,
            toAddExercise: "",
            toAddWeight: null,
            toAddReps: null,
            toAddSets: null
        })

        document.getElementById("WorkoutCreator-inputWeight").value = "";
        document.getElementById("WorkoutCreator-inputReps").value = "";
        document.getElementById("WorkoutCreator-inputSets").value = "";
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
        console.log(this.state);
    }

    handleSaveWorkout() {
        if (this.state.exercises.length === 0 || this.state.title === "") {
            console.log("not enough info to workout");
            return;
        }
        console.log("adding workout....");
        this.setState({
            addingState: true
        })
        this.handlePostWorkout().then(() => {
            this.setState({
                exercises: [],
                toAddExercise: "",
                toAddWeight: null,
                toAddReps: null,
                toAddSets: null,
                title: "",
                addingState: false
            })
            console.log("Workout added")
        })
    }

    handeAddSessionToGroup(group, e){
        console.log(e.target.checked);
        let groupToShareTo = this.state.shareToGroup;
        let newGroupToShareTo = [];
        if(e.target.checked === true){
            newGroupToShareTo = groupToShareTo;
            newGroupToShareTo.push(group);
        }else{
            newGroupToShareTo = groupToShareTo.filter(function(s){
                return s[0] !== group[0]
            });
        }

        this.setState({
            shareToGroup: newGroupToShareTo
        },()=>{
            console.log(this.state.shareToGroup);
        })
    }

    async handlePostWorkout() {
        const email = (await getCurrentUser()).email;
        this.state.exercises.forEach(async (exer) => {
            await handleStrengthExercise(email, exer[0], exer[1], exer[2], exer[3], this.state.title);
        })

        this.state.shareToGroup.forEach(async(group)=>{
            await handleAddSessionToGroup(group[0], this.state.title, email)
        })

    }


    render() {
        return (
            <div>
                <TableContainer component={Paper} sx="margin: 20px;">
                    <Table>
                        <TableHead>
                            <TableCell>Øvelse</TableCell>
                            <TableCell>Vekt</TableCell>
                            <TableCell>Reps</TableCell>
                            <TableCell>Sets</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.exercises.map((exercise) => (
                                    <TableRow>
                                        <TableCell>{exercise[0]}</TableCell>
                                        <TableCell>{exercise[1]}</TableCell>
                                        <TableCell>{exercise[2]}</TableCell>
                                        <TableCell>{exercise[3]}</TableCell>
                                    </TableRow>
                                ))
                            }

                            <TableRow>
                                <TableCell sx="width: 30%;">
                                    <FormControl fullWidth>
                                        <InputLabel>Øvelse</InputLabel>
                                        <Select
                                            value={this.state.toAddExercise}
                                            label="Age"
                                            onChange={this.handleChangeMovement.bind(this)}

                                        >
                                            <MenuItem value={"Benk"}>Benk</MenuItem>
                                            <MenuItem value={"Markløft"}>Markløft</MenuItem>
                                            <MenuItem value={"Squat"}>Squat</MenuItem>
                                            <MenuItem value={"Benpress"}>Benpress</MenuItem>
                                            <MenuItem value={"BicepCurl"}>BicepCurl</MenuItem>
                                            <MenuItem value={"Squat"}>Squat</MenuItem>
                                            <MenuItem value={"Squat"}>Squat</MenuItem>
                                            <MenuItem value={"Squat"}>Squat</MenuItem>
                                            <MenuItem value={"Squat"}>Squat</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <TextField onChange={this.handleUpdateToAddWeight.bind(this)} label="Vekt" id="WorkoutCreator-inputWeight"></TextField>
                                </TableCell>
                                <TableCell>
                                    <TextField onChange={this.handleUpdateToAddReps.bind(this)} label="reps" id="WorkoutCreator-inputReps"></TextField>
                                </TableCell>
                                <TableCell>
                                    <TextField onChange={this.handleUpdateToAddSets.bind(this)} label="sets" id="WorkoutCreator-inputSets"></TextField>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={this.handleAddNewExercise.bind(this)}>
                                        <CheckIcon />
                                    </Button>
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="completeWorkoutForm">
                    <p>Name your workout:</p>
                    <TextField onChange={this.handleTitleChange.bind(this)}></TextField>
                    <Button variant="contained" onClick={this.handleSaveWorkout.bind(this)}>Create workout</Button>
                    
                    {
                        this.state.addingState ?
                            <p>Loading...</p>
                            :
                            <div></div>
                    }
                </div>
                <ul className="groupList">
                    {
                        this.state.groups == null ?
                        <p>Loading groups...</p>
                        :
                        this.state.groups.map((group)=>(
                            <li>
                                <div className="groupListItem">
                                    <p>{group[0]}</p>
                                    <Checkbox onChange={(e)=>{this.handeAddSessionToGroup([group[0]], e)}}/>
                                </div>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}