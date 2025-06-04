import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DashboardHome from '../pages/dashboard/DashboardHome';
import ProfilePage from '../pages/dashboard/ProfilePage';
import MyCourses from '../pages/dashboard/MyCourses';
import MessagesPage from '../pages/dashboard/MessagesPage';
import Certificates from '../pages/dashboard/Certificates';
import Settings from '../pages/dashboard/Settings';

// Teacher pages
import TeachingPage from '../pages/teacher/TeachingPage';
import NewCoursePage from '../pages/teacher/NewCoursePage';
import ManageCoursePage from '../pages/teacher/ManageCoursePage';
import PrivateRoute from './PrivateRoute';

// Role-based route components
const TeacherRoute = ({ element }) => (
  <PrivateRoute roles={['teacher']}>
    {element}
  </PrivateRoute>
);

const StudentRoute = ({ element }) => (
  <PrivateRoute roles={['student']}>
    {element}
  </PrivateRoute>
);

export const dashboardRoutes = {
  path: '/dashboard',
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true,
      element: <DashboardHome />,
    },
    {
      path: 'profile',
      element: <ProfilePage />,
    },
    {
      path: 'my-courses',
      element: <MyCourses />,
    },
    {
      path: 'messages',
      element: <MessagesPage />,
    },
    {
      path: 'certificates',
      element: <StudentRoute element={<Certificates />} />,
    },
    {
      path: 'teaching',
      element: <TeacherRoute element={<TeachingPage />} />,
    },
    {
      path: 'teaching/new',
      element: <TeacherRoute element={<NewCoursePage />} />,
    },
    {
      path: 'teaching/:id',
      element: <TeacherRoute element={<ManageCoursePage />} />
    },
    {
      path: 'settings',
      element: <Settings />,
    },
  ],
};
