import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB86JL8qR8tG-KMiMHuCuVN5VgkyZfepKw",
    authDomain: "advancedwebassignment.firebaseapp.com",
    projectId: "advancedwebassignment",
    storageBucket: "advancedwebassignment.appspot.com",
    messagingSenderId: "451838322437",
    appId: "1:451838322437:web:819a6ba925591c8ac8396c"
  };

firebase.initializaApp(firebaseConfig);


//Test change
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
