import { doc, collection, setDoc, query, where, getDocs, updateDoc } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"


async function handleUpdateProfile(userData){

    const docs = query(collection(firestore, "Users"), where("email", "==", userData.user.email));
    
    const querySnapshot = await getDocs(docs);
    console.log(querySnapshot.docs[0].id);
    
    const docRef = doc(collection(firestore, "Users"), querySnapshot.docs[0].id);
    await updateDoc(docRef, {
        name: userData.name,
        dateOfBirth: userData.DateOfBirth,
        height: userData.height,
        weight: userData.weight,
        gender: userData.gender
      });
    

}

export default handleUpdateProfile;