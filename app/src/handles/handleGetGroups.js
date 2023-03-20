import { doc, collection, getDocs, where, query, addDoc} from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"




async function handleGetGroups(email){
    const groups = await getDocs(collection(firestore, "/Groups"));

    let promises = [];
    for(const g in groups.docs){
        promises.push([g, getDocs(collection(firestore, "/Groups/" + g.id() + "/Members"))]);
    }
    for(let p in promises){
        p[1].then(()=>{
            let toAdd = false;
            for(const mem in p[1].docs){
                if(mem.data().email === email){
                    toAdd = true;
                }
            }
            p[1] = toAdd;
        });

    }

    let result = [];
    for(const p in promises){
        if(p[1]){
            result.push(p[0]);
        }
    }

    return result;
    

}


export default handleGetGroups;