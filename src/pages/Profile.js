import React from 'react';

const Profile = () => {
  return (
    <main className="bg-matte-black text-off-white min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Profile Header */}
        <div className="bg-dark-gray rounded-lg overflow-hidden mb-6">
          <div className="h-48 bg-gray-700"></div>
          <div className="p-6 relative">
            <div className="w-32 h-32 bg-medium-gray rounded-full absolute -top-16 border-4 border-dark-gray"></div>
            <div className="ml-36">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-400">Software Developer</p>
              <p className="text-gray-500 mt-1">San Francisco Bay Area</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Connect
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-dark-gray rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-300">
            Passionate software developer with 5+ years of experience in building web applications.
            Skilled in React, Node.js, and Python. Always eager to learn new technologies and solve
            complex problems.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-dark-gray rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-off-white">Senior Software Developer</h3>
            <p className="text-gray-400">Tech Innovators Inc.</p>
            <p className="text-gray-500">2020 - Present</p>
            <p className="text-gray-300 mt-2">
              Lead developer for the company's flagship product. Implemented new features and
              optimized performance, resulting in a 30% increase in user engagement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-off-white">Software Developer</h3>
            <p className="text-gray-400">StartUp Solutions</p>
            <p className="text-gray-500">2018 - 2020</p>
            <p className="text-gray-300 mt-2">
              Developed and maintained multiple client websites. Collaborated with the design team
              to implement responsive and accessible user interfaces.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-dark-gray rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="font-semibold text-off-white">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-400">Tech University</p>
            <p className="text-gray-500">2014 - 2018</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;