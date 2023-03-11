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



export default class WorkoutCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: [["Benk", 1, 2, 3], ["Markløft", 4, 5, 6]],
            toAddExercise: "",
            toAddWeight: null,
            toAddReps: null,
            toAddSets: null
        }
    }


    handleChangeMovement() {
    
    }

    handleUpdateToAddWeight(e){
        console.log(e);
        this.setState({
            toAddWeigth: e.target.value
        })
        console.log(this.state);
    }

    handleUpdateToAddReps(e){
        this.setState({
            toAddReps: e.target.value
        })
        console.log(this.state);
    }

    handleUpdateToAddSets(e){

        this.setState({
            toAddSets: e.target.value
        })
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <TableContainer component={Paper}>
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
                                <TableCell>
                                    <FormControl fullWidth>
                                        <InputLabel>Øvelse</InputLabel>
                                        <Select
                                            value={""}
                                            label="Age"
                                        >
                                            <MenuItem value={"Benk"}>Benk</MenuItem>
                                            <MenuItem value={"Markløft"}>Markløft</MenuItem>
                                            <MenuItem value={"Squat"}>Squat</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <TextField onChange={this.handleUpdateToAddWeight.bind(this)} label="Vekt"></TextField>
                                </TableCell>
                                <TableCell>
                                    <TextField onChange={this.handleUpdateToAddReps.bind(this)} label="reps"></TextField>
                                </TableCell>
                                <TableCell>
                                    <TextField onChange={this.handleUpdateToAddSets.bind(this)} label="sets"></TextField>
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}