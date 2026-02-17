import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  element: React.ReactElement;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
  const { user, loading } = useContext(AuthContext);

  // Show loading state while checking authentication
  if (loading) {
    return (<div className="flex justify-center items-center h-[100vh]" >
      
        <p>Loading...</p>
      </div>
    );
  }

  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

//   // Check if user's role is allowed to access this route
//   if (!allowedRoles.includes(user.role)) {
//     // Redirect to their appropriate dashboard or unauthorized page
//     return <Navigate to={`/${user.role}/dashboard`} replace />;
//   }

  // User is authenticated and has the right role
  return element;
};

export default ProtectedRoute;