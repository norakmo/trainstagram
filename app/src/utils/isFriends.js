import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "./userEmailToId";

/**
 * 
 * Takes in two emails and returns true if they are friends, false if not.
 * 
 */
async function isFriends(email, friendEmail){

    //get friends of user with email: email
    const userId = await userEmailToId(email);
    const friends = await getDocs(collection(firestore, "Users/" + userId +"/Friends"))


    //check if friendEmail is in friends
    let is_friends = false;
    friends.docs.forEach((e) =>{
        if(e.data().email === friendEmail){
            is_friends = true;
        }
    })
    return is_friends;

    
}

export default isFriends;