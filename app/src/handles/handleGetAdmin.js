import { db } from "../firebase_setup/firebase";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleGetAdmin(user) {
  const groupsRef = collection(db, "Groups");
  const groupsSnapshot = await getDocs(groupsRef);
  const groupData = groupsSnapshot.docs.map((doc) => doc.data());
  const checkUserIsAdmin = groupData.some((element) => element.Admin === user);
  if (checkUserIsAdmin) {
    return true;
  } else return false;
}

export default handleGetAdmin;
