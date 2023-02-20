class Strength {

    constructor(type, kg, reps) {
        this.checkType(type);
        this.type = type;
        this.kg = kg;
        this.reps = reps;
    }

    acceptedTypes = ["Benk", "Markløft", "Biceps", "Triceps", "Pushups", "Situps"];

    checkType(type) {
        if (!(this.acceptedTypes.includes(type))) {
            throw new Error("Invalid Exercise");
        }
    }
}
module.exports = Strength;