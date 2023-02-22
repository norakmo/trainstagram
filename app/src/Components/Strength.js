import React from "react";
import { useState } from "react";
import "./Strength.css";
import Collapsible from 'react-collapsible';
import { Card } from "@mui/material";
import addStrengthExercise from "../handles/handleStrengthExercise"
import addCardioExercise from "../handles/handleCardioExercise"
import { getCurrentUser } from "./Auth";
import Cardio from "./Cardio";



export default class Strength extends React.Component {

    constructor(type, kg, reps, sets) {
        super();
        this.type = type;
        this.kg = kg;
        this.reps = reps;
        this.state = {
            name: "",
            distance: "",
            time: ""
        };
        this.sets = sets;
    }

    distance() {
        return null;
    }

    time() {
        return null;
    }

    setName(name) {
        this.setState({ name });
    }
    setDistance(distance) {
        this.setState({ distance });
    }
    setTime(time) {
        this.setState({ time });
    }

    onClick1() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Strength("Benk", this.kg, this.reps, this.sets))
                addStrengthExercise(user.email, "Benk", this.kg, this.reps, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {   
            console.log(error);
          });
     }
     onClick2() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Strength("Markløft", this.kg, this.reps, this.sets))
                addStrengthExercise(user.email, "Markløft", this.kg, this.reps, this.sets, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
     }
     onClick3() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Strength("Biceps", this.kg, this.reps, this.sets))
                addStrengthExercise(user.email, "Biceps", this.kg, this.reps, this.sets, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
     }
     onClick4() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Strength("Triceps", this.kg, this.reps, this.sets))
                addStrengthExercise(user.email, "Triceps", this.kg, this.reps, this.sets, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
     }
     onClick5() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Strength("Pushups", this.kg, this.reps, this.sets))
                addStrengthExercise(user.email, "Pushups", this.kg, this.reps, this.sets, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
     }
     onClick6() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Strength("Situps", this.kg, this.reps, this.sets))
                addStrengthExercise(user.email, "Situps", this.kg, this.reps, this.sets, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
     }
     onClick7() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Cardio("Intervall", this.distance, this.time));
                addCardioExercise(user.email, "Intervall", this.state.distance, this.state.time, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
     }
     onClick8() {
        getCurrentUser().then(user => {
                     
             if (user) {
                console.log(user.email + "Vi er her nå ")
                this.setType(Collapsible);
                this.strengthExercises.push(new Cardio("Langkjøring",this.distance, this.time));
                addCardioExercise(user.email, "Langkjøring", this.state.distance, this.state.time, this.state.name); 
            } else {
              // No user is signed in.
              console.log('No user is signed in.');
            }
          }).catch(error => {
            console.log(error);
          });
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

    // setDistance(distance) {
    //     this.distance = distance;
    // };
    
    // setTime(time) {
    //     this.time = time;
    // };

    render () {
        return (
            <ul className="list">
                <input type="text" placeholder="Name" onChange={(event) => {this.setName(event.target.value)}}></input>
                <li>
                    <Card>
                        <Collapsible trigger="Benk" id="Benk" name ="Benk">
                        <input type="text" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick1()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Markløft" id="Markløft">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick2()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Biceps" id = "Biceps">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick3()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Triceps" id="Triceps">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick4()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible trigger="Pushups" id="Pushups">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick5()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible  trigger="Situps" id="Situps">
                        <input type="text" id="kg" name="kg" placeholder="kg" onChange={(event) => {this.setKg(parseInt(event.target.value))}}></input>
                        <input type="text" id="reps" name="reps" placeholder="reps" onChange={(event) => {this.setReps(parseInt(event.target.value))}}></input>
                        <input type="text" id="sets" name="sets" placeholder="sets" onChange={(event) => {this.setSets(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick6()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible  trigger="Intervall" id="Intervall">
                        <input type="text" placeholder="distance" onChange={(event) => {this.setDistance(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="time" onChange={(event) => {this.setTime(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick7()}>add</button>
                        </Collapsible>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Collapsible  trigger="Langkjøring" id="Langkjøring">
                        <input type="text" placeholder="distance" onChange={(event) => {this.setDistance(parseInt(event.target.value))}}></input>
                        <input type="text" placeholder="time" onChange={(event) => {this.setTime(parseInt(event.target.value))}}></input>
                        <button onClick={() => this.onClick8()}>add</button>
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
