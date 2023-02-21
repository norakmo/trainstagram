import React from "react";
import "./Strength.css";
import Collapsible from 'react-collapsible';
import { Card } from "@mui/material";



export default class Strength extends React.Component {

    constructor(type, kg, reps) {
        super();
        this.type = type;
        this.kg = kg;
        this.reps = reps;
    }

    onClick() {
        console.log(Collapsible.name)
        this.setType(Collapsible.name);
        this.strengthExercises.push(new Strength(this.type, this.kg, this.reps))
     }


    strengthExercises = [];
    //acceptedTypes = ["Benk", "Markløft", "Biceps", "Triceps", "Pushups", "Situps"];

    // addStrengthExercise(type, kg, reps, sets) {
    //     for (let i = 0; i < sets; i++) {
    //         let strength = new Strength(type, kg, reps);
    //         this.strengthExercises.push(strength);
    //     }
    // }

    // strengthEx() {
    //     return this.strengthExercises;
    // }

    

    setType(type) {
        this.type = type;
    }

    setKg(kg) {
        this.kg = kg;
    };

    setReps(reps) {
        this.reps = reps;
    };

    setSets(sets) {
        this.sets = sets;
    };

    render () {
        return (
            <ul className="list">
                <li>
                    <Card>
                        <Collapsible trigger="Benk" id="Benk" name ="Benk">
                        <input type="text" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Markløft" id="Markløft">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.strengthExercises.push(new Strength("hei", this.reps, this.sets))}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Biceps" id = "Biceps">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.strengthExercises.push(new Strength("hei", this.reps, this.sets))}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Triceps" id="Triceps">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.strengthExercises.push(new Strength("hei", this.reps, this.sets))}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Pushups" id="Pushups">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.strengthExercises.push(new Strength("hei", this.reps, this.sets))}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible  trigger="Situps" id="Situps">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.strengthExercises.push(new Strength("hei", this.reps, this.sets))}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <button onClick={() => console.log(this.strengthExercises)} >ShoppingCart</button>
                </li>
            </ul>
        );
    }
}
