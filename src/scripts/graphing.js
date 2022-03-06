import {firestore} from "../main"

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
                {
                    dimensions.indexOf(key) === -1 ? dimensions.push(key) : null;
                }
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

    dimensions.sort();
    mutationTypes.sort();

    return {dimensions, mutationTypes}
}

export async function getDataForDimension(gene, dimensionName) {
    const dataPoints = [];
    let dataType = "";
    let occurrences = {};

    if(dimensionName === ""){
        return dataPoints;
    }

    await firestore.collection("patientData")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            if(typeof data[dimensionName] !== 'undefined' && data.mutatedGenes.includes(gene)){
                dataPoints.push(data[dimensionName]);
            }
        });

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    if(typeof dataPoints[0] === 'number')
        dataType = "numeric";
    else if(typeof dataPoints[0] === 'string' || typeof dataPoints[0] === 'boolean')
    {
        dataType = "category";
        occurrences = dataPoints.reduce(function (acc, curr) {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});
    }


    return {dataPoints, dataType, occurrences};
}