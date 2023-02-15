import Strength from "../classes/Strength";
import Cardio from "../classes/Cardio";

class ExerciseSession {

    constructor() {
    }

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

     strengthExercises() {
        return this.strengthExercises;
    }

    cardioExercises() {
        return this.cardioExercises;
    }
}
module.exports = ExerciseSession;