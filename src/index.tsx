import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#E3713A',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <App />
        {/* <Routes>
        <Route element={<App />} path={"/*"} />
      </Routes> */}
      </Router>
    </React.StrictMode>
  </ThemeProvider>
);
