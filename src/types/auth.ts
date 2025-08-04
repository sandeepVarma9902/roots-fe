// User interface
export interface User {
    id: string;
    email: string;
    name: string;
    userType: 'admin' | 'user' | 'moderator';
    // Add other user properties as needed
  }
  
  // Auth context type
  export interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    loading: boolean;
  }
  
  // Login data type
  export interface LoginData {
    email: string;
    password: string;
  }
  
  // Router types
  export interface RouteProps {
    path: string;
    element: React.ReactNode;
    currentPath?: string;
  }
  
  export interface ProtectedRouteProps {
    element: React.ReactNode;
    allowedRoles?: string[];
    currentPath?: string;
    navigate?: (path: string) => void;
  }
  
  export interface RouterProps {
    children: React.ReactNode;
  }
  
  export interface NavigationProps {
    navigate: (path: string) => void;
  }