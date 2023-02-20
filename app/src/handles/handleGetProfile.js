import { doc, collection, getDocs, where, query, addDoc, deleteDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";



async function handleGetProfile(userEmail, retry){
    //get profile docs with matching email
    const docs = query(collection(firestore, "Users"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(docs);


    //if profiledata does not exist, create new doc with default data
    if(!querySnapshot.empty){
        if(querySnapshot.docs.length === 2){
            const falseId = await userEmailToId(querySnapshot.docs[1].data().email);
            console.log("deleting second user: " + falseId);
            await deleteDoc(doc(firestore, "Users", falseId));
        }
        return querySnapshot.docs[0].data();
    }else{
        if(retry){
            //Something went wrong to get here
            alert("Unable to get profile data");
        }
        const ref = collection(firestore, "Users")
        const docData = {
            email: userEmail,
            name: "name",
            dateOfBirth: "01.01.01",
            height: 180,
            weight: 80,
            gender: "Male"
        }
        await addDoc(ref, docData);

        //call recursively with retry = true to signal that the doc should have been added
        return handleGetProfile(userEmail, true);
    }
}

export default handleGetProfile;