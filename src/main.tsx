import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/Routes'
import Navbar from "./Components/Navbar";

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Navbar />
    <AppRoutes />
  </React.StrictMode>
)