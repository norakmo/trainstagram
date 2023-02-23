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

async function addProgram(email, nameOfProgram, startTime, endTime) {
  try {
    console.log("adding program");
    const user1Id = await userEmailToId(email);

    const trainingProgram = collection(firestore, "TrainingPrograms/");
    await addDoc(trainingProgram, {
      Bruker: email,
      Navn: nameOfProgram,
      Start: startTime,
      Slutt: endTime,
    });
  } catch (e) {
    console.log(e);
  }
}

export default addProgram;
