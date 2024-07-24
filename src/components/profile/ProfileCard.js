import React from 'react';
import { useAppContext } from '../../AppContext';

const ProfileCard = () => {
  const { user } = useAppContext();

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="h-24 bg-gray-300"></div>
      <div className="p-4">
        <div className="relative">
          <div className="w-24 h-24 bg-gray-400 rounded-full absolute -top-16 border-4 border-white"></div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.title}</p>
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold text-gray-800">{user.connections}</span> connections
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;