import { firestore } from '../main';

export function getCMTypes(){
    return firestore.collection("CMtypes").get().then((querySnapshot) => {
        const types = [];
        querySnapshot.forEach((doc) => {
            types.push(doc.id);
        });
        return types.sort();
    }).catch(err => console.error(err));
}

export function getDetailsForCMType(cmType){
    return firestore.collection("CMtypes").doc(cmType).get()
    .then(doc => [doc.id, doc.data()])
    .catch(err => console.error(err));
}
