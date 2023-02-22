import React from "react";
import Collapsible from 'react-collapsible';
import {Card} from '@mui/material';
import "./Cardio.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



export default class Cardio extends React.Component {

    constructor(type, distance, time) {
        super();
        this.type = type;
        this.distance = distance;
        this.time = time;
        this.rows = [];
    }

    handleAddRow = () => {
        if (!this.distance || !this.time) {
            return;
        }
        const newRow = { id: this.rows.length + 1, distance: this.distance + 'km', time: this.time + 'min' };
        this.rows.push(newRow);
        this.distance = '';
        this.time = '';
        this.forceUpdate();
    };

    handleDeleteRow = (id) => {
        this.rows = this.rows.filter(row => row.id !== id);
        this.forceUpdate();
    }

    cardioExercises = [];

    setDistance(distance) {
        if (!distance){
            return;
        }
        this.distance = distance;
    };

    setTime(time) {
        if(!time){
            return;
        }
        this.time = time;
    };

    setType(type) {
        this.type = type;
    }



    render () {
        return (
            <div className="cardio_main">
                <div className="cardio_wrapper">
                    <h1 className="cardio_title">CARDIO</h1>
                        <ul className="list">
                            <li>
                                <div className="cardio_container">
                                <Card className="cardio_card">
                                    <Collapsible trigger="Intervall" id="Intervall">
                                        <input type="text"  placeholder="distance" onChange={(event) => {this.setDistance(parseInt(event.target.value))}}></input>
                                        <input type="text" placeholder="time" onChange={(event) => {this.setTime(parseInt(event.target.value))}}></input>
                                        <button onClick={() => {this.cardioExercises.push(new Cardio(this.type, this.distance, this.time)); this.handleAddRow();}}>add</button>
                                    </Collapsible>
                                </Card>
                                </div>
                            </li>
                            <li>
                                <div className="cardio_container">
                                <Card className="cardio_card">
                                    <Collapsible trigger="Langkjøring" id="Langkjøring">
                                        <input type="text" id="distance" name="distance" placeholder="distance" onChange={(event) => {this.setDistance(parseInt(event.target.value))}}></input>
                                        <input type="text" placeholder="time" onChange={(event) => {this.setTime(parseInt(event.target.value))}}></input>
                                        <button onClick={() => {this.cardioExercises.push(new Cardio(this.type, this.distance, this.time)); this.handleAddRow();}}>add</button>
                                    </Collapsible>
                                </Card>
                                </div>
                            </li>
                        </ul>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="right">Distance</TableCell>
                                    <TableCell align="right">Tid</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.type}</TableCell>
                                    <TableCell align="right">{row.distance}</TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="center">
                                    <IconButton onClick={() => this.handleDeleteRow(row.id)}>
                                    <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <button className="cardio_shoppingCart" onClick={() => console.log(this.cardioExercises)} >ShoppingCart</button>
                    </div>
            </div>
        );
    }
}
