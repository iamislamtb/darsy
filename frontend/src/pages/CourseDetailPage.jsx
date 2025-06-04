import React from 'react';
import { useParams } from 'react-router-dom';
import { FiClock, FiBook, FiAward, FiCheck, FiStar } from 'react-icons/fi';
import Button from '../components/Button';

function CourseDetailPage() {
  const { id } = useParams();

  // Mock course data
  const course = {
    id,
    title: "Course Title",
    instructor: "Instructor Name",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    price: 49.99,
    rating: 4.5,
    reviews: 128,
    students: 1200,
    level: "Beginner",
    duration: "10h 30m",
    lastUpdated: "June 2023",
    description: "This is a placeholder course description that provides an overview of what students will learn in this course.",
    topics: [
      "Topic 1: Introduction to the subject",
      "Topic 2: Core concepts and fundamentals",
      "Topic 3: Practical applications",
      "Topic 4: Advanced techniques",
      "Topic 5: Real-world projects"
    ],
    requirements: [
      "Basic computer skills",
      "Internet connection",
      "No prior experience required"
    ]
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 text-sm font-medium bg-primary-500/20 text-primary-300 rounded-full">
                  {course.level}
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <FiClock className="mr-1" /> {course.duration}
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <FiBook className="mr-1" /> 24 Lectures
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="flex">
                    {renderStars(course.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="text-sm text-gray-400">
                  {course.students.toLocaleString()} students enrolled
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="px-8 py-3 text-lg">
                  Enroll Now • ${course.price}
                </Button>
                <Button variant="outline" className="px-8 py-3 text-lg border-gray-700 hover:bg-gray-800">
                  Add to Wishlist
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Preview this course</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold mb-4">This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration} on-demand video
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FiBook className="w-5 h-5 text-primary-400 mr-3" />
                    5 articles and 10 downloadable resources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FiAward className="w-5 h-5 text-primary-400 mr-3" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FiClock className="w-5 h-5 text-primary-400 mr-3" />
                    Full lifetime access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Requirements
              </h2>
              <ul className="space-y-3">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Course Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration} of content
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  5 downloadable resources
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of completion
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Full lifetime access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
