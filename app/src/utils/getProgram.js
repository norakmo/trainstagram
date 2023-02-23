import {
  doc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  getDocs,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const querySnapshot = await getDocs(collection(db, "TrainingSessions"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
