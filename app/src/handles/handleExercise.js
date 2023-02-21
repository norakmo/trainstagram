import { doc, collection, getDocs, where, query, addDoc, deleteDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";
import isFriends from "../utils/isFriends";
import Strength from "../Components/Strength"

/**
 * 
 * 
 * 
 * @param {*} email profile to add friend to
 * @returns 
 */
async function addStrengthExercise(email, type, kg, reps, sets, name) {
    try{
        console.log("adding exercise");
        const user1Id = await userEmailToId(email);
        const trainingSession = collection(firestore, "TrainingSessions/"+ user1Id + "/økter/"+ name+ "/" + type);
        await addDoc(trainingSession, {
           Øvelse: type,
           Vekt: kg,
           Antall: reps,
           Sett: sets
        })
    }catch(e){
        console.log(e);
    }
}

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

// /**
//  * 
//  * 
//  * @param {*} email Profile to delete friend from
//  * @param {*} friendEmail Friend to delete
//  */
// async function removeFriend(email, friendEmail){
//     try{
//         const user1Id = await userEmailToId(email);
//         const q = query(collection(firestore, "Users/" + user1Id +"/Friends"), where("email", "==", friendEmail));
//         const querySnapshot = await getDocs(q);
//         const friendId = querySnapshot.docs[0].id
//         await deleteDoc(doc(firestore, "Users/" + user1Id +"/Friends", friendId));
//     }catch(e){
//         console.log(e);
//     }
// }

// async function handleUpdateFriends(email, remove, friendEmail){

//     if(!remove){
//         const user1Exists = await userEmailToId(email);
//         const user2Exists = await userEmailToId(friendEmail);
//         if(user1Exists && user2Exists){
//             const friends = (await isFriends(email, friendEmail))
//             if(!friends){
//                 await addFriend(email, friendEmail);
//                 await addFriend(friendEmail, email);
//             }
//         }else{
//             return false;
//         }
//     }else{
//         const user1Exists = await userEmailToId(email);
//         const user2Exists = await userEmailToId(friendEmail);
//         if(user1Exists && user2Exists){
//             const friends = (await isFriends(email, friendEmail))
//             if(friends){
//                 await removeFriend(email, friendEmail);
//                 await removeFriend(friendEmail, email);
//             }
//         }else{
//             return false;
//         }
//     }
// }

export default {addStrengthExercise, addCardioExercise};