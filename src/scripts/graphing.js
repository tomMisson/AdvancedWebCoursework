export const dimensions = [
    // in the next itteration, we get these from the DB
    // Will also need to get keys for this
    "ledv/redv",
    "lesv/resvc",
    "lvef/rvef",
    "lvmass/rvmass",
    "lsv/rsv",
    "scar",
    "gender",
    "Age at MRI",
    "apical HCM",
    "sudden cardiac death",
    "hypertension",
    "diabetes",
    "myectomy",
];

export const mutationTypes = [
    // in the next itteration, we get these from the DB
    "MYH7","MYBPC3","TNNT2","ACTC","TPM1","TNNCI","TNNI3","MYL2","TTN"
];

export const CMtypes = [
    {
        name: "Hypertrophic",
        shortName: "HCM",
    },
    {
        name: "Dilated",
        shortName: "DIL",
    },
    {
        name: "Restrictive",
        shortName: "RES",
    }
];