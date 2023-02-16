import { doc, collection, getDoc } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



async function handleGetProfile(userId){
    console.log(userId);
    const docRef = doc(firestore, "Users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}

export default handleGetProfile;