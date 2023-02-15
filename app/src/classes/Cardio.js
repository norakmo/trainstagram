
class Cardio {

    constructor(type, distance, time) {
        this.checkType(type);
        this.type = type;
        this.distance = distance;
        this.time = time;
    }

    acceptedTypes = ["Intervall", "Langkjøring"];

    checkType(type) {
        if (!this.acceptedTypes.includes(type)) {
            throw new Error("Invalid Exercise");
        }
    }
}
module.exports = Cardio;