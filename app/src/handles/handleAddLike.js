import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"


async function handleAddLike(likedBy, sessionName, sessionOwner){
    const duplicateCheck = query(collection(firestore, "Likes/"), where("likedBy", "==", likedBy), where("sessionName","==",sessionName),where("sessionOwner","==",sessionOwner));
    const isAdded = (await getDocs(duplicateCheck)).docs.length > 0;
    if(isAdded){
        console.log("allready added");
        return;
    }
    const likesRef = collection(firestore, "Likes/");
    addDoc(likesRef, {
        likedBy: likedBy,
        sessionName: sessionName,
        sessionOwner: sessionOwner
    })
}

export default handleAddLike;