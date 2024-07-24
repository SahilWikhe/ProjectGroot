import React from 'react';

const NetworkConnection = ({ name, title, mutualConnections }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-gray-500">{mutualConnections} mutual connections</p>
      </div>
    </div>
    <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-50">Connect</button>
  </div>
);

const Network = () => {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">People You May Know</h2>
        </div>
        <div className="p-4">
          <NetworkConnection name="Alice Brown" title="UX Designer" mutualConnections={15} />
          <NetworkConnection name="Charlie Davis" title="Product Manager" mutualConnections={23} />
          <NetworkConnection name="Eva Green" title="Data Scientist" mutualConnections={7} />
        </div>
      </div>
    </main>
  );
};

export default Network;