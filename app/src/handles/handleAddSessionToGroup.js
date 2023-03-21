import { db } from "../firebase_setup/firebase";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleAddSessionToGroup(groupName, session, user) {
  console.log(groupName);
  console.log(members);
  console.log(user);
  const groupsRef = collection(db, "Groups");
  const groupsSnapshot = await getDocs(groupsRef);
  const groupData = groupsSnapshot.docs.map((doc) => doc.data());
  const checkGroupName = groupData.some(
    (element) => element.Name === groupName
  );
  if (!checkGroupName) {
    const newGroupRef = await addDoc(collection(db, "Groups"), {
      GroupName: groupName,
    });

    const sessionToAdd = collection(
      db,
      "Groups/" + newGroupRef.id + "/Sessions"
    );
    await addDoc(sessionToAdd, {
      Session: session,
      AddedBy: user,
    });
  }
}

export default handleAddSessionToGroup;
