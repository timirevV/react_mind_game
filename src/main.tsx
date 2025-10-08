import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyles";
import { worker } from "./mocks/browser";

async function prepare() {
  if (import.meta.env.MODE === "development") {
    try {
      await worker.start();
      console.log("%c[MSW] Mock server started", "color: green");
    } catch (err) {
      console.error("[MSW] Failed to start:", err);
    }
  }
}

prepare().finally(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </React.StrictMode>
  );
});
