import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/AccordionApp"; //App is whatever function export default is

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
