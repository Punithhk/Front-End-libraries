import React from "react";
import App from "./component/App";
import { render } from "react-dom";
import ColorProvider from "./component/color-hook.js";

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
