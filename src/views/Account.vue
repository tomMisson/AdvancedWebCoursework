<template>
  <div class="container">
    <template v-if="user">
      <h1> Welcome back {{ user?.displayName }}</h1>
      <br/>
      <p>Email address: {{ user?.email }}</p>
      <p>Account Type: { { accountype } }</p>
      <p>Phone number: { { phonenumber } }</p>
      <p>Address: { { user-adress } }</p>

      <h2>Submitted data</h2>

      <table>
        <thead>
        </thead>

        <tbody>
        </tbody>
      </table>
    </template>

    <template v-else>
      {{notLoggedInRedirect()}}
    </template>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import router from "../router/index";

export default {
  setup() {
    const store = useStore();

    let user = computed(function () {
      return store.state.user?.data
    });

    function notLoggedInRedirect(){
      router.push({path: "/"})
    }

    return {user, notLoggedInRedirect};
  }
}
</script>