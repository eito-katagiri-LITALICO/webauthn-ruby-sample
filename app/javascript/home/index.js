import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#HomeIndex");
    if (app) {
        ReactDOM.render(<div className="font-bold underline">Hello, React!</div>, app);
    }
});
