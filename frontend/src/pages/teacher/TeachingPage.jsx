import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, UserGroupIcon, ChartBarIcon, PlusIcon } from '@heroicons/react/24/outline';

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: 'Introduction to React',
    students: 42,
    progress: 78,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    title: 'Advanced JavaScript Patterns',
    students: 28,
    progress: 65,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    students: 35,
    progress: 45,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
  },
];

const TeachingPage = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">My Teaching</h1>
        <p className="text-gray-400">Manage your courses and track student progress</p>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/dashboard/teaching/new"
            className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400 mr-3">
              <PlusIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-white">Create New Course</h3>
              <p className="text-xs text-gray-400">Start building your course</p>
            </div>
          </Link>
          <div className="flex items-center p-4 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed">
            <div className="p-2 rounded-md bg-green-500/10 text-green-400 mr-3">
              <UserGroupIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-400">Invite Co-instructor</h3>
              <p className="text-xs text-gray-500">Coming soon</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed">
            <div className="p-2 rounded-md bg-purple-500/10 text-purple-400 mr-3">
              <ChartBarIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-400">View Analytics</h3>
              <p className="text-xs text-gray-500">Coming soon</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed">
            <div className="p-2 rounded-md bg-yellow-500/10 text-yellow-400 mr-3">
              <BookOpenIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-400">Course Templates</h3>
              <p className="text-xs text-gray-500">Coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockCourses.map((course) => (
          <div key={course.id} className="bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-700 hover:border-indigo-500 transition-colors duration-200">
            <div className="h-32 bg-gray-700 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div
                  className="h-full bg-indigo-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-white mb-2">{course.title}</h3>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <UserGroupIcon className="h-4 w-4 mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <ChartBarIcon className="h-4 w-4 mr-1" />
                  <span>{course.progress}% completion</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link
                  to={`/dashboard/teaching/${course.id}`}
                  className="flex-1 text-center px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                >
                  Manage
                </Link>
                <Link
                  to={`/dashboard/teaching/${course.id}/analytics`}
                  className="flex-1 text-center px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
                >
                  Analytics
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Empty course card */}
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-indigo-500 transition-colors duration-200">
          <BookOpenIcon className="h-12 w-12 text-gray-500 mb-2" />
          <h3 className="text-lg font-medium text-gray-300">Create New Course</h3>
          <p className="text-sm text-gray-500 mb-4">Start building your next course and share your knowledge</p>
          <Link
            to="/dashboard/teaching/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeachingPage;
