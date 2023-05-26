import React from "react";
import ReactDOM from "react-dom/client";
import ExampleForm from "./examples/exampleForm";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExampleForm />
  </React.StrictMode>
);

export * from "./FormComponent";
