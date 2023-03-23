import {
  doc,
  collection,
  setDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleStreakUpdate(userEmail, date, streak) {
  const querySnapshot = await getDocs(
    query(
      collection(firestore, "StreakData"),
      where("userEmail", "==", userEmail)
    )
  );

  if (querySnapshot.empty) {
    console.log("Document not found");
    return;
  }

  const docRef = doc(firestore, "StreakData", querySnapshot.docs[0].id);
  await updateDoc(docRef, {
    lastLoggedIn: date,
    streak: streak,
  });
}

export default handleStreakUpdate;
