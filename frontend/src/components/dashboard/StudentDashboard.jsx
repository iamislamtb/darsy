import React from 'react';

function StudentDashboard({ user }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-gray-600">Continue your learning journey</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="h-32 bg-gray-100 rounded mb-3"></div>
              <h3 className="font-medium text-gray-900">Course Title {item}</h3>
              <p className="text-sm text-gray-500 mt-1">Instructor Name</p>
              <button className="mt-3 text-sm text-primary-600 hover:text-primary-800 font-medium">
                Continue Learning →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 text-primary-800 rounded-lg p-3">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Live Session: Topic Title</p>
                <p className="text-sm text-gray-500">Tomorrow, 2:00 PM - 3:30 PM</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
