import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

// Create a custom hook for safe navigation
export const useSafeNavigate = () => {
  try {
    return useNavigate();
  } catch (error) {
    // Return a no-op function if useNavigate fails (outside Router)
    return () => console.warn('Navigation not available outside Router');
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useSafeNavigate();

  // Determine user role based on email (for demo purposes)
  const determineUserRole = (email) => {
    if (email.includes('teacher') || email.includes('instructor') || email.includes('professor')) {
      return 'teacher';
    }
    return 'student'; // Default role
  };

  // Load user from storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Ensure the user has a role
      if (!parsedUser.role) {
        parsedUser.role = determineUserRole(parsedUser.email);
      }
      setUser(parsedUser);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (userData, rememberMe = false) => {
    try {
      // Ensure user has a role
      const userWithRole = {
        ...userData,
        role: userData.role || determineUserRole(userData.email)
      };

      // Store user data in appropriate storage
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(userWithRole));
        sessionStorage.removeItem('user');
      } else {
        sessionStorage.setItem('user', JSON.stringify(userWithRole));
        localStorage.removeItem('user');
      }
      
      setUser(userWithRole);
      
      // Use setTimeout to ensure state is updated before navigation
      setTimeout(() => {
        navigate('/dashboard');
      }, 0);
      
      return userWithRole;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }, [navigate]);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      setUser(null);
      
      // Use setTimeout to ensure state is updated before navigation
      setTimeout(() => {
        navigate('/');
      }, 0);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [navigate]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user,
      isTeacher: user?.role === 'teacher',
      isStudent: user?.role === 'student'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
