import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';

function CourseDetailPage() {
  const { id } = useParams();

  // Mock data - replace with API call later
  const course = {
    id,
    title: "Introduction to Web Development",
    instructor: "John Doe",
    thumbnail: "https://via.placeholder.com/800x400",
    price: 49.99,
    rating: 4.5,
    level: "Beginner",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for beginners who want to start their journey in web development.",
    topics: [
      "HTML5 Basics",
      "CSS3 Styling",
      "JavaScript Fundamentals",
      "Responsive Design",
      "Basic Web Projects",
    ],
    requirements: [
      "No prior programming experience needed",
      "Basic computer skills",
      "A computer with internet access",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-4">{course.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-accent-300">★</span>
                <span className="ml-1">{course.rating}</span>
                <span className="mx-2">•</span>
                <span>{course.level}</span>
              </div>
              <p className="text-lg mb-4">Created by {course.instructor}</p>
              <Button variant="accent" className="mr-4">
                Enroll Now for ${course.price}
              </Button>
              <Button variant="outline" className="bg-white">
                Try for Free
              </Button>
            </div>
            <div>
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Course Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  10 hours of content
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  5 downloadable resources
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of completion
                </li>
              </ul>
              <Button className="w-full mt-6">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
