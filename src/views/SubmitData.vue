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
    <h2>Manual data insert</h2> 
    <form id="manualdata" v-if="!isProcessing"> 
     <h5> (All input must be a number)</h5>
  <p>Left ventricular end diastolic volume (LEDV) :</p>
         <input type="text" v-model="LEDV" @keypress="isNumber($event)"> 
  <p>Right ventricular end diastolic volume (REDV) :</p>
        <input type="text" v-model="REDV" @keypress="isNumber($event)">
    <p>Left ventricular end systolic volume (LESV) : </p>
        <input type="text" v-model="LESV" @keypress="isNumber($event)">
    <p>Right ventricular end systolic volume (RESV) :</p>
         <input type="text" v-model="RESV" @keypress="isNumber($event)">
    <p>Left ventricular ejection fraction (LVEF) :</p>
        <input type="text" v-model="LVEF" @keypress="isNumber($event)"> 
    <p>Right ventricular ejection fraction (RVEF) :</p>
        <input type="text" v-model="RVEF" @keypress="isNumber($event)">
    <p>Left ventricular mass (LVMASS) : </p>
        <input type="text" v-model="LVMASS" @keypress="isNumber($event)">
    <p>Right ventricular mass (RVMASS) : </p>
        <input type="text" v-model="RVMASS" @keypress="isNumber($event)">
    <p>Left systolic volume (LSV) :</p>
        <input type="text" v-model="LSV" @keypress="isNumber($event)">
    <p>Right systolic volume (RSV) : </p>
        <input type="text" v-model="LSV" @keypress="isNumber($event)">

   <p>Fibrosis or Scarring：
    <select v-model="scar">
      <option>fibrosis</option>
      <option>scarring</option>
    </select>
   </p>
   <p>Gender :
    <select v-model="gender">
      <option>Male</option>
      <option>Female</option>
      <option>Prefer not to say</option>
    </select>
   </p>

    <p>Age at MRI :
    <input type="text" v-model="MRI" @keypress="isNumber($event)">
  </p>
    <p>Apical HCM :
    <input type="radio" name="HCM" value="Yes" v-model="HCM"> Yes
    <input type="radio" name="HCM" value="No" v-model="HCM"> No
  </p>

    <p>Sudden cardiac death : 
    <input type="radio" name="SCD" value="Yes" v-model="SCD"> Yes
    <input type="radio" name="SCD" value="No" v-model="SCD"> No
  </p>
    <p>Hypertension : 
    <input type="radio" name="Hypertension" value="Yes" v-model="Hypertension"> Yes
    <input type="radio" name="Hypertension" value="No" v-model="Hypertension"> No
  </p>
    <p>Diabetes : 
    <input type="radio" name="diabetes" value="Yes" v-model="diabetes"> Yes
    <input type="radio" name="diabetes" value="No" v-model="diabetes"> No
  </p>
    <p>Myectomy : 
    <input type="radio" name="myectomy" value="Yes" v-model="myectomy"> Yes
    <input type="radio" name="myectomy" value="No" v-model="myectomy"> No
  </p>
   <button class="btn btn-warning" @click="onSubmit"> Submit data </button>
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
  },
   methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
  
}
</script>
<style>

</style>
