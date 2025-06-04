import React, { useRef } from 'react';

// Sample course data with images from Unsplash
const courses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1635776062360-af423902aff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 75
  },
  {
    id: 2,
    title: 'Python for Data Science',
    instructor: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 45
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 90
  },
  {
    id: 4,
    title: 'Machine Learning Basics',
    instructor: 'David Kim',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    progress: 30
  },
  {
    id: 5,
    title: 'JavaScript Mastery',
    instructor: 'Alex Turner',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 60
  },
  {
    id: 6,
    title: 'Mobile App Development',
    instructor: 'Lisa Park',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 20
  }
];

function StudentDashboard({ user }) {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      if (direction === 'left') {
        scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-gray-300">Continue your learning journey</p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-white">Your Courses</h2>
          <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
            View All →
          </button>
        </div>
        
        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700/90 rounded-full shadow-lg text-white hover:text-primary-400 transition-all duration-200 opacity-0 group-hover:opacity-100 ml-2"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="relative">
            <div 
              ref={scrollContainer}
              className="flex pb-6 -mx-2 px-2 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              <div className="flex space-x-6">
                {courses.map((course) => (
                  <div key={course.id} className="flex-shrink-0 w-72 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500/50 transition-all duration-200 shadow-lg hover:shadow-primary-500/10">
                    <div className="relative h-36 bg-gray-700 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{course.instructor}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-gray-400">{course.progress}% Complete</span>
                        <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                          Continue →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700/90 rounded-full shadow-lg text-white hover:text-primary-400 transition-all duration-200 opacity-0 group-hover:opacity-100 mr-2"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-lg font-medium text-white mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white">Live Class - {item === 1 ? 'Introduction to React' : 'Advanced JavaScript'}</p>
                <p className="text-sm text-gray-400">Today at {item === 1 ? '2:00 PM' : '4:30 PM'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
