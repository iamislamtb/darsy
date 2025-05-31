import React from 'react';
import { useAuth } from '../../context/AuthContext';
import StudentDashboard from '../../components/dashboard/StudentDashboard';
import TeacherDashboard from '../../components/dashboard/TeacherDashboard';

function DashboardHome() {
  const { user } = useAuth();

  // Render the appropriate dashboard based on user role
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      {user?.role === 'teacher' ? (
        <TeacherDashboard user={user} />
      ) : (
        <StudentDashboard user={user} />
      )}
    </div>
  );
}

export default DashboardHome;
