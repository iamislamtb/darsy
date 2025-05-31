import React from 'react';
import { Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import DashboardHome from '../pages/dashboard/DashboardHome';
import ProfilePage from '../pages/dashboard/ProfilePage';
import MyCourses from '../pages/dashboard/MyCourses';
import Certificates from '../pages/dashboard/Certificates';
import Settings from '../pages/dashboard/Settings';
import EchoTest from '../components/EchoTest';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PrivateRoute from '../components/PrivateRoute';

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
      path: 'certificates',
      element: <Certificates />,
    },
    {
      path: 'settings',
      element: <Settings />,
    },
    {
      path: 'echo-test',
      element: <EchoTest />,
    },
  ],
};
