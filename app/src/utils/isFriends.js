import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "./userEmailToId";


async function isFriends(email, friendEmail){
    const userId = await userEmailToId(email);
    const friends = await getDocs(collection(firestore, "Users/" + userId +"/Friends"))
    let is_friends = false;
    friends.docs.forEach((e) =>{
        if(e.data().email === friendEmail){
            is_friends = true;
        }
    })
    return is_friends;

    
}

export default isFriends;