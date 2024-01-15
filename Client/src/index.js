import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Modules/Components/Theme/Theme";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store ,persistor}from "./Modules/Config/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="bottom-left"
              />
            </QueryClientProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
