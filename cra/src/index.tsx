import React from "react";
import { createRoot } from 'react-dom/client';
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import awsconfig from "./aws-exports";

// window.LOG_LEVEL = 'DEBUG';

Amplify.configure({
    ...awsconfig,
});

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
