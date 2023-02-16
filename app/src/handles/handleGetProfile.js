import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



async function handleGetProfile(userId){
    console.log("get profile");
    const docs = query(collection(firestore, "Users"), where("email", "==", userId));
    const querySnapshot = await getDocs(docs);
    if(!querySnapshot.empty){
        return querySnapshot.docs[0].data();
    }else{
        const ref = collection(firestore, "Users")
        const docData = {
            email: userId,
            name: "name",
            dateOfBirth: "01.01.01",
            height: 180,
            weight: 80,
            gender: "Male"
        }
        await addDoc(ref, docData);

        return handleGetProfile(userId);
    }
}

export default handleGetProfile;