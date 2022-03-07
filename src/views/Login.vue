<template>
  <div class="container">
    <h1>Login</h1>
    <form :model="form" @submit.prevent="submit">
      <div class="form-group">
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
      </div>
      <button class="btn btn-primary my-3" type="button" @click="submit">
        Login
      </button>
      <router-link to="/register"
        ><button class="btn btn-primary m-3" type="button">
          Register
        </button></router-link
      >
    </form>
    <div class="login">
      <p>
        Forgot your Password?
        <router-link to="/resetpassword">Reset Password</router-link>
      </p>
    </div>
    <div v-if="error.error" class="alert alert-warning" role="alert">
      {{ error.errorMessage }}
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { reactive } from "vue";
import router from "../router/index";

export default {
  setup() {
    const error = reactive({
      error: false,
      errorMessage: "",
    });

    const form = reactive({
      email: "",
      password: "",
    });

    function submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then((res) => (res?.user ? router.push({ path: "/account" }) : null))
        .catch((err) => {
          error.error = true;
          error.errorMessage = err;
        });
    }

    return { form, submit, error };
  },
};
</script>
