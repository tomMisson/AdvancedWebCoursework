<template>
  <div class="container">
    <h1>Register</h1>
    <form :model="form" @submit.prevent="submit">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        required
        autofocus
        v-model="form.name"
      />
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        class="form-control"
        name="email"
        required
        v-model="form.email"
      />
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        name="address"
        v-model="form.address"
      />
      <label for="phonenumber">Phone Number</label>
      <input
        id="phonenumber"
        type="tel"
        class="form-control"
        name="phonenumber"
        v-model="form.phonenumber"
      />
      <label for="affiliation">Institutional Affiliation</label>
      <input
        id="affiliation"
        type="text"
        class="form-control"
        name="affiliation"
        value
        required
        v-model="form.affiliation"
      />
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        class="form-control"
        name="password"
        required
        v-model="form.password"
      />
      <button class="btn btn-primary my-3" type="button" @click="submit">
        Register
      </button>

      <div v-if="error.error" class="alert alert-warning" role="alert">
        {{ error.errorMessage }}
      </div>

      <div v-if="success" class="alert alert-success" role="alert">
        Email has been sent to you, please check your emails and verify.
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { reactive, ref } from "vue";
import router from "../router";
import { firestore } from "../main";

export default {
  setup() {
    const form = reactive({
      id: "",
      name: "",
      email: "",
      password: "",
      address: "",
      phonenumber: "",
      affiliation: "",
    });

    const error = reactive({
      error: false,
      errorMessage: "",
    });

    const success = ref(false);

    function validateForm() {
      if (
        form.name.length > 0 &&
        form.email.length > 0 &&
        form.password.length > 0 &&
        form.address.length > 0 &&
        form.phonenumber.length > 0 &&
        form.affiliation.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    }

    function submit() {
      error.error = false;
      if (validateForm()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(form.email, form.password)
          .then((firebase) => {
            firebase.user
              .updateProfile({
                displayName: form.name,
                email: form.email,
              })
              .catch((err) => {
                error.error = true;
                error.errorMessage = err;
              });

            return firebase.user;
          })
          .then((data) =>
            firestore.collection("users").doc(data?.uid).set({
              name: form.name,
              email: form.email,
              address: form.address,
              phonenumber: form.phonenumber,
              affiliation: form.affiliation,
              accountType: "user",
            })
          )
          .then(() => router.push({ path: "/account" }))
          .catch((err) => {
            error.error = true;
            error.errorMessage = err;
          });
      } else {
        error.error = true;
        error.errorMessage =
          "Failed to validate form, please ensure all fields are filled out.";
      }
    }

    return { submit, form, error, success };
  },
};
</script>
