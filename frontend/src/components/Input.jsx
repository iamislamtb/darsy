import React from 'react';

function Input({ label, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2
          ${error 
            ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
            : 'border-gray-300 focus:ring-primary-200 focus:border-primary-600'}
          transition-colors duration-200
        `}
        style={{
          borderColor: error ? '#EF4444' : '#D1D5DB',
          boxShadow: '0 0 0 0px transparent',
        }}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}

export default Input;
