import React from "react";
import ReactDOM from "react-dom";
import { NewRegistrationPage } from "./NewRegistrationPage.jsx";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#NewRegistration");
    if (app) {
        ReactDOM.render(<NewRegistrationPage />, app);
    }
});
