import React from 'react';

const FeedItem = ({ name, content }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <h3 className="font-semibold">{name}</h3>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default FeedItem;