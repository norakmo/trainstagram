import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



async function handleGetTrainingSessions(){
    const TS_query = query(collection(firestore, "TrainingSessions"))
    const TS_Snapshot = await getDocs(TS_query);

    return TS_Snapshot.docs;

}

export default handleGetTrainingSessions;