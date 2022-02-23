<template>
 <div class="emailcontainer">
    <h2>Forgotten Password?</h2>
    <form @submit.prevent="RestPassword">
      <input v-model="email" type="text" class="textbox" placeholder="Email" />
      <input @click="isShowing ^= true" type="submit" class="li" value="Send" />
      <h1 v-show="isShowing">
        Email has been sent to you, Please check and verfity.
      </h1>
      <p>Need an account ?</p>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import { useRoute } from "vue-router";
import firebase from 'firebase';
export default {
  setup() {
    const email = ref("");
    const route = useRoute();
    const RestPassword = () => {
      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .catch((err) => alert(err.message));
    };
    return { RestPassword, email, route };
  },
  data() {
    return {
      isShowing: false,
    };
  },
};
</script>

<style>
h2{
  margin-top: 50px;
  font-size: 30px;
}
.textbox{
  width: 100%;
  height:40px;
  font-size:14pt;
}
.li{
  margin-top: 20px;
  font-size:14pt;
}
div.emailcontainer{
  background-color: lightgrey;
  width: 280px;
  border: 15px solid white;
  padding: 80px;
  margin: auto;
  height: 500px;
}
</style>
