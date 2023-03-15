import { db } from "../firebase_setup/firebase";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { firestore } from "../firebase_setup/firebase";
import { getCurrentUser } from "../Components/Auth";





async function handleGroupBar(user) {
    console.log(user.email + "her er vi nå");
    const groupsRef = collection(db, "Groups");
    const groupsSnapshot = await getDocs(groupsRef);
    const groupsData = new Map();
    for (const groupDoc of groupsSnapshot.docs) {
        const membersRef = collection(db,"Groups/" + groupDoc.id + "/Members");
        const membersSnapshot = await getDocs(membersRef);
        const membersData = membersSnapshot.docs.map(doc => doc.data());
        const containsUser = membersData.some(member => member.Email === user.email);
        if (containsUser){
            groupsData.set(groupDoc.get("GroupName"), membersData);
        }
    }
    return groupsData;
  } 

  
  
  export default handleGroupBar;