import React from "react";
import ReactDOM from "react-dom";
import { NewSessionPage } from "./NewSessionPage.jsx";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#NewSession");
    if (app) {
        ReactDOM.render(<NewSessionPage />, app);
    }
});
