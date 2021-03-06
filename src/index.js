import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

if ("serviceWorker" in navigator) {
  const swUrl = "sw.js";
  navigator.serviceWorker
    .register(swUrl)
    .then(function(reg) {
      console.log("Registration succeeded. Scope is " + reg.scope);
    })
    .catch(function(error) {
      console.log("Registration failed with " + error);
    });
}
