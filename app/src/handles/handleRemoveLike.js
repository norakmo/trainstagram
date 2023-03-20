import { doc, collection, getDocs, where, query, addDoc, deleteDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"


async function handleRemoveLike(likedBy, sessionName, sessionOwner){
    const likesRef = query(collection(firestore, "Likes/"), where("likedBy", "==", likedBy), where("sessionName","==",sessionName),where("sessionOwner","==",sessionOwner));
    const likes = await getDocs(likesRef);
    if(likes.docs.length > 0){
        deleteDoc(doc(firestore, "Likes/", likes.docs[0].id));
        console.log("likesDeleted");
    }
}

export default handleRemoveLike;