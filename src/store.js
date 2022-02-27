import Vuex from "vuex";
import { firestore } from "./main";

const initialState = {
  user: {
    loggedIn: false,
    data: {
      displayName: "",
      email: "",
    }
  }
};

export default new Vuex.Store({
  state: initialState,
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        firestore.collection("users").doc(user.uid).get()
        .then(snapshot => {
          return snapshot.data();
        })
        .then((userDataFromDb) => {
          commit("SET_USER", {
            displayName: user.displayName,
            email: user.email,
            ...userDataFromDb
          })
          .catch(err => {
            console.error("Error getting documents", err);
          })
        });
      } else {
        commit("SET_USER", null);
      }
    },
  }
});