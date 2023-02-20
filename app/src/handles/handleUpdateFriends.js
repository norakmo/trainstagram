import { doc, collection, getDocs, where, query, addDoc, deleteDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";
import isFriends from "../utils/isFriends";

/**
 * 
 * 
 * 
 * @param {*} email profile to add friend to
 * @param {*} friendEmail friend to add
 * @returns 
 */
async function addFriend(email, friendEmail){
    try{
        console.log("adding friend");
        const user1Id = await userEmailToId(email);
        const friends = collection(firestore, "Users/" + user1Id +"/Friends")
        await addDoc(friends, {
            email: friendEmail
        })
    }catch(e){
        console.log(e)
    }
}

/**
 * 
 * 
 * @param {*} email Profile to delete friend from
 * @param {*} friendEmail Friend to delete
 */
async function removeFriend(email, friendEmail){
    try{
        const user1Id = await userEmailToId(email);
        const q = query(collection(firestore, "Users/" + user1Id +"/Friends"), where("email", "==", friendEmail));
        const querySnapshot = await getDocs(q);
        const friendId = querySnapshot.docs[0].id
        await deleteDoc(doc(firestore, "Users/" + user1Id +"/Friends", friendId));
    }catch(e){
        console.log(e);
    }
}

async function handleUpdateFriends(email, remove, friendEmail){

    if(!remove){
        const user1Exists = await userEmailToId(email);
        const user2Exists = await userEmailToId(friendEmail);
        if(user1Exists && user2Exists){
            const friends = (await isFriends(email, friendEmail))
            if(!friends){
                await addFriend(email, friendEmail);
                await addFriend(friendEmail, email);
            }
        }else{
            return false;
        }
    }else{
        const user1Exists = await userEmailToId(email);
        const user2Exists = await userEmailToId(friendEmail);
        if(user1Exists && user2Exists){
            const friends = (await isFriends(email, friendEmail))
            if(friends){
                await removeFriend(email, friendEmail);
                await removeFriend(friendEmail, email);
            }
        }else{
            return false;
        }
    }
}

export default handleUpdateFriends;