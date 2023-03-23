import { db } from "../firebase_setup/firebase";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

async function handleAddGroup(groupName, members, user) {
    
    console.log("members to add to group:" + members);

    const groupsRef = collection(db, "Groups");
    const groupsSnapshot = await getDocs(groupsRef);
    const groupData = groupsSnapshot.docs.map(doc => doc.data());
    const checkGroupName = groupData.some(element => element.Name === groupName);
    if (!checkGroupName) {
        const newGroupRef = await addDoc(collection(db, "Groups"), {
            GroupName: groupName,
            Admin: user
        });
        await members.forEach(async (membersEmail) => {
            const membersRef = collection(db, "Groups/" + newGroupRef.id + "/Members");
            await addDoc(membersRef, {
                Email: membersEmail
            });
            console.log("adding member: " + membersEmail);
        });
    }
}

export default handleAddGroup;
