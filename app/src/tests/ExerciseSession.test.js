import ExerciseSession from "../classes/ExerciseSession";
import "@testing-library/jest-dom/extend-expect";

describe("Testing ExerciseSession class", () => {

    test("addStrengthExercise method", async () => {
        let session1 = new ExerciseSession();
        session1.addStrengthExercise("Benk", 80, 10, 1);
        expect(session1.strengthExercises).toHaveLength(1);
        session1.addStrengthExercise("Markløft", 120, 10, 2);
        expect(session1.strengthExercises).toHaveLength(3);
    });

    test("addCardioExercise method", async () => {
        let session2 = new ExerciseSession();
        session2.addCardioExercise("Langkjøring", 10, 1)
        expect(session2.cardioExercises).toHaveLength(1);
    });

    test("should fail when illegal exercisetype", async () => {
        let session3 = new ExerciseSession();
        let session4 = new ExerciseSession();

        try {
            session3.addStrengthExercise("Fake-exercise", 100, 10, 1);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe("Invalid Exercise");
        }

        try {
            session4.addCardioExercise("Fake-exercise", 10, 1);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe("Invalid Exercise");
        }
    });
});