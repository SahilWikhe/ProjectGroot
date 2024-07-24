import React from 'react';
import ProfileCard from '../components/profile/ProfileCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Profile = () => {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <ProfileCard />
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li className="mb-4">
              <h3 className="font-semibold">Software Developer</h3>
              <p className="text-gray-600">Tech Company Inc.</p>
              <p className="text-sm text-gray-500">2020 - Present</p>
            </li>
            <li>
              <h3 className="font-semibold">Junior Developer</h3>
              <p className="text-gray-600">Startup Co.</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default Profile;