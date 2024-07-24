import React, { useState } from 'react';
import { useAppContext } from '../../AppContext';

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
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded-md"
          rows="3"
          placeholder="What do you want to talk about?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button 
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;