import { doc, collection, getDocs, where, query, addDoc, deleteDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";
import isFriends from "../utils/isFriends";


async function addFriend(email, friendEmail){
    try{
        console.log("adding friend");
        const user1Id = await userEmailToId(email);
        const friends = collection(firestore, "Users/" + user1Id +"/Friends")
        await addDoc(friends, {
            email: friendEmail
        })
        return true;
    }catch(e){
        console.log()
        return false;
    }
}

async function removeFriend(email, friendEmail){
    try{
        const user1Id = await userEmailToId(email);
        const q = query(collection(firestore, "Users/" + user1Id +"/Friends"), where("email", "==", friendEmail));
        const querySnapshot = await getDocs(q);
        const friendId = querySnapshot.docs[0].id
        await deleteDoc(doc(firestore, "Users/" + user1Id +"/Friends", friendId));
    }catch(e){

    }
}

async function handleUpdateFriends(email, remove, friendEmail){

    if(!remove){
        const user1Exists = await userEmailToId(email);
        const user2Exists = await userEmailToId(friendEmail);
        if(user1Exists && user2Exists){
            const friends = (await isFriends(email, friendEmail))
            console.log(friends);
            if(!friends){
                addFriend(email, friendEmail);
                addFriend(friendEmail, email);
            }
        }else{
            return false;
        }
    }else{
        const user1Exists = await userEmailToId(email);
        const user2Exists = await userEmailToId(friendEmail);
        if(user1Exists && user2Exists){
            const friends = (await isFriends(email, friendEmail))
            console.log(friends);
            if(friends){
                removeFriend(email, friendEmail);
                removeFriend(friendEmail, email);
            }
        }else{
            return false;
        }
    }
}

export default handleUpdateFriends;