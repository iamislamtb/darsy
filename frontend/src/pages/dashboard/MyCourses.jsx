import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function MyCourses() {
  const [activeTab, setActiveTab] = useState('in-progress');
  
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Courses</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses[activeTab].map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Instructor: {course.instructor}
              </p>

              {activeTab === 'in-progress' && (
                <>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-primary-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Next: {course.nextLesson}
                  </p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full"
                  >
                    <Button className="w-full">
                      Continue Learning
                    </Button>
                  </Link>
                </>
              )}

              {activeTab === 'completed' && (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    Completed on: {new Date(course.completedDate).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="secondary" className="flex-1">
                      View Certificate
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Review Course
                    </Button>
                  </div>
                </>
              )}

              {activeTab === 'saved' && (
                <>
                  <p className="text-lg font-bold text-primary-600 mb-4">
                    ${course.price}
                  </p>
                  <Button className="w-full">
                    Enroll Now
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
