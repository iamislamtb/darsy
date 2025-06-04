import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const RoleSelection = ({ onSelectRole }) => (
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4">
        <UserGroupIcon className="w-10 h-10 text-primary-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Join Darsy Today</h2>
      <p className="mt-2 text-gray-600">Select your role to get started</p>
    </div>

    <div className="space-y-4">
      <button
        onClick={() => onSelectRole('student')}
        className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left flex items-start space-x-4 group"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <BookOpenIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">I'm a Student</h3>
          <p className="mt-1 text-sm text-gray-500">Join to learn new skills and advance your career</p>
        </div>
      </button>

      <button
        onClick={() => onSelectRole('teacher')}
        className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left flex items-start space-x-4 group"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
          <AcademicCapIcon className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">I'm a Teacher</h3>
          <p className="mt-1 text-sm text-gray-500">Share your knowledge and teach others</p>
        </div>
      </button>
    </div>

    <p className="text-center text-sm text-gray-600">
      Already have an account?{' '}
      <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-500 transition-colors">
        Sign in
      </Link>
    </p>
  </div>
);

export default React.memo(RoleSelection);
