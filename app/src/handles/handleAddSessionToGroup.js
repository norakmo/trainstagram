import { db } from "../firebase_setup/firebase";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleAddSessionToGroup(groupName, session, user) {
  console.log(groupName);
  console.log(session);
  console.log(user);

  const groupQuerySnapshot = await getDocs(
    query(collection(db, "Groups"), where("GroupName", "==", groupName))
  );

  const groupId = groupQuerySnapshot.docs[0].id;
  console.log("Group exists with id: ", groupId);
  const sessionsRef = collection(db, `Groups/${groupId}/Sessions`);
  await addDoc(sessionsRef, { User: user, Session: session });
  console.log("Session added to existing group");
}

export default handleAddSessionToGroup;
