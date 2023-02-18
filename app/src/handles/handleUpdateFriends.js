import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
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
    }
}

export default handleUpdateFriends;