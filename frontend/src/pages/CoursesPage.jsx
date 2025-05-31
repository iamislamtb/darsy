import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

function CoursesPage() {
  // Mock data - replace with API call later
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "John Doe",
      thumbnail: "https://via.placeholder.com/300x200",
      price: 49.99,
      rating: 4.5,
      level: "Beginner"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      instructor: "Jane Smith",
      thumbnail: "https://via.placeholder.com/300x200",
      price: 79.99,
      rating: 4.8,
      level: "Advanced"
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Mike Johnson",
      thumbnail: "https://via.placeholder.com/300x200",
      price: 59.99,
      rating: 4.6,
      level: "Intermediate"
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>
        
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
