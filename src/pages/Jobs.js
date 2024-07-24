import React from 'react';

const JobListing = ({ title, company, location }) => (
  <div className="mb-4 p-4 border-b border-gray-700 last:border-b-0">
    <h3 className="font-semibold text-off-white">{title}</h3>
    <p className="text-gray-400">{company}</p>
    <p className="text-sm text-gray-500">{location}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors">
      Apply
    </button>
  </div>
);

const Jobs = () => {
  return (
    <main className="bg-matte-black text-off-white">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Jobs</h1>
        <div className="bg-dark-gray rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
          <JobListing 
            title="Senior Software Engineer" 
            company="Tech Giants Inc." 
            location="San Francisco, CA" 
          />
          <JobListing 
            title="Product Manager" 
            company="Startup Innovators" 
            location="New York, NY" 
          />
          <JobListing 
            title="Data Analyst" 
            company="Big Data Co." 
            location="Remote" 
          />
        </div>
      </div>
    </main>
  );
};

export default Jobs;