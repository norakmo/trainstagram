import { db } from "../firebase_setup/firebase";
import { collection, getDocs } from "firebase/firestore";

async function handleGetSessionInGroup(groupName) {
  const groupsRef = collection(db, "Groups");
  const groupsSnapshot = await getDocs(groupsRef);
  const sessionsData = [];
  for (const groupDoc of groupsSnapshot.docs) {
    if (groupDoc.get("GroupName") === groupName) {
      const sessionsRef = collection(db, "Groups/" + groupDoc.id + "/Sessions");
      const sessionsSnapshot = await getDocs(sessionsRef);
      sessionsSnapshot.forEach((session) => {
        sessionsData.push(session);
      });
    }
    console.log(sessionsData + "funket det");
  }
}

export default handleGetSessionInGroup;
