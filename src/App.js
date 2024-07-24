import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/network" element={<Network />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
          <footer className="bg-white shadow-lg mt-8 py-4">
            <div className="container mx-auto text-center text-gray-600">
              © 2023 LinkedIn Clone. All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;