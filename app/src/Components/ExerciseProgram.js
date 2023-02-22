class ExerciseProgram {
    constructor(duration) {
        this.duration = duration;
        this.sessions = [];
        this.sessionToDay = new Map();
    }

    addExerciseSession(session, day) {
        if (day > this.duration) {
            throw new Error("Den oppgitte dagen er utenfor programmets tidsrom.");
        }
        this.sessions.push(session);
        this.sessionToDay.set(this.sessions.length, day);
    }
}