import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import './index.css';
// import Contact from "./components/contact/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    
  </StrictMode>
);
