<template>
  <Navbar :isLoggedIn="isLoggedIn" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    let isLoggedIn = computed(function () {
      return store.state.user.loggedIn;
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
</style>
