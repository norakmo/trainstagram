import React from "react";
import Collapsible from 'react-collapsible';
import {Box, Button, Card} from '@mui/material';


export default class Cardio extends React.Component {

    constructor(type, distance, time) {
        super();
        this.type = type;
        this.distance = distance;
        this.time = time;
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
            <ul className="cardioList">
                <li>
                    <Box>
                        <Card style= {{backgroundColor:"#FCD299"}}>
                        <Collapsible trigger="Intervall" id="Intervall" onClick={() => this.setType("Intervall")}>
                        <input type="text"  placeholder="distance" onChange={(event) => {this.setDistance(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="time" onChange={(event) => {this.setTime(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.cardioExercises.push(new Cardio(this.type, this.distance, this.time))}is>add</button>
                        </Collapsible>
                        </Card>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Card style= {{backgroundColor:"#7FFFD4"}}>
                        <Collapsible trigger="Langkjøring" id="Langkjøring">
                        <input type="text" id="distance" name="distance" placeholder="distance"></input>
                        <input type="text" id="time" name="time" placeholder="time"></input>
                        <button onClick={() => console.log(this.cardioExercises)}>add</button>
                        </Collapsible>
                        </Card>
                    </Box>
                </li>
                <li>
                    <button onClick={() => console.log(this.cardioExercises)} >ShoppingCart</button>
                </li>
            </ul>
        );
    }
}
