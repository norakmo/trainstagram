import { db } from "../firebase_setup/firebase";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { firestore } from "../firebase_setup/firebase";
import { getCurrentUser } from "../Components/Auth";





async function handleGroupBar(email) {


    const groupsRef = collection(firestore, "Groups");
    const groupsSnapshot = await getDocs(groupsRef);


    const groupsData = [];


    for (const groupDoc of groupsSnapshot.docs) {
        
        const membersRef = collection(firestore,"Groups/" + groupDoc.id + "/Members");
        const membersSnapshot = await getDocs(membersRef);

        const membersData = membersSnapshot.docs.map(doc => doc.data());
        
        
        if (membersData.some(member => member.Email === email)){
            
            groupsData.push([groupDoc.get("GroupName"), membersData, groupDoc.get("Admin")]);
        }
        
    }
    console.log(groupsData);
    return groupsData;
  } 

  
  
  export default handleGroupBar;