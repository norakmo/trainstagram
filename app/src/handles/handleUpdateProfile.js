import { doc, collection, setDoc, query, where, getDocs, updateDoc } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";


async function handleUpdateProfile(userData){

    //get document reference
    const userId = await userEmailToId(userData.user.email);
    const docRef = doc(collection(firestore, "Users"), userId);

    
    await updateDoc(docRef, {
        name: userData.name,
        dateOfBirth: userData.DateOfBirth,
        height: userData.height,
        weight: userData.weight,
        gender: userData.gender
      });
    

}

export default handleUpdateProfile;