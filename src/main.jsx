import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BudgetProvider from './context/BudgetProvider';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>
);
