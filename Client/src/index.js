import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackBarContextProvider } from './Modules/Components/SnackBar/SnackBar';
import ThemeProvider from './Modules/Components/Theme/Theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>

      <SnackBarContextProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>

      </SnackBarContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);


