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

      <table>
        <thead></thead>

        <tbody></tbody>
      </table>
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
import { store } from "../main";

export default {
  setup() {
    let user = computed(function () {
      return store.getters.userData;
    });

    function notLoggedInRedirect() {
      router.push({ path: "/" });
    }

    return { user, notLoggedInRedirect };
  },
};
</script>
