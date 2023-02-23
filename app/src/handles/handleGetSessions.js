import {
  doc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import userEmailToId from "../utils/userEmailToId";

async function getSessions(user) {
  const userId = await userEmailToId(user.email);
  const sessionsDocs = await getDocs(
    collection(firestore, "TrainingSessions/" + userId + "/økter")
  );

  let sessions = [];

  for (let session of sessionsDocs.docs) {
    const exercises = await getDocs(
      collection(
        firestore,
        "TrainingSessions/" + userId + "/økter/" + session.id + "/exercises"
      )
    );
    const sessionData = {
      name: session.data().name,
      owner: session.data().owner,
      exercises: exercises.docs,
    };
    sessions.push(sessionData);
  }
  console.log(sessions);
  return sessions;
}

export default getSessions;
