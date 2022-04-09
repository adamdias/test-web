import React from "react";
import ReactDOM from "react-dom";
import "@/packages/ui-kit/global/global.scss";
import { RecoilRoot } from "recoil";
import App from "./App";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("main")
);
