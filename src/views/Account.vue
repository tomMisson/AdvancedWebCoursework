<template>
  <div class="container">
    <template v-if="user">
      <h1>Welcome back {{ user?.displayName }}</h1>
      <br />
      <p>Email address: {{ user?.email }}</p>
      <p>Account Type: { { accountype } }</p>
      <p>Phone number: {{ number }}</p>
      <p>Address: {{ address }}</p>

      <h2>Submitted data</h2>

      <table>
        <thead></thead>

        <tbody></tbody>
      </table>
    </template>

    <template v-else>
      {{ notLoggedInRedirect() }}
    </template>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import router from "../router/index";
import firebase from "firebase";

export default {
  setup() {
    const store = useStore();

    let user = computed(function () {
      return store.state.user?.data;
    });

    let number = ref("");
    let address = ref("");

    const db = firebase.firestore().collection("/users").doc(user.value.email);

    db.get().then((doc) => {
      if (doc.exists) {
        number.value = doc.data().phonenumber; 
        address.value = doc.data().address;
        } else {
        console.log("No such document!");
      }
    });

    function notLoggedInRedirect() {
      router.push({ path: "/" });
    }

    return { user, notLoggedInRedirect, number, address };
  },
};
</script>