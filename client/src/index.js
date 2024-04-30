import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import { SearchContextProviderTrain } from "./context/SearchContextTrain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <div style={{ overflowX: 'hidden'}}>
        <App />
        </div>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
