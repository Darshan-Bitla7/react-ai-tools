import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { APIContextProvider } from "./components/APIContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContextProvider>
        <App />
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
