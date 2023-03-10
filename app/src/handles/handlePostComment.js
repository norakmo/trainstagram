import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";



async function handlePostComment(sessionOwner, session, content, commentOwner){
    const commentsCollection = collection(firestore, "Comments");
    addDoc(commentsCollection, {
        sessionOwner: sessionOwner,
        session: session,
        content: content,
        commentOwner: commentOwner,
    })
}


export default handlePostComment;