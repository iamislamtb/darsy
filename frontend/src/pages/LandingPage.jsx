import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Learn and Teach</span>
                  <span className="block text-primary-600">Live and Interactive</span>
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Join our vibrant community of learners and educators. Experience real-time interactive learning with expert instructors.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/register">
                      <Button variant="primary" className="w-full px-8 py-3">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/courses">
                      <Button variant="secondary" className="w-full px-8 py-3">
                        Browse Courses
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
                      alt="Student engaging in online learning"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to learn effectively
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Live Interactive Sessions */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Live Interactive Sessions</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Engage in real-time with instructors and peers through live video sessions and interactive discussions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert Instructors */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-1-1.7l-7-3.5a2 2 0 00-1.8 0l-7 3.5a2 2 0 00-1 1.7V19a2 2 0 002 2h9.5a2 2 0 002-2v-1.5" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Expert Instructors</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Learn from industry professionals and experienced educators who are passionate about teaching.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flexible Learning */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Flexible Learning</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Learn at your own pace with recorded sessions and flexible scheduling options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 bg-gray-50 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our students say
            </p>
          </div>

          <div className="mt-20 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {/* Review 1 */}
            <div className="relative p-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-3 right-3">
                <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.574 15.728q-2.574-1.008-4.074-3.124t-1.5-4.748q0-3.19 2.249-5.44t5.439-2.249q3.19 0 5.44 2.249t2.249 5.44q0 2.632-1.5 4.748t-4.074 3.124l-2.115 0.885zM19.615 15.728q-2.574-1.008-4.074-3.124t-1.5-4.748q0-3.19 2.249-5.44t5.439-2.249q3.19 0 5.44 2.249t2.249 5.44q0 2.632-1.5 4.748t-4.074 3.124l-2.115 0.885z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  "The interactive sessions are amazing! I've learned more in a few weeks here than I did in months of self-study. The instructors are knowledgeable and really care about student success."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg"
                    alt="Sarah Johnson"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Web Development Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="relative p-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-3 right-3">
                <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.574 15.728q-2.574-1.008-4.074-3.124t-1.5-4.748q0-3.19 2.249-5.44t5.439-2.249q3.19 0 5.44 2.249t2.249 5.44q0 2.632-1.5 4.748t-4.074 3.124l-2.115 0.885zM19.615 15.728q-2.574-1.008-4.074-3.124t-1.5-4.748q0-3.19 2.249-5.44t5.439-2.249q3.19 0 5.44 2.249t2.249 5.44q0 2.632-1.5 4.748t-4.074 3.124l-2.115 0.885z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  "As a working professional, the flexibility of this platform is invaluable. I can attend live sessions or watch recordings later. The quality of education is top-notch!"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                    alt="Michael Chen"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-500">Data Science Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="relative p-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-3 right-3">
                <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.574 15.728q-2.574-1.008-4.074-3.124t-1.5-4.748q0-3.19 2.249-5.44t5.439-2.249q3.19 0 5.44 2.249t2.249 5.44q0 2.632-1.5 4.748t-4.074 3.124l-2.115 0.885zM19.615 15.728q-2.574-1.008-4.074-3.124t-1.5-4.748q0-3.19 2.249-5.44t5.439-2.249q3.19 0 5.44 2.249t2.249 5.44q0 2.632-1.5 4.748t-4.074 3.124l-2.115 0.885z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  "The community here is incredible! I love how we can interact with other students and instructors in real-time. The collaborative learning environment has helped me grow so much."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/3776840/pexels-photo-3776840.jpeg"
                    alt="Emily Rodriguez"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">UX Design Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start learning today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Join thousands of students already learning on our platform.
          </p>
          <Link to="/register">
            <Button
              className="mt-8 w-full sm:w-auto px-8 py-3"
              variant="secondary"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by students and teachers worldwide
            </h2>
          </div>
          <div className="mt-10 pb-12 sm:pb-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
                <p className="text-3xl font-extrabold text-primary-600">1,000+</p>
                <p className="mt-2 text-lg font-medium text-gray-500">Active Students</p>
              </div>
              <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
                <p className="text-3xl font-extrabold text-primary-600">100+</p>
                <p className="mt-2 text-lg font-medium text-gray-500">Expert Instructors</p>
              </div>
              <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
                <p className="text-3xl font-extrabold text-primary-600">500+</p>
                <p className="mt-2 text-lg font-medium text-gray-500">Live Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Darsy</span>
              </div>
              <p className="text-gray-500 text-base">
                Empowering education through interactive online learning. Join our community of learners and expert instructors.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/courses" className="text-base text-gray-500 hover:text-gray-900">Courses</Link>
                    </li>
                    <li>
                      <Link to="/tutors" className="text-base text-gray-500 hover:text-gray-900">Tutors</Link>
                    </li>
                    <li>
                      <Link to="/live-sessions" className="text-base text-gray-500 hover:text-gray-900">Live Sessions</Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900">Pricing</Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/help" className="text-base text-gray-500 hover:text-gray-900">Help Center</Link>
                    </li>
                    <li>
                      <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/community" className="text-base text-gray-500 hover:text-gray-900">Community</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link>
                    </li>
                    <li>
                      <Link to="/careers" className="text-base text-gray-500 hover:text-gray-900">Careers</Link>
                    </li>
                    <li>
                      <Link to="/press" className="text-base text-gray-500 hover:text-gray-900">Press</Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link>
                    </li>
                    <li>
                      <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms</Link>
                    </li>
                    <li>
                      <Link to="/cookies" className="text-base text-gray-500 hover:text-gray-900">Cookie Policy</Link>
                    </li>
                    <li>
                      <Link to="/licenses" className="text-base text-gray-500 hover:text-gray-900">Licenses</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Darsy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
