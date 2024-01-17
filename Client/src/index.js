import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import ThemeProvider from "./Modules/Components/Theme/Theme";
import { persistor, store } from "./Modules/Config/store";
import "./index.css";

import Snackbar from "./Modules/Components/Snackbar/Snackbar";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Snackbar />
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
              <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="bottom-left"
              />
            </BrowserRouter>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
