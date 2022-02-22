<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light justify-content-end shadow-lg p-3 mb-5 bg-white rounded"
  >
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li v-if="isLoggedIn" class="nav-item">
        <router-link to="/account" class="nav-link">Account</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/help" class="nav-link">Help</router-link>
      </li>
      <li v-if="!isLoggedIn" class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li v-if="isLoggedIn" class="nav-item">
        <a href="#" class="nav-link" @click="logOut">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase";
import router from "../router/index";

export default {
  props: {
    isLoggedIn: Boolean,
  },
  setup() {
    function logOut() {
      firebase.auth().signOut();
      router.push({ path: "/account" });
    }

    return { logOut };
  },
};
</script>
