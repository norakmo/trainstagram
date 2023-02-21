import React from "react";
import "./Strength.css";
import Collapsible from 'react-collapsible';
import "./Strength.css";


export default class Strength extends React.Component {

    constructor(type, kg, reps) {
        super();
        // this.checkType(type);
        this.type = type;
        this.kg = kg;
        this.reps = reps;
    }


    strengthExercises = [];
    acceptedTypes = ["Benk", "Markløft", "Biceps", "Triceps", "Pushups", "Situps"];

    addStrengthExercise(type, kg, reps, sets) {
        for (let i = 0; i < sets; i++) {
            let strength = new Strength(type, kg, reps);
            this.strengthExercises.push(strength);
        }
    }

    strengthEx() {
        return this.strengthExercises;
    }

    // checkType(type) {
    //     if (!(this.acceptedTypes.includes(type))) {
    //         throw new Error("Invalid Exercise");
    //     }
    // }

    render () {
        return (
            <ul className="list">
                <li>
                    <button>
                        <Collapsible trigger="Benk" id="Benk">
                        <input type="text" id="kg" name="kg" placeholder="kg"></input>
                        <input type="text" id="reps" name="reps" placeholder="reps"></input>
                        <input type="text" id="sets" name="sets" placeholder="sets"></input>
                        <button>add</button>
                        </Collapsible>
                    </button>
                </li>
                <li>
                    <button>
                        <Collapsible trigger="Markløft" id="Markløft">
                        <input type="text" id="kg" name="kg" placeholder="kg"></input>
                        <input type="text" id="reps" name="reps" placeholder="reps"></input>
                        <input type="text" id="sets" name="sets" placeholder="sets"></input>
                        <button>add</button>
                        </Collapsible>
                    </button>
                </li>
                <li>
                    <button>
                        <Collapsible trigger="Biceps" id = "Biceps">
                        <input type="text" id="kg" name="kg" placeholder="kg"></input>
                        <input type="text" id="reps" name="reps" placeholder="reps"></input>
                        <input type="text" id="sets" name="sets" placeholder="sets"></input>
                        <button>add</button>
                        </Collapsible>
                    </button>
                </li>
                <li>
                    <button>
                        <Collapsible trigger="Triceps" id="Triceps">
                        <input type="text" id="kg" name="kg" placeholder="kg"></input>
                        <input type="text" id="reps" name="reps" placeholder="reps"></input>
                        <input type="text" id="sets" name="sets" placeholder="sets"></input>
                        <button>add</button>
                        </Collapsible>
                    </button>
                </li>
                <li>
                    <button>
                        <Collapsible trigger="Pushups" id="Pushups">
                        <input type="text" id="kg" name="kg" placeholder="kg"></input>
                        <input type="text" id="reps" name="reps" placeholder="reps"></input>
                        <input type="text" id="sets" name="sets" placeholder="sets"></input>
                        <button>add</button>
                        </Collapsible>
                    </button>
                </li>
                <li>
                    <button>
                        <Collapsible  trigger="Situps" id="Situps">
                        <input type="text" id="kg" name="kg" placeholder="kg"></input>
                        <input type="text" id="reps" name="reps" placeholder="reps"></input>
                        <input type="text" id="sets" name="sets" placeholder="sets"></input>
                        <button className="butt">add</button>
                        </Collapsible>
                    </button>
                </li>
            </ul>
        );
    }
}
