import React from "react";
import ReactDOM from "react-dom";
import { logout, login, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});