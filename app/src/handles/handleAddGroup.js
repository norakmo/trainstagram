import { db } from "../firebase_setup/firebase";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleAddGroup(groupName, members, user) {
    console.log(groupName);
    console.log(members);
    console.log(user);
    const groupsRef = collection(db, "Groups");
    const groupsSnapshot = await getDocs(groupsRef);
    const groupData = groupsSnapshot.docs.map(doc => doc.data());
    const checkGroupName = groupData.some(element => element.Name === groupName);
    if (!checkGroupName) {
        const newGroupRef = await addDoc(collection(db, "Groups"), {
            GroupName: groupName,
            Admin: user
        });
        members.forEach(async (membersEmail) => {
            const membersRef = collection(db, "Groups/" + newGroupRef.id + "/Members");
            await addDoc(membersRef, {
                Email: membersEmail
            });
        });
    }
}

export default handleAddGroup;
