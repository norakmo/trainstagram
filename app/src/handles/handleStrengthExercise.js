import {
  doc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  deleteDoc,
  setDoc
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import userEmailToId from "../utils/userEmailToId";
import isFriends from "../utils/isFriends";
import Strength from "../Components/Strength";
import { SelectUnstyledContext } from "@mui/base";

async function addStrengthExercise(email, type, kg, reps, sets, name) {
  try {
    console.log("adding exercise");
    const user1Id = await userEmailToId(email);
    const trainingSession = collection(
      firestore,
      "TrainingSessions/" + user1Id + "/økter/" + name + "/exercises"
    );
    console.log(kg + "dette er kg i addstrength");
    console.log(kg +" "+ reps+ " " + sets);
    await addDoc(trainingSession, {
      Øvelse: type,
      Vekt: kg,
      Antall: reps,
      Sett: sets,
    });
    await setDoc(doc(firestore, "TrainingSessions/" + user1Id + "/økter", name), {
      name: name
    })
  } catch (e) {
    console.log(e);
  }
}
export default addStrengthExercise;
