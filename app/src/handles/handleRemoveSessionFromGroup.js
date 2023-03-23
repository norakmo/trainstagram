import {
  doc,
  collection,
  getDocs,
  where,
  query,
  deleteDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleRemoveSessionFromGroup(user, groupName, session) {
  const groupQuerySnapshot = await getDocs(
    query(
      collection(firestore, "Groups"),
      where("GroupName", "==", groupName)
    )
  );
  const groupId = groupQuerySnapshot.docs[0].id;
  const sessionsRef = collection(firestore, `Groups/${groupId}/Sessions`);
  const sessionQuerySnapshot = await getDocs(
    query(
      sessionsRef,
      where("User", "==", user),
      where("Session", "==", session)
    )
  );
  const sessionDocId = sessionQuerySnapshot.docs[0].id;
  const sessionDocRef = doc(sessionsRef, sessionDocId);
  await deleteDoc(sessionDocRef);
  
}

export default handleRemoveSessionFromGroup;
