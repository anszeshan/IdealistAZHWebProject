import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { apiStore } from "./redux/apiStore";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";



let persistor = persistStore(apiStore);

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={apiStore}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={1500}
              >
              <App />
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
