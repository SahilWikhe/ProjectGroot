import React from 'react';
import { useAppContext } from '../AppContext';

const Dashboard = () => {
  const { posts, addPost } = useAppContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="What do you want to talk about?"
          ></textarea>
          <div className="mt-3 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">Photo</button>
              <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">Video</button>
              <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">Event</button>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Post</button>
          </div>
        </div>
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-sm text-gray-500">Posted 2h ago</p>
              </div>
            </div>
            <p className="mb-3">{post.content}</p>
            <div className="flex justify-between border-t pt-3">
              <button className="text-gray-500 hover:bg-gray-100 px-3 py-1 rounded">Like</button>
              <button className="text-gray-500 hover:bg-gray-100 px-3 py-1 rounded">Comment</button>
              <button className="text-gray-500 hover:bg-gray-100 px-3 py-1 rounded">Share</button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-3">Your Profile</h2>
          <div className="flex items-center mb-3">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-3"></div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">View Profile</button>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-3">People You May Know</h2>
          <ul className="space-y-3">
            {['Alice Brown', 'Charlie Davis', 'Eva Green'].map((name, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <span>{name}</span>
                </div>
                <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-full">Connect</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;