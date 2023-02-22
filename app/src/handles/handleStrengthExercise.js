import {
  doc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  deleteDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import userEmailToId from "../utils/userEmailToId";
import isFriends from "../utils/isFriends";
import Strength from "../Components/Strength";

async function addStrengthExercise(email, type, kg, reps, sets, name) {
  try {
    console.log("adding exercise");
    const user1Id = await userEmailToId(email);
    const trainingSession = collection(
      firestore,
      "TrainingSessions/" + user1Id + "/økter/" + name + "/" + type
    );
    console.log(kg + "dette er kg i addstrength");

    await addDoc(trainingSession, {
      Øvelse: type,
      Vekt: kg,
      Antall: reps,
      Sett: sets,
    });
  } catch (e) {
    console.log(e);
  }
}
export default addStrengthExercise;
