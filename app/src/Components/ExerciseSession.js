
class ExerciseSession {
    constructor(strengthExercises) {
        this.strengthExercises = strengthExercises;
    }

    constructor(cardioExercises) {
        this.cardioExercises = cardioExercises;
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

}