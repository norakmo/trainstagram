import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";



async function handleGetTrainingSessions(user){


    const userId = await userEmailToId(user);
    const friends = await getDocs(collection(firestore, "Users/" + userId +"/Friends"));
    let sessions = [];

    for(let i = 0; i < friends.docs.length; i++){
        const friendId = await userEmailToId(friends.docs[i].data().email);
        const SessionsDocs = await getDocs(collection(firestore, "TrainingSessions/" + friendId + "/økter"));
        SessionsDocs.docs.forEach(async (e)=>{
            
            const exercises = await getDocs(collection(firestore, "TrainingSessions/" + friendId + "/økter/" + e.id + "/exercises"));
            console.log(exercises);
            console.log(e.id);
            const Session = {
                name: e.data().name,
                exercises: exercises.docs
            }
            sessions.push(Session);
        })
    }
    return sessions;

    

}

export default handleGetTrainingSessions;