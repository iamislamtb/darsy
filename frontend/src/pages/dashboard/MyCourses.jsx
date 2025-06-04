import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

// Custom styles for the component
const styles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Add styles to the document head
const addStyles = () => {
  if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  }
};

function MyCourses() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('in-progress');
  
  // Add styles on component mount
  useEffect(() => {
    addStyles();
  }, []);
  
  // Mock data - replace with API calls later
  const courses = {
    'in-progress': [
      {
        id: 1,
        title: 'Advanced React Patterns',
        thumbnail: 'https://via.placeholder.com/300x200',
        progress: 75,
        nextLesson: 'Higher Order Components',
        instructor: 'Jane Smith'
      },
      {
        id: 2,
        title: 'Python for Data Science',
        thumbnail: 'https://via.placeholder.com/300x200',
        progress: 45,
        nextLesson: 'Pandas Fundamentals',
        instructor: 'Mike Johnson'
      }
    ],
    'completed': [
      {
        id: 3,
        title: 'JavaScript Fundamentals',
        thumbnail: 'https://via.placeholder.com/300x200',
        progress: 100,
        completedDate: '2025-04-15',
        instructor: 'John Doe'
      }
    ],
    'saved': [
      {
        id: 4,
        title: 'Machine Learning Basics',
        thumbnail: 'https://via.placeholder.com/300x200',
        price: 79.99,
        instructor: 'Sarah Wilson'
      }
    ]
  };

  const tabs = [
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'saved', label: 'Saved' }
  ];

  // Check if current tab has no courses
  const hasNoCourses = courses[activeTab].length === 0;

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Handle remove from saved
  const handleRemoveSaved = (e, courseId) => {
    e.stopPropagation();
    console.log('Remove from saved', courseId);
    // Implement remove from saved functionality here
  };

  // Render course card based on tab type
  const renderCourseCard = (course) => (
    <div key={course.id} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/4f46e5/1e1b4b?text=${encodeURIComponent(course.title)}`;
          }}
        />
        {activeTab === 'completed' && (
          <div className="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Completed
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1.5 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3">
          By {course.instructor}
        </p>
        {renderCourseCardContent(course)}
      </div>
    </div>
  );

  // Render specific content based on tab type
  const renderCourseCardContent = (course) => {
    switch (activeTab) {
      case 'in-progress':
        return (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-gray-400">Progress</span>
                <span className="font-medium text-primary-400">{course.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              <span className="text-gray-300 font-medium">Next:</span> {course.nextLesson}
            </p>
            <Link to={`/courses/${course.id}`} className="block w-full">
              <Button className="w-full group">
                <span className="relative">
                  <span className="opacity-100 group-hover:opacity-0 transition-opacity">
                    Continue Learning
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    Resume Now →
                  </span>
                </span>
              </Button>
            </Link>
          </>
        );
      
      case 'completed':
        return (
          <>
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <svg className="w-4 h-4 mr-1.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Completed on {new Date(course.completedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500">
                View Certificate
              </Button>
              <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500">
                Review
              </Button>
            </div>
          </>
        );
      
      case 'saved':
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary-400">${course.price}</span>
              <button 
                type="button"
                className="text-gray-400 hover:text-red-400 transition-colors"
                onClick={(e) => handleRemoveSaved(e, course.id)}
                aria-label={`Remove ${course.title} from saved`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <Button className="w-full group">
              <span className="relative">
                <span className="opacity-100 group-hover:opacity-0 transition-opacity">
                  Enroll Now
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  Start Learning →
                </span>
              </span>
            </Button>
          </>
        );
      
      default:
        return null;
    }
  };

  // Render empty state
  const renderEmptyState = () => {
    let title = '';
    let description = '';

    switch (activeTab) {
      case 'in-progress':
        title = 'No active courses';
        description = 'Start learning by enrolling in a course';
        break;
      case 'completed':
        title = 'No completed courses yet';
        description = 'Complete your first course to see it here';
        break;
      case 'saved':
        title = 'No saved courses';
        description = 'Save courses to view them later';
        break;
      default:
        break;
    }

    return (
      <div className="col-span-full text-center py-16 px-4 rounded-xl border-2 border-dashed border-gray-700 bg-gray-800/50">
        <div className="text-gray-500 mb-4">
          <svg 
            className="mx-auto h-14 w-14" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-200 mb-2">
          {title}
        </h3>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          {description}
        </p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/courses')}
          className="inline-flex items-center"
        >
          Browse Courses
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Button>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-white mb-6">My Courses</h1>

      {/* Tabs */}
      <div className="border-b border-gray-700 mb-6">
        <nav 
          className="flex space-x-6 overflow-x-auto hide-scrollbar pb-px"
          aria-label="Course categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`
                px-1 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 relative
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-colors after:duration-200
                ${activeTab === tab.id
                  ? 'text-primary-400 after:bg-primary-500'
                  : 'text-gray-400 hover:text-gray-300 after:bg-transparent'}
              `}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-primary-500/10 text-primary-400 rounded-full">
                  {courses[tab.id].length}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasNoCourses ? (
          renderEmptyState()
        ) : (
          courses[activeTab].map((course) => renderCourseCard(course))
        )}
      </div>
    </div>
  );
}

export default MyCourses;
