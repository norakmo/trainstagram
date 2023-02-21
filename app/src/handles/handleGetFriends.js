import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import userEmailToId from "../utils/userEmailToId";


/**
 * 
 * @param  email email of user
 * @returns profile data of all friends of user
 */
async function handleGetFriends(email){

    //get users friends
    const userId = await userEmailToId(email);
    const friends = query(collection(firestore, "Users/" + userId +"/Friends"))
    const friendsSnapshot = await getDocs(friends);


    //get list of profiles
    const people = query(collection(firestore, "Users"));
    const peopleSnapshot = await getDocs(people);
    

    //for each profile check if it is a friend, if it is add it to friendsData.
    let friendEmails = [];
    friendsSnapshot.docs.forEach((e) => {
        friendEmails.push(e.data().email)
    });
    let friendsData = [];
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