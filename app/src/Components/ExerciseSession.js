import Strength from "./Strength";
import Cardio from "./Cardio";
import React from "react";


export default class ExerciseSession extends React.Component {


 
    strengthExercises = [];
    cardioExercises = [];


    addStrengthExercise(type, kg, reps, sets) {
        for (let i = 0; i < sets; i++) {
            let strength = new Strength(type, kg, reps);
            this.strengthExercises.push(strength);
        }
    }
    
    addCardioExercise(type, distance, time) {
        let cardio = new Cardio(type, distance, time);
        this.cardioExercises.push(cardio);
    }

     strengthEx() {
        return this.strengthExercises;
    }

    cardioEx() {
        return this.cardioExercises;
    } 

    render () {
        return (
            <div>
                <button>
                    <a href="/Strength">Strength</a>
                </button>
                <button>
                    <a href="/Cardio">Cardio</a>
                </button>  
            </div>              
        );
    }
}
