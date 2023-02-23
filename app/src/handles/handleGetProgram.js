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

async function getProgram(email) {
  try {
    console.log(email);
    const user1Id = await userEmailToId(email);
    const docs = query(
      collection(firestore, "TrainingPrograms/"),
      where("Bruker", "==", email)
    );

    const docsSnapshot = await getDocs(docs);

    console.log("docsSnapshot:", docsSnapshot);

    if (docsSnapshot.empty) {
      console.log("No documents found");
      return;
    }
    let program = [];
    for (const e of docsSnapshot.docs) {
      const sessionsFK = await getDocs(
        collection(firestore, "TrainingPrograms/" + e.id + "/Sessions")
      );
      const programData = {
        metaData: e,
        sessions: sessionsFK,
      };
      program.push(programData);
    }

    return program;
  } catch (e) {
    console.log("Error:", e);
  }
}

export default getProgram;
