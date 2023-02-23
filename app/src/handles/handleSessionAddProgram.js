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

async function addSessionToProgram(email, nameOfProgram, sessionName) {
  try {
    console.log("adding session to program");
    console.log(email);
    console.log(nameOfProgram);
    const user1Id = await userEmailToId(email);
    const docs = query(
      collection(firestore, "TrainingPrograms/"),
      where("Bruker", "==", email),
      where("Navn", "==", nameOfProgram)
    );

    const docsSnapshot = await getDocs(docs);

    console.log("docsSnapshot:", docsSnapshot);

    if (docsSnapshot.empty) {
      console.log("No documents found");
      return;
    }

    const docs2 = query(
      collection(firestore, "TrainingSessions/"),
      where("Bruker", "==", email),
      where("Navn", "==", nameOfProgram)
    );

    const docsSnapshot2 = await getDocs(docs);

    console.log("docsSnapshot2:", docsSnapshot2);

    if (docsSnapshot2.empty) {
      console.log("No documents found");
      return;
    }

    const sessions = collection(
      firestore,
      `TrainingPrograms/${docsSnapshot.docs[0].id}/Sessions`
    );

    await addDoc(sessions, {
      Navn: sessionName,
    });

    console.log("Session added successfully");
  } catch (e) {
    console.log("Error:", e);
  }
}

export default addSessionToProgram;
