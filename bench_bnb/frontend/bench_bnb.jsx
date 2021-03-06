import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from './components/root'
import { logout, login, signup} from "./actions/session_actions";
import {fetchBenches} from './actions/bench_actions'


document.addEventListener("DOMContentLoaded", () => {
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  // window.fetchBenches = fetchBenches;
  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchBenches = fetchBenches;
  
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});