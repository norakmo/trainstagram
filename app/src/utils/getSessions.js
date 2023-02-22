
import { collection, getDocs, query } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"


/**
 * 
 * @param  userEmail email of a user
 * @returns document id, used to modify or delete document in firstore. Returns false if no user is find.
 */
async function getSessions(){
    try{
        const q = query(collection(firestore, "Sessions"));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs
    }catch(e){
        return false
    };
}

export default getSessions;

