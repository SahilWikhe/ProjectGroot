import React from 'react';
import ProfileCard from '../components/profile/ProfileCard';
import NewPost from '../components/feed/NewPost';
import FeedItem from '../components/feed/FeedItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppContext } from '../AppContext';

const Dashboard = () => {
  const { posts, addPost } = useAppContext();

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <NewPost onPost={addPost} />
          {posts.map(post => (
            <FeedItem 
              key={post.id}
              name={post.author}
              content={post.content}
            />
          ))}
        </div>
        <div>
          <ProfileCard />
          <Card>
            <CardHeader>
              <CardTitle>People You May Know</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li className="mb-2">Alice Brown</li>
                <li className="mb-2">Charlie Davis</li>
                <li>Eva Green</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;