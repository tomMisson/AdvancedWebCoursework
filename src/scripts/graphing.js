import { firestore } from "../main"

export async function getSelectionsForGraphing() {
    const dimensions = [];
    const mutationTypes = [];

    await firestore.collection("patientData")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                Object.keys(data).forEach((key) => {
                    if (key !== "mutatedGenes" && key !== "owner" && key !== "createdAt") {
                        dimensions.indexOf(key) === -1 ? dimensions.push(key) : null;
                    }
                    else if (key === "mutatedGenes") {
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

    return { dimensions, mutationTypes }
}

export async function getDataForDimension(gene, dimensionName, dimensionName2) {
    const dataPoints = [];
    const dataPoints2 = [];
    let dataType = "";
    let dataType2 = "";
    let occurrences = {};

    if (dimensionName === "") {
        return dataPoints;
    }

    await firestore.collection("patientData")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            if(typeof data[dimensionName] !== 'undefined'){
                if (gene === ""){
                    dataPoints.push(data[dimensionName]);
                }
                else {
                    if (data.mutatedGenes.includes(gene)){
                        dataPoints.push(data[dimensionName]);
                    }
                }
            }
            if(typeof data[dimensionName2] !== 'undefined'){
                if (gene === ""){
                    dataPoints2.push(data[dimensionName2]);
                }
                else {
                    if (data.mutatedGenes.includes(gene)){
                        dataPoints2.push(data[dimensionName2]);
                    }
                }
            }
        })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    if (typeof dataPoints[0] === 'number')
        dataType = "numeric";
    else if (typeof dataPoints[0] === 'string' || typeof dataPoints[0] === 'boolean') {
        dataType = "category";
        occurrences = dataPoints.reduce(function (acc, curr) {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});
    }

    if (typeof dataPoints2[0] === 'number')
        dataType2 = "numeric";
    else if (typeof dataPoints2[0] === 'string' || typeof dataPoints2[0] === 'boolean') {
        dataType2 = "category";
        occurrences = dataPoints2.reduce(function (acc2, curr2) {
            return acc2[curr2] ? ++acc2[curr2] : acc2[curr2] = 1, acc2
        }, {});
    }

    return { dataPoints, dataPoints2, dataType, dataType2, occurrences };
}