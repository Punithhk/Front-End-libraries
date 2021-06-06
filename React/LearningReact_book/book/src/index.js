import React from "react";
import { render } from "react-dom";

import UserDetails from "./components/UserDetails.js";

const login = "eveporcello";

render(
  <>
    <UserDetails data={login} />
  </>,
  document.getElementById("root")
);
