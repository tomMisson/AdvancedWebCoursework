import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import store from "./store";
import Vuex from "vuex";
import VueApexCharts from "vue3-apexcharts";

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
const auth = firebase.auth();

const TEST_MODE = true;

if (TEST_MODE) {
  firestore.enablePersistence()
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          console.error('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
      } else if (err.code == 'unimplemented') {
          console.error("Error: Firebase persistence is not available on this browser");
      }
  });
}

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("setUser", user);
});

app.use(router).use(store).use(Vuex).use(VueApexCharts).mount("#app");

export { firestore, auth, store };
