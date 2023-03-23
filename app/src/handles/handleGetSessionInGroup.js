import { firestore } from "../firebase_setup/firebase";
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";
import userEmailToId from "../utils/userEmailToId";

async function handleGetSessionInGroup(groupName) {

  const groupsRef = query(collection(firestore, "Groups"), where("GroupName", "==", groupName));
  const groupsSnapshot = await getDocs(groupsRef);
  
  const sessionsRef = collection(firestore, "Groups/" + groupsSnapshot.docs[0].id + "/Sessions");
  const sessionsSnapshot = await getDocs(sessionsRef);
  console.log(sessionsSnapshot.docs)

  let sessions = [];
  for(let sessionRef of sessionsSnapshot.docs){
    const userId = await userEmailToId(sessionRef.data().User);
    console.log(sessionRef.data().Session);
    const session = (await getDocs(query(collection(firestore, "TrainingSessions/" + userId + "/økter/"), where("name", "==", sessionRef.data().Session)))).docs[0];
    console.log(session);
    
    const exercises = await getDocs(
      collection(
        firestore,
        "TrainingSessions/" + userId + "/økter/" + sessionRef.data().Session + "/exercises"
      )
    );
    const sessionData = {
      name: session.data().name,
      owner: session.data().owner,
      exercises: exercises.docs,
    };
    sessions.push(sessionData);
  }

  return sessions;


}

export default handleGetSessionInGroup;
