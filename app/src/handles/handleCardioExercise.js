import { doc, collection, getDocs, where, query, addDoc, deleteDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";
import isFriends from "../utils/isFriends";
import Strength from "../Components/Strength"


async function addCardioExercise(email, type, distance, time, name) {
    try{
        console.log("adding exercise");
        const user1Id = await userEmailToId(email);
        const trainingSession = collection(firestore, "TrainingSessions/"+ user1Id + "/økter/"+ name+ "/" + type);
        await addDoc(trainingSession, {
           Øvelse: type,
           Distanse: distance,
           Tid: time
        })
    }catch(e){
        console.log(e);
    }
}

export default addCardioExercise;