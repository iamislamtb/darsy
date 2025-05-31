import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ id, title, instructor, thumbnail, price, rating, level }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={thumbnail || 'https://via.placeholder.com/300x200'} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">By {instructor}</p>
        <div className="flex items-center mb-2">
          <span className="text-accent-500">★</span>
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
          <span className="text-sm text-gray-500 ml-2">• {level}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-primary-600 font-bold">${price}</span>
          <Link 
            to={`/courses/${id}`}
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
