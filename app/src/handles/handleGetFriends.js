import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



async function handleGetFriends(user){

    //!Dette er det styggeste jeg noen gang har skrevet

    const q = query(collection(firestore, "Users"), where("email", "==", user));
    const querySnapshot = await getDocs(q);


    const friends = query(collection(firestore, "Users/" + querySnapshot.docs[0].id +"/Friends"))
    const friendsSnapshot = await getDocs(friends);

    let friendsData = [];

    const people = query(collection(firestore, "Users"));
    const peopleSnapshot = await getDocs(people);
    
    let friendEmails = [];

    friendsSnapshot.docs.forEach((e) => {
        friendEmails.push(e.data().email)
    });

    peopleSnapshot.docs.forEach((e) => {
        friendEmails.forEach((f)=>{
            if (f === e.data().email){
                friendsData.push(e);
                
            }
        })
    });


    return friendsData;
}


export default handleGetFriends;