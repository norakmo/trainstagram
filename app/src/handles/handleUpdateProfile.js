import { doc, collection, setDoc } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"


async function handleUpdateProfile(userData){
    console.log(userData);
    const docRef = doc(firestore, "Users", userData.userId);
    await setDoc(docRef, {
        name: userData.name,
        dateOfBirth: userData.DateOfBirth,
        height: userData.height,
        weight: userData.weight,
        gender: userData.gender
    })
}

export default handleUpdateProfile;