import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

// Add this test component
const TestComponent = () => (
  <div className="p-4 m-4 bg-blue-500 text-white text-2xl font-bold rounded">
    If you can see this styled, Tailwind is working!
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestComponent />
    <App />
  </React.StrictMode>
);