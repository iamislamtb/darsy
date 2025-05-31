import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailPage from '../pages/CourseDetailPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactPage from '../pages/ContactPage';

export const publicRoutes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/courses',
    element: <CoursesPage />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetailPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];
