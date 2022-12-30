import React from "react";
import HomePage from "./Pages/HomePage";
import Router from "./Router";

// window.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
const App = () => {
  return (
    <>
      <HomePage />
      <Router />
    </>
  );
};

export default App;
