import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
