
import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



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

