import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './Modules/Components/Theme/Theme';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
      <QueryClientProvider client={queryClient}>
            <App />
      </QueryClientProvider>
          </BrowserRouter>
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


