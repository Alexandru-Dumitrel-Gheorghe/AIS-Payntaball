import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Stilurile globale (dacă există)
import App from "./App"; // Componenta principală

// Căutăm elementul cu id-ul "root" din index.html
const rootElement = document.getElementById("root");

// Cream o rădăcină React și montăm aplicația
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elementul cu id-ul 'root' nu a fost găsit.");
}
