import React from 'react';
import { ThumbsUp, MessageSquare, Repeat, Send } from 'lucide-react';

const FeedItem = ({ name, content }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm">Posted 2h ago</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between items-center pt-4 border-t">
        <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md">
          <ThumbsUp size={20} className="mr-2" />
          Like
        </button>
        <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md">
          <MessageSquare size={20} className="mr-2" />
          Comment
        </button>
        <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md">
          <Repeat size={20} className="mr-2" />
          Repost
        </button>
        <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md">
          <Send size={20} className="mr-2" />
          Send
        </button>
      </div>
    </div>
  );
};

export default FeedItem;