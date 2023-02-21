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



export default class Cardio extends React.Component {

    constructor(type, distance, time) {
        super();
        this.type = type;
        this.distance = distance;
        this.time = time;
        this.exercises = [];
    }

    cardioExercises = [];
    // acceptedTypes = ["Intervall", "Langkjøring"];

    // addCardioExercise(type, distance, time) {
    //     let cardio = new Cardio(type, distance, time);
    //     this.cardioExercises.push(cardio);
    // }

    // cardioEx() {
    //     return this.cardioExercises;
    // }

    setDistance(distance) {
        this.distance = distance;
    };

    setTime(time) {
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
                                        <button onClick={() => this.cardioExercises.push(new Cardio(this.type, this.distance, this.time))}>add</button>
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
                                        <button onClick={() => this.cardioExercises.push(new Cardio(this.type, this.distance, this.time))}>add</button>
                                    </Collapsible>
                                </Card>
                                </div>
                            </li>
                        </ul>
                        <TableContainer>
                            <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Distance</TableCell>
                                    <TableCell>Tid</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Langkjøring</TableCell>
                                    <TableCell>10km</TableCell>
                                    <TableCell>40min</TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <button className="cardio_shoppingCart" onClick={() => console.log(this.cardioExercises)} >ShoppingCart</button>
                        </div>
            </div>
        );
    }
}
