<template>
  <Navbar :isLoggedIn="isLoggedIn" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { computed } from "vue";
import { store } from "./main";

export default {
  setup() {
    let isLoggedIn = computed(function () {
      return store.getters.isLoggedIn;
    });

    return { isLoggedIn };
  },
  components: {
    Navbar,
  },
};
</script>

<style>
.container:first-of-type {
  margin-top: 30px;
}

h1 {
  text-align: left;
}
</style>
