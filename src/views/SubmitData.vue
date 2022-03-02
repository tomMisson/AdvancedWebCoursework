<template>
  <div class="container">
    <h1>Submit data</h1>
    <p>To submit data to visualise and share with others, you have 2 options, you can either: 
      <ul>
        <li>upload a file with the nessecary data or</li>
        <li>manually enter the data for each case study one by one below</li>
      </ul> 
    </p>
    <h2>Upload a file</h2>
    <form @submit.prevent="submit">
      <div class="form-group my-5">
        <input id="upload" type="file" @change="onFileUploaded" class="form-control-file" accept="text/json text/csv" />
        <template v-if="!isProcessing">
          <button class="btn btn-warning" @click="onSubmit"> Submit data </button>
        </template>

        <template v-else>
          <p>Populating</p>
        </template>
      </div>
    </form>

     <div v-if="error.error" class="alert alert-warning w-75 my-3" role="alert">
      {{error.errorMessage}}
    </div>
    <div v-if="success.success" class="alert alert-success w-75 my-3" role="alert">
      Successfully added {{success.numRecords}} records to the database.
    </div>

     <form id="manualdata" v-if="!isProcessing" class="w-auto p-3 was-validated">
    <h2> Manual data insert</h2>
    <div class="Cardiomyopathytype">
      <select
        class="Cardiomyopathy-select"
        aria-label="Cardiomyopathy Type"
        required
      >
        <option selected disabled value="">Choose Cardiomyopathy Type</option>
        <option value="1">Dilated cardiomyopathy</option>
        <option value="2">Hypertrophic cardiomyopathy</option>
        <option value="3">Restrictive cardiomyopathy</option>
        <option value="4">Arrhythmogenic right ventricular dysplasia</option>
        <option value="5">Unclassified cardiomyopathy</option>
      </select>
      <div id="Cardiomyopathyvalidation" class="invalid-feedback">
        Please select a valid Cardiomyopathy Type.
      </div>
      <p></p>
    </div>

    <div class="LEDV">
      <label for="LEDV" class="form-LEDV"
        >Left ventricular end diastolic volume (LEDV):
      </label>
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="LEDV"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="REDV">
      <label for="REDV" class="form-REDV"
        >Right ventricular end diastolic volume (REDV) :
      </label>
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="REDV"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="LESV">
      <label for="LESV" class="form-LESV"
        >Left ventricular end systolic volume (LESV) :</label
      >
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="LESV"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="RESV">
      <label for="RESV" class="form-RESV"
        >Right ventricular end systolic volume (RESV) :
      </label>
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="RESV"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="LVEF">
      <label for="LVEF" class="form-LVEF"
        >Left ventricular ejection fraction (LVEF) :</label
      >
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="LVEF"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="RVEF">
      <label for="RVEF" class="form-RVEF"
        >Right ventricular ejection fraction (RVEF) :</label
      >
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="RVEF"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="LVMASS">
      <label for="LVMASS" class="form-LVMASS"
        >Left ventricular mass (LVMASS) :
      </label>
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="LVMASS"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="RVMASS">
      <label for="RVMASS" class="form-RVMASS"
        >Right ventricular mass (RVMASS) :</label
      >
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="RVMASS"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="LSV">
      <label for="LSV" class="form-LSV">Left systolic volume (LSV) :</label>
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="LSV"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="RSV">
      <label for="RSV" class="form-RSV">Right systolic volume (RSV) :</label>
      <input
        type="number"
        step = "0.0001"
        class="form-control"
        id="RSV"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <p></p>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Scarring"
        value="option1"
      />
      <label class="form-check-label" for="Fibrosis">Fibrosis</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Scarring"
        value="option2"
      />
      <label class="form-check-label" for="Scarring">Scarring</label>
    </div>
    <p></p>
    <div class="gender">
      <select class="form-select" aria-label="Gender option" required>
        <option selected disabled value="">Select Your Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Prefer not to say</option>
      </select>
      <div id="Gendervalidation" class="invalid-feedback">
        Please select a valid Gender.
      </div>
    </div>
    <p></p>

    <div class="MRI">
      <label for="MRI" class="form-MRI">Age at MRI :</label>
      <input
        type="number"
        step = "0.0000000000000001"
        class="form-control"
        id="MRI"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <p>Apical HCM :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="HCM" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="HCM" id="No" checked />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Sudden cardiac death :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="SCD" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="SCD" id="No" checked />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Hypertension :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Hypertension"
        id="Yes"
      />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Hypertension"
        id="No"
        checked
      />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Diabetes :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Diabetes" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Diabetes"
        id="No"
        checked
      />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Myectomy :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Myectomy" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Myectomy"
        id="No"
        checked
      />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>HCM gene mutations :</p>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="MYH7" value="MYH7" />
      <label class="form-check-label" for="MYH7">MYH7</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="MYBPC3"
        value="MYBPC3"
      />
      <label class="form-check-label" for="MYBPC3">MYBPC3</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNT2"
        value="TNNT2"
      />
      <label class="form-check-label" for="TNNT2">TNNT2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="ACTC" value="ACTC" />
      <label class="form-check-label" for="ACTC">ACTC</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="TPM1" value="TPM1" />
      <label class="form-check-label" for="TPM1">TPM1</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNCI"
        value="TNNCI"
      />
      <label class="form-check-label" for="TNNCI">TNNCI</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNI3"
        value="TNNI3"
      />
      <label class="form-check-label" for="TNNI3">TNNI3</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="MYL2" value="MYL2" />
      <label class="form-check-label" for="MYL2">MYL2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="TTN" value="TTN" />
      <label class="form-check-label" for="TTN">TTN</label>
    </div>

    <p></p>
    <button class="btn btn-warning" @click="onSubmit">Submit data</button>

    <p></p>
  </form>

  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { firestore } from "../main";
import { convertCSVtoJson, extractDataAndConvertToModel } from "../scripts/fileupload";
import firebase from "firebase";

export default {
  setup(){
    const data = ref([]);
    const type = ref("");
    const isProcessing = ref(false);
    const error = reactive({
      error: false,
      errorMessage: "",
    });
    const success= reactive({
      success: false,
      numRecords: 0,
    });

    const uid = firebase.auth()?.currentUser?.uid;

    function onFileUploaded(event) {
      var reader = new FileReader();
      try{
        reader.onload = onReaderLoad;
      }
      catch(err) {
        error.error = true
        error.errorMessage = err
      }
      
      type.value = event.target.files[0].type;
      reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
      var obj = {}
            
      switch (type.value){
        case "application/vnd.ms-excel":
          obj = convertCSVtoJson(event.target.result);
          break;
        case "text/csv":
          obj = convertCSVtoJson(event.target.result);
          break;
        case "application/json":
          obj = JSON.parse(event.target.result);
          break;
        default:
          throw "Unsupported document type. Please upload either a JSON or CSV document";
      }

      data.value = extractDataAndConvertToModel(obj)
    }

    function onSubmit(){
      isProcessing.value = true;

      data.value.forEach(item => {
        item["owner"] = uid;
        item["createdAt"] =  firebase.firestore.FieldValue.serverTimestamp();
        firestore.collection("patientData").add(item)
        .then(() => {
          success.numRecords += 1;
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      });

      isProcessing.value = false;
      success.success = true;
    }

    return {onFileUploaded, onSubmit, isProcessing, error, success}
  }
}
</script>
<style>

</style>
