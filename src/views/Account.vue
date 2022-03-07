<template>
  <template v-if="user">
    <h1> Welcome back {{ user?.displayName }}</h1>
    <br/>
    <h2>  Email address : {{ user?.email }}</h2>
    <h2> Account Type : { { accountype } }</h2>
    <h2> Phone number : { { phonenumber } }</h2>
    <h2> Address : { { user-adress } }</h2>
  </template>

  <template v-else>
    {{notLoggedInRedirect()}}
  </template>
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