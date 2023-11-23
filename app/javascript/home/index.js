import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#HomeIndex");
    if (app) {
        ReactDOM.render(<div>Hello, React!</div>, app);
    }
});
