const expectedResponse={
    ledv: {
        type: Number
    },
    lesv: {
        type: Number
    },
    lsv: {
        type: Number
    },
    lvef: {
        type: Number
    },
    lvmass: {
        type: Number
    },
    redv: {
        type: Number
    },
    resv: {
        type: Number
    },
    rsv: {
        type: Number
    },
    rvef: {
        type: Number
    },
    scar: {
        type: Boolean
    },
    gender: {
        type: String
    },
    AgeatMRI: {
        type: Number
    },
    apicalHCM: {
        type: Boolean
    },
    suddenCardiacDeath: {
        type: Boolean
    },
    hypertension: {
        type: Boolean
    },
    diabetes: {
        type: Boolean
    },
    myectomy: {
        type: Boolean
    },
    mutatedGenes: {
        type: Array
    }
}

const expectedGenes = [
    "MYH7",
    "MYBPC3",
    "TNNT2",
    "ACTC",
    "TPM1",
    "TNNCI",
    "TNNI3",
    "MYL2",
    "TTN"
]

export function convertCSVtoJson(csvString){
    const lines = csvString.split('\n');
    const headers = lines[0].split(',');

    let result=[];

    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
    }

    return result;
}

export function extractDataAndConvertToModel(jsonArray){
    let resultArray = [];

    jsonArray.forEach((item) => {
        let obj = {}
        
        Object.keys(expectedResponse).forEach(key => {
            if (expectedResponse[key].type == Number)
            {
                if(isNaN(parseFloat(item[key])))
                {
                    obj[key] = "";
                }
                else{
                    if (key === "AgeatMRI"){
                        obj["ageAtMRI"] = parseFloat(item[key]);
                    }
                    else{
                        obj[key] = parseFloat(item[key]);
                    }
                }
            }
            else if (expectedResponse[key].type == Boolean)
            {
                obj[key] = item[key] == "1" || item[key] == "true"? true: false;
            }
            else if (expectedResponse[key].type == String)
            {
                if (key === "gender"){
                    obj[key] = item["female"] == "1" ? 'female' : 'male';
                }
                else{
                    obj[key] = item[key];
                }
            }
            else if (expectedResponse[key].type == Array)
            {
                let array = [];
        
                Object.keys(item).forEach(key => {
                    if (key.includes("mutation") || expectedGenes.some(r=> key.includes(r))){
                        if(item[key] == 1){
                            array.push(key.replace('mutation', ''))
                        }
                    }
                })

                obj[key] = array;
            }
            else {
                obj[key] = item[key];
            }
        });

        if(obj.mutatedGenes.length != 0){
            resultArray.push(obj);
        }
        
    }, [])

    return resultArray;
}