import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import store from "./store";
import Vuex from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyB86JL8qR8tG-KMiMHuCuVN5VgkyZfepKw",
  authDomain: "advancedwebassignment.firebaseapp.com",
  projectId: "advancedwebassignment",
  storageBucket: "advancedwebassignment.appspot.com",
  messagingSenderId: "451838322437",
  appId: "1:451838322437:web:819a6ba925591c8ac8396c",
};

const app = createApp(App);
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(Vuex);
app.mount("#app");

export { firestore };
