<template>
  <div class="container">
    <h2>Forgotten Password?</h2>
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      class="form-control w-75"
      name="email"
      value
      required
      autofocus
      v-model="email"
    />
    <button class="btn btn-primary my-2" @click="resetPassword" id="resetpassword-button" >Send</button>
    <br />
    <router-link to="/register"> Need an account ?</router-link>

    <div v-if="error.error" class="alert alert-warning w-75 my-3" role="alert">
      {{ error.errorMessage }}
    </div>

    <div v-if="success" class="alert alert-success w-75 my-3" role="alert">
      Email has been sent to you, please check your emails and verify.
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const error = reactive({
      error: false,
      errorMessage: "",
    });
    const email = ref("");
    const success = ref(false);

    function resetPassword() {
      error.error = false;

      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then(() => {
          success.value = true;
        })
        .catch((err) => {
          error.error = true;
          error.errorMessage = err;
        });
    }

    return { email, resetPassword, error, success };
  },
  data() {
    return {
      isShowing: false,
    };
  },
};
</script>
