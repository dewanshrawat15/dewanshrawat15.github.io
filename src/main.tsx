import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <h1 className="text-3xl font-sans font-bold underline">Hello world!</h1>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
