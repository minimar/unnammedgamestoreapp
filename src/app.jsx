import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./components/root.jsx"

document.addEventListener("DOMContentLoaded", (e) => {
  let container = document.getElementById("app")

  ReactDOM.render(<Root />, container);
})
