import {
  doc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleGetStreak(userEmail) {
  let data;
  const Streak = query(
    collection(firestore, "StreakData/"),
    where("userEmail", "==", userEmail)
  );
  const snap = await getDocs(Streak);
  if (!snap.empty) {
    snap.docs.forEach((doc) => {
      console.log(doc.data());
      data = doc.data();
    });
    return data;
  } else {
    try {
      //get document reference¨
      const d1 = new Date().getTime(); // today
      console.log("heisann");

      const StreakData = collection(firestore, "StreakData/");

      await addDoc(StreakData, {
        userEmail: userEmail,
        lastLoggedIn: d1,
        streak: 0,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handleGetStreak;
