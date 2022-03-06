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

    <!-- -------------------------------------------------------------- -->

    <h2>Manual data insert</h2>
    <form v-if="!isProcessing" class="w-auto p-3 form-group row" @submit.prevent="submit">
      <div class="LEDV col-lg-6">
        <label for="LEDV" class="form-LEDV"
          >Left ventricular end diastolic volume (LEDV):
        </label>
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="LEDV"
          v-model="formModel.ledv"
          required
        />
      </div>

      <div class="REDV col-lg-6">
        <label for="REDV" class="form-REDV"
          >Right ventricular end diastolic volume (REDV) :
        </label>
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="REDV"
          placeholder=""
          v-model="formModel.redv"
          required
        />
      </div>

      <div class="LESV col-lg-6">
        <label for="LESV" class="form-LESV"
          >Left ventricular end systolic volume (LESV) :</label
        >
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="LESV"
          placeholder=""
          v-model="formModel.lesv"
          required
        />
      </div>

      <div class="RESV col-lg-6">
        <label for="RESV" class="form-RESV"
          >Right ventricular end systolic volume (RESV) :
        </label>
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="RESV"
          v-model="formModel.resv"
          placeholder=""
          required
        />
      </div>

      <div class="LVEF col-lg-6">
        <label for="LVEF" class="form-LVEF"
          >Left ventricular ejection fraction (LVEF) :</label
        >
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="LVEF"
          placeholder=""
          v-model="formModel.lvef"
          required
        />
      </div>

      <div class="RVEF col-lg-6">
        <label for="RVEF" class="form-RVEF"
          >Right ventricular ejection fraction (RVEF) :</label
        >
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="RVEF"
          placeholder=""
          required
          v-model="formModel.rvef"
        />
      </div>
      <div class="LVMASS col-lg-6">
        <label for="LVMASS" class="form-LVMASS"
          >Left ventricular mass (LVMASS) :
        </label>
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="LVMASS"
          placeholder=""
          v-model="formModel.lvmass"
          required
        />
      </div>
      <div class="RVMASS col-lg-6">
        <label for="RVMASS" class="form-RVMASS"
          >Right ventricular mass (RVMASS) :</label
        >
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="RVMASS"
          placeholder=""
          v-model="formModel.rvmass"
          required
        />
      </div>
      <div class="LSV col-lg-6">
        <label for="LSV" class="form-LSV">Left systolic volume (LSV) :</label>
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="LSV"
          placeholder=""
          v-model="formModel.lsv"
          required
        />
      </div>

      <div class="RSV col-lg-6">
        <label for="RSV" class="form-RSV">Right systolic volume (RSV) :</label>
        <input
          type="number"
          step="0.0001"
          class="form-control"
          id="RSV"
          placeholder=""
          v-model="formModel.rsv"
          required
        />
      </div>

      <div class="gender col-lg-6">
        <label>Gender:</label>
        <select class="form-select" aria-label="Gender option" required v-model="formModel.gender">
          <option selected disabled value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="MRI col-lg-6">
        <label for="MRI" class="form-MRI">Age at MRI :</label>
        <input
          type="number"
          step="0.0000000000000001"
          class="form-control"
          id="MRI"
          placeholder=""
          v-model="formModel.ageAtMRI"
          required
        />
      </div>

      <p class="mt-5">Patient features:</p>
      <div class="d-flex justify-content-between text-left">
        <label class="form-check-label" for="Fibrosis">
          <input
            class="form-check-input"
            type="checkbox"
            name="Fibrosis"
            id="Fibrosis"
            v-model="formModel.fibrosis"
          />
          Fibrosis
        </label>


        <label class="form-check-label" for="Scarring">
          <input
            class="form-check-input"
            type="checkbox"
            name="Scarring"
            id="Scarring"
            v-model="formModel.scarring"
          />
          Scarring
        </label>

        <label class="form-check-label" for="ApicalHCM">
          <input
            class="form-check-input"
            type="checkbox"
            name="ApicalHCM"
            id="ApicalHCM"
            v-model="formModel.apicalHCM"
          />
          Apical HCM
        </label>

        <label class="form-check-label" for="SuddenCardiacDeath">
          <input
            class="form-check-input"
            type="checkbox"
            name="SuddenCardiacDeath"
            id="SuddenCardiacDeath"
            v-model="formModel.suddenCardiacDeath"
          />
          Sudden cardiac death
        </label>

        <label class="form-check-label" for="Hypertension">
          <input
            class="form-check-input"
            type="checkbox"
            name="Hypertension"
            id="Hypertension"
            v-model="formModel.hypertension"
          />
          Hypertension
        </label>

        <label class="form-check-label" for="Diabetes">
          <input
            class="form-check-input"
            type="checkbox"
            name="Diabetes"
            id="Diabetes"
            v-model="formModel.diabetes"
          />
          Diabetes
        </label>

        <label class="form-check-label" for="Myectomy">
          <input
            class="form-check-input"
            type="checkbox"
            name="Myectomy"
            id="Myectomy"
            v-model="formModel.myectomy"
          />
          Myectomy
        </label>
      </div>

      <p class="mt-5">HCM gene mutations:</p>
      <div class="d-flex justify-content-between text-left">

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.MYH7"/>
          MYH7
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.MYBPC3"/>
          MYBPC3
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.TNNT2"/>
          TNNT2
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.ACTC"/>
          ACTC
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.TPM1"/>
          TPM1
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.TNNCI"/>
          TNNCI
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.TNNI3"/>
          TNNI3
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.MYL2"/>
          MYL2
        </label>

        <label class="form-check-label" for="gene">
          <input class="form-check-input" type="checkbox" name="gene" v-model="formModel.geneMutations.TTN"/>
          TTN
        </label>
      </div>

      <template v-if="!isProcessingManual">
        <button class="mt-4 btn btn-warning" @click="submitManualEntry"> Submit data </button>
      </template>
      <template v-else>
        <p>Processing</p>
      </template>
    </form>

    <div v-if="errorManual.error" class="alert alert-warning my-3 text-center" role="alert">
      {{errorManual.errorMessage}}
    </div>
    <div v-if="successManual.success" class="alert alert-success my-3 text-center" role="alert">
      Successfully added record to the database.
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { firestore } from "../main";
import {
  convertCSVtoJson,
  extractDataAndConvertToModel,
} from "../scripts/fileupload";
import firebase from "firebase";

export default {
  setup() {
    const data = ref([]);
    const type = ref("");
    const isProcessing = ref(false);
    const isProcessingManual = ref(false);
    const error = reactive({
      error: false,
      errorMessage: "",
    });
    const success = reactive({
      success: false,
      numRecords: 0,
    });
    const errorManual = reactive({
      error: false,
      errorMessage: "",
    });
    const successManual = reactive({
      success: false,
    });

    const formInitialState = {
      ledv: "",
      lesv: "",
      resv: "",
      redv: "",
      lvef: "",
      rvef: "",
      lvmass: "",
      rvmass: "",
      lsv: "",
      rsv: "",
      fibrosis: false,
      scaring: false,
      gender: "",
      ageAtMRI: "",
      atypicalHCM: false,
      hypertension: false,
      diabetes: false,
      myectomy: false,
      geneMutations: {
        MYH7: false,
        MYBPC3: false,
        TNNT2: false,
        ACTC: false,
        TPM1: false,
        TNNCI: false,
        TNNI3: false,
        MYL2: false,
        TTN: false,
      },
    };
    const formModel = reactive({ ...formInitialState });

    function onFileUploaded(event) {
      var reader = new FileReader();
      try {
        reader.onload = onReaderLoad;
      } catch (err) {
        error.error = true;
        error.errorMessage = err;
      }

      type.value = event.target.files[0].type;
      reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event) {
      var obj = {};

      switch (type.value) {
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

      data.value = extractDataAndConvertToModel(obj);
    }

    function onSubmit() {
      isProcessing.value = true;

      data.value.forEach((item) => {
        item["owner"] = firebase.auth()?.currentUser?.uid;
        item["createdAt"] = firebase.firestore.FieldValue.serverTimestamp();
        firestore
          .collection("patientData")
          .add(item)
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

    function ValidateForm() {
      if (
        formModel.ledv.length > 0 &&
        formModel.lesv.length > 0 &&
        formModel.resv.length > 0 &&
        formModel.redv.length > 0 &&
        formModel.lvef.length > 0 &&
        formModel.rvef.length > 0 &&
        formModel.lvmass.length > 0 &&
        formModel.rvmass.length > 0 &&
        formModel.lsv.length > 0 &&
        formModel.rsv.length > 0 &&
        formModel.gender.length > 0 &&
        formModel.ageAtMRI.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    }

    function submitManualEntry() {
      isProcessingManual.value = true;
      if (ValidateForm()) {
        errorManual.error = true;
        errorManual.errorMessage = "Please fill out all fields.";
        isProcessingManual.value = false;
        return;
      }
      
      formModel.geneMutations = Object.keys(formModel.geneMutations).filter(key => myObject[key]);

      firestore
        .collection("patientData")
        .add({
          ...formModel,
          owner: firebase.auth()?.currentUser?.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          successManual.success = true;
          isProcessingManual.value = false;
          Object.assign(formModel, formInitialState);
        })
        .catch((error) => {
          isProcessingManual.value = false;
          errorManual.error = true;
          errorManual.errorMessage = error;
          console.error("Error adding document: ", error);
        });
    }

    return {
      onFileUploaded,
      onSubmit,
      isProcessing,
      error,
      success,
      submitManualEntry,
      errorManual,
      successManual,
      formModel,
      isProcessingManual,
    };
  },
};
</script>
