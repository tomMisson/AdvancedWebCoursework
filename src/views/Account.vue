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

      <div id="userData"></div>
    </template>

    <template v-else>
      <div class="alert alert-warning my-3" role="alert">
        Please sign in to an account to view this page.
      </div>
    </template>
  </div>
</template>

<script>
import { computed } from "vue";
import router from "../router/index";
import { firestore, store } from "../main";
import firebase from "firebase";

export default {
  setup() {
    let user = computed(function () {
      return store.getters.userData;
    });

    getData();

    function getData() {
      console.log("getdata function hit");
      var userId = firebase.auth().currentUser.uid;
      console.log(userId);
      firestore
        .collection("patientData")
        .where("owner", "==", userId)
        .get()
        .then((querySnapshot) => {
          displayData(querySnapshot);
        });
    }

    function displayData(querySnapshot) {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        var card = document.getElementById("userData");
        card.innerHTML =
          '<div class="card" id="userIdCard"> <div class="card-header" id="' +
          '"> <h5 class="mb-0"> <button class="btn" data-toggle="collapse" ' +
          ' data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1" ' +
          '> Document ID: 1232543 </button> </h5> </div> <div id="collapse-1" ' +
          ' class="collapse show" aria-labelledby="1" data-parent="#userData" > ' +
          ' <div class="card-body"> <table class="table table-sm userData"> <thead> ' +
          ' <tr> <th scope="col">Patient Data</th> <th class="col-md-3" ' +
          ' scope="col">Value</th> </tr> </thead> <tbody> ' +
          '<tr> <th scope="row">something</th> <td> '+ doc.data().testing +' </td> ' +
          ' </tr> <tr> <th scope="row">true/false</th> <td>true</td> </tr> ' +
          '<tr> <th scope="row">value</th> <td>44.13444</td> </tr> </tbody> ' +
          ' </table> <div class="d-flex justify-content-center">' +
          ' <button type="button" class="btn btn-primary btn-block col-p-3 ' +
          ' action">Edit</button> <button type="button" class="btn btn-danger ' +
          ' btn-block action">Delete</button> </div> </div> </div> </div> ';
      });
    }

    function notLoggedInRedirect() {
      router.push({ path: "/" });
    }

    return { user, notLoggedInRedirect, getData };
  },
};
</script>

<style>
.card .action {
  margin: 0.2%;
}
</style>