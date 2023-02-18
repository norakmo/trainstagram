import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";



async function handleGetFriends(user){

    const userId = await userEmailToId(user);

    const friends = query(collection(firestore, "Users/" + userId +"/Friends"))
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