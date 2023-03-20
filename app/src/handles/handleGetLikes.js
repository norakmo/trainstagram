import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



async function handleGetLikes(user, sessionName, sessionOwner){
    let likedByUser = false;
    const likesRef = query(collection(firestore, "Likes/"), where("sessionName", "==", sessionName), where("sessionOwner", "==", sessionOwner));
    const snap = await getDocs(likesRef);
    snap.docs.forEach((l)=>{
        if(l.data().likedBy === user){
            likedByUser = true;
        }
    })
    return [likedByUser, snap.docs];
}

export default handleGetLikes;