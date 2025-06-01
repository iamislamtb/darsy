import React from 'react';
import { Link } from 'react-router-dom';

const RoleSelection = ({ onSelectRole }) => (
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Join Darsy Today</h2>
      <p className="mt-2 text-gray-600">Select your role to get started</p>
    </div>

    <div className="space-y-4">
      <button
        onClick={() => onSelectRole('student')}
        className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left flex items-start space-x-4"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l-9 5 9 5 9-5-9-5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12v7l9-5-9-5v7" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">I'm a Student</h3>
          <p className="mt-1 text-sm text-gray-500">Join to learn new skills and advance your career</p>
        </div>
      </button>

      <button
        onClick={() => onSelectRole('teacher')}
        className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left flex items-start space-x-4"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">I'm a Teacher</h3>
          <p className="mt-1 text-sm text-gray-500">Share your knowledge and teach others</p>
        </div>
      </button>
    </div>

    <p className="text-center text-sm text-gray-600">
      Already have an account?{' '}
      <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-500">
        Sign in
      </Link>
    </p>
  </div>
);

export default React.memo(RoleSelection);
