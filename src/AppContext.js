import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    title: 'Software Developer',
    connections: 500
  });

  const [posts, setPosts] = useState([
    { id: 1, author: 'Jane Smith', content: 'Just finished a great project!' },
    { id: 2, author: 'Bob Johnson', content: 'Looking for new opportunities in tech.' }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <AppContext.Provider value={{ user, setUser, posts, addPost }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);