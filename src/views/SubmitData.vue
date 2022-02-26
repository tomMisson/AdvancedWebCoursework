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
  }
}
</script>
<style>

</style>