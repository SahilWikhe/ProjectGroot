import React, { useState } from 'react';
import { useAppContext } from '../../AppContext';
import { Image, Video, Calendar, MessageSquare } from 'lucide-react';

const NewPost = () => {
  const [content, setContent] = useState('');
  const { addPost, user } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost({ id: Date.now(), author: user.name, content });
      setContent('');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="1"
            placeholder="What do you want to talk about?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button type="button" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
              <Image size={24} />
            </button>
            <button type="button" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
              <Video size={24} />
            </button>
            <button type="button" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
              <Calendar size={24} />
            </button>
            <button type="button" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
              <MessageSquare size={24} />
            </button>
          </div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;