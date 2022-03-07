<template>
<div class="container">
  <h1>Register</h1>
  <form :model="form" @submit.prevent="submit">
    <label for="name">Name</label>
    <input
      id="name"
      type="name"
      class="form-control"
      name="name"
      value
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
      value
      required
      autofocus
      v-model="form.email"
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
    <button class="btn btn-primary" type="button" @click="submit">Register</button>

    <div v-if="error.error" class="alert alert-warning" role="alert">
      {{error.errorMessage}}
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

export default {
  setup() {
    const form = reactive({
      name: "",
      email: "",
      password: ""
    });

    const error = reactive({
      error: false,
      errorMessage: "",
    });

    const success= ref(false); 

    function submit() {
      error.error = false;
      firebase
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((data) => {
          data.user.updateProfile({
            displayName: form.name,
          }).then(() => {success.value = true})
          .catch((err) => {
            error.error = true
            error.errorMessage = err
          });
        })
        .catch((err) => {
          error.error = true
          error.errorMessage = err
        });
    }

    return {submit, form, error};
  },
};
</script>