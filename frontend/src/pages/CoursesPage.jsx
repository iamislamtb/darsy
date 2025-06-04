import React, { useState } from 'react';
import { FiSearch, FiFilter, FiChevronRight } from 'react-icons/fi';
import CourseCard from '../components/CourseCard';

function CoursesPage() {
  // Mock data with real course images
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "John Doe",
      thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      price: 49.99,
      rating: 4.5,
      level: "Beginner",
      students: 1243,
      duration: "10h 30m"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      instructor: "Jane Smith",
      thumbnail: "https://images.unsplash.com/photo-1635776062360-af423902aff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 79.99,
      rating: 4.8,
      level: "Advanced",
      students: 892,
      duration: "15h 45m"
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Mike Johnson",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 59.99,
      rating: 4.6,
      level: "Intermediate",
      students: 1567,
      duration: "12h 20m"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Williams",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 54.99,
      rating: 4.7,
      level: "Beginner",
      students: 2105,
      duration: "8h 15m"
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      instructor: "David Kim",
      thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      price: 69.99,
      rating: 4.9,
      level: "Advanced",
      students: 987,
      duration: "20h 10m"
    },
    {
      id: 6,
      title: "JavaScript Mastery",
      instructor: "Alex Turner",
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 49.99,
      rating: 4.8,
      level: "Intermediate",
      students: 1789,
      duration: "14h 30m"
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover a wide range of courses to enhance your skills and advance your career.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-10">
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search courses or instructors..."
              className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-sm text-gray-300"
            >
              <FiFilter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <div className="flex-1 min-w-[200px]">
                  <label htmlFor="level-filter" className="block text-sm font-medium text-gray-400 mb-1">
                    Course Level
                  </label>
                  <select
                    id="level-filter"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
              <FiSearch className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No courses found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any courses matching your search. Try adjusting your filters.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel('all');
              }}
              className="mt-4 inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
            >
              Clear all filters
              <FiChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
