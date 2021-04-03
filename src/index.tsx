import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("lyrical")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
