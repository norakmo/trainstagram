
import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"


/**
 * 
 * @param  userEmail email of a user
 * @returns document id, used to modify or delete document in firstore. Returns false if no user is find.
 */
async function userEmailToId(userEmail){
    try{
        const q = query(collection(firestore, "Users"), where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0].id
    }catch(e){
        return false
    };
}

export default userEmailToId;

