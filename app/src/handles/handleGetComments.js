import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"




async function handleGetComments(email, session){
    console.log(email + " " + session);
    const comments = query(collection(firestore, "Comments/"), where("sessionOwner", "==", email), where("session", "==", session));
    const querySnapshot = await getDocs(comments);

    return querySnapshot.docs;
}

export default handleGetComments;