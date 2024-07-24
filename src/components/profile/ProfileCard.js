import React from 'react';
import { useAppContext } from '../../AppContext';

const ProfileCard = () => {
  const { user } = useAppContext();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.title}</p>
        <p className="text-sm text-gray-500 mt-2">{user.connections} connections</p>
      </div>
    </div>
  );
};

export default ProfileCard;