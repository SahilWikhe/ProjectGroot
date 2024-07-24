import React from 'react';

const NetworkConnection = ({ name, title, mutualConnections }) => (
  <div className="flex items-center justify-between mb-4 p-4 bg-dark-gray rounded-lg">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-medium-gray rounded-full mr-4"></div>
      <div>
        <h3 className="font-semibold text-off-white">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-xs text-gray-500">{mutualConnections} mutual connections</p>
      </div>
    </div>
    <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
      Connect
    </button>
  </div>
);

const Network = () => {
  return (
    <main className="bg-matte-black text-off-white">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">My Network</h1>
        <div className="bg-dark-gray rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Invitations</h2>
          {/* Add invitation components here if needed */}
        </div>
        <div className="bg-dark-gray rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">People You May Know</h2>
          <NetworkConnection 
            name="Alice Brown" 
            title="UX Designer" 
            mutualConnections={15} 
          />
          <NetworkConnection 
            name="Charlie Davis" 
            title="Product Manager" 
            mutualConnections={23} 
          />
          <NetworkConnection 
            name="Eva Green" 
            title="Data Scientist" 
            mutualConnections={7} 
          />
        </div>
      </div>
    </main>
  );
};

export default Network;