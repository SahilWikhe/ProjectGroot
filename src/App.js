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
        <div style={{backgroundColor: '#121212', color: '#E0E0E0'}} className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/network" element={<Network />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
          <footer style={{backgroundColor: '#1E1E1E'}} className="shadow-lg mt-8 py-4">
            <div className="container mx-auto text-center text-gray-400">
              © 2023 LinkedIn Clone. All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;