import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const JobListing = ({ title, company, location }) => (
  <div className="mb-4 p-4 border-b last:border-b-0">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-600">{company}</p>
    <p className="text-sm text-gray-500">{location}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700">Apply</button>
  </div>
);

const Jobs = () => {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Recommended Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <JobListing title="Senior Software Engineer" company="Tech Giants Inc." location="San Francisco, CA" />
          <JobListing title="Product Manager" company="Startup Innovators" location="New York, NY" />
          <JobListing title="Data Analyst" company="Big Data Co." location="Remote" />
        </CardContent>
      </Card>
    </main>
  );
};

export default Jobs;