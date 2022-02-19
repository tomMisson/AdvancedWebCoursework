<template>
  <div class="emailcontainer">
      <h2>Forgotten password?</h2>
       <input type = "text" class="inputbox"  placeholder="Email" v-model="email"/>
     <input @click="isShowing ^= true" type = "submit" class = "li" value="Login">
     <h2 v-show="isShowing"> Email has been sent to you, Please check and verfity. </h2>  
     <router-link  v-show="isShowing" tag="div" class-active="active" to="/Login"
              >Login</router-link
            >
    <p> Need an account ? </p>
  </div>
  
  
</template>

<script>
import {ref} from 'vue';
import { useRoute } from "vue-router"; 
import firebase from 'firebase';
export default {
setup() {
    const user = "Emails send";
    const email = ref("");
    const route = useRoute(); 
    const Login = ()=>{
      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .catch(err =>alert(err.message));
    }
   

    return { route, email, Login, user };
  },
   data() {
    return {
      isShowing:false,
    }
  }
}
</script>

<style>

h2{
     margin-top: 50px;
     font-size: 40px;
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
.inputbox{
    margin-top: 100px;
    font-size:14pt;
}
div.emailcontainer{
  background-color: lightgrey;
  width: 580px;
  border: 15px solid white;
  padding: 80px;
  margin: auto;
  height: 800px;
}
</style>
