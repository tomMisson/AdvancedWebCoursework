<template>
  <div class="container">
    <template v-if="user">
      <h1>Welcome back {{ user?.displayName }}</h1>
      <br />
      <p>Email address: {{ user?.email }}</p>
      <p>Account Type: {{ user?.accountType }}</p>
      <p>Phone number: {{ user?.phonenumber }}</p>
      <p>Address: {{ user?.address }}</p>

      <h2>Submitted data</h2>

      <div id="userData" @click="handleClick">
      </div>
    </template>
  </div>

  <template>
    <div class="alert alert-warning my-3" role="alert">
      Please sign in to an account to view this page.
    </div>
  </template>
    
</template>

<script>
import { computed, ref } from "vue";
import router from "../router/index";
import { firestore, store } from "../main";
import firebase from "firebase";

export default {
  setup() {
    const userDocs = ref([]);

    let user = computed(function () {
      return store.getters.userData;
    });
    getData();

    console.log("User: "+ firebase.auth().currentUser.uid)

    function handleClick(e) {
      if (e.target.matches("#delete-btn")) {
        deleteDocument(e.target.parentElement);
      } else if (e.target.matches("#edit-btn")) {
        router.push({ path: "/editdata/" + e.target.parentElement.id + "" });
      }
    }

    function getData() {
      var userId = firebase.auth().currentUser.uid;
      firestore
        .collection("patientData")
        .where("owner", "==", userId)
        .get()
        .then((querySnapshot) => {
          displayData(querySnapshot);
        });
    }

    function displayData(querySnapshot) {
      var count = 0;
      querySnapshot.forEach((doc) => {
        userDocs.value.push(doc);
        count++;
        var htmlToSet = "";
        var card = document.getElementById("userData");
        htmlToSet =
          '<div class="card" id="' +
          doc.id +
          '"> <div class="card-header" id="' +
          '"> <h5 class="mb-0"> <button class="btn" data-bs-toggle="collapse" ' +
          ' data-bs-target="#collapse-' +
          count +
          '" aria-expanded="false" aria-controls="collapse-' +
          count +
          '" ' +
          "> Document ID: " +
          doc.id +
          ' </button> </h5> </div> <div id="collapse-' +
          count +
          '" ' +
          ' class="collapse" aria-labelledby="' +
          count +
          '" data-bs-parent="#userData" > ' +
          ' <div class="card-body"> <table class="table table-sm userData"> <thead> ' +
          ' <tr> <th scope="col">Patient Data</th> <th class="col-md-3" ' +
          ' scope="col">Value</th> </tr> </thead> <tbody> ';

        for (const prop in doc.data()) {
          var tableRow =
            '<tr> <th scope="row">' +
            prop +
            "</th> <td> " +
            doc.get(prop) +
            " </td> </tr>";
          htmlToSet += tableRow;
        }

        htmlToSet +=
          '</tbody></table> <div id="' +
          doc.id +
          '" class="d-flex justify-content-center">' +
          ' <button type="button" id="edit-btn" class="btn btn-primary btn-block col-p-3 ' +
          ' action">Edit</button> <button type="button" id="delete-btn" class="btn btn-danger ' +
          " btn-block action " +
          doc.id +
          '">Delete</button> </div> </div> </div> </div> ';

        card.innerHTML += htmlToSet;
      });
    }

    function deleteDocument(docCard) {
      firestore
        .collection("patientData")
        .doc(docCard.id)
        .get()
        .then((doc) => {
          doc.ref.delete();
          document.getElementById(docCard.id).remove();
        });
    }

    function notLoggedInRedirect() {
      router.push({ path: "/" });
    }

    return { user, notLoggedInRedirect, getData, deleteDocument, handleClick, userDocs };
  },
};
</script>
