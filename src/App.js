import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Header from './components/layout/Header';
import { AppProvider } from './AppContext';

const App = () => {
    return (
    <AppProvider>
        <Router>
            <div className="bg-gray-100 min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/network" element={<Network />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
            </div>
        </Router>
    </AppProvider>
    );
};

export default App;