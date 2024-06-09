import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles></GlobalStyles>
  </React.StrictMode>,
);
