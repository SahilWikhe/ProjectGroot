import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Briefcase, Bell, MessageSquare, User } from 'lucide-react';

const Header = () => (
  <header style={{backgroundColor: '#1E1E1E'}} className="shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-blue-400 text-3xl font-bold">in</Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              style={{backgroundColor: '#2C2C2C', color: '#E0E0E0'}}
              className="px-4 py-2 pl-10 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <NavItem to="/" icon={<Search size={24} />} text="Home" />
            <NavItem to="/network" icon={<Users size={24} />} text="My Network" />
            <NavItem to="/jobs" icon={<Briefcase size={24} />} text="Jobs" />
            <NavItem to="/messaging" icon={<MessageSquare size={24} />} text="Messaging" />
            <NavItem to="/notifications" icon={<Bell size={24} />} text="Notifications" />
            <NavItem to="/profile" icon={<User size={24} />} text="Me" />
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="flex flex-col items-center text-gray-400 hover:text-white">
      {icon}
      <span className="text-xs mt-1">{text}</span>
    </Link>
  </li>
);

export default Header;