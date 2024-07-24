import React from 'react';
import { Link } from 'react-router-dom';
import { User, Search, Bell, MessageSquare, Briefcase, Users } from 'lucide-react';

const Header = () => (
<header className="bg-white border-b border-gray-300 p-4">
<div className="flex justify-between items-center max-w-6xl mx-auto">
    <div className="flex items-center">
    <Link to="/" className="text-blue-600 text-2xl font-bold mr-4">in</Link>
    <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 p-2 rounded-md w-64"
    />
    </div>
    <nav>
    <ul className="flex space-x-6">
        <li><Link to="/"><Search size={24} /></Link></li>
        <li><Link to="/network"><Users size={24} /></Link></li>
        <li><Link to="/jobs"><Briefcase size={24} /></Link></li>
        <li><Bell size={24} /></li>
        <li><MessageSquare size={24} /></li>
        <li><Link to="/profile"><User size={24} /></Link></li>
    </ul>
    </nav>
</div>
</header>
);

export default Header;