import {firestore} from "../main"
export const CMtypes = ["Hypertrophic","Dilated","Restrictive"];

export async function getSelectionsForGraphing() {
    const dimensions = [];
    const mutationTypes = [];

    await firestore.collection("patientData")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            Object.keys(data).forEach((key) => {
                if(key !== "mutatedGenes" && key !== "owner" && key !== "createdAt")
                    dimensions.indexOf(key) === -1 ? dimensions.push(key) : null;
                else if (key === "mutatedGenes"){
                    data[key].forEach(mutation => {
                        mutationTypes.indexOf(mutation) === -1 ? mutationTypes.push(mutation) : null;
                    });
                }
            });  
        });
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    return {dimensions, mutationTypes}
}

export async function getDataForDimension(gene, dimensionName) {
    const dataPoints = [];

    if(dimensionName === ""){
        return dataPoints
    }

    await firestore.collection("patientData")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            if(data[dimensionName] && data.mutatedGenes.includes(gene)){
                dataPoints.push(data[dimensionName]);
            }
        });
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    return dataPoints
}