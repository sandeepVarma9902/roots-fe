
import './App.css'
import IndexLogin from './components/login/IndexLogin';
import IndexHelp from './components/help/IndexHelp';
import { AuthProvider } from './contexts/AuthProvider';

import Signup from './components/login/modules/Signup';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<IndexLogin />} />
        <Route path="/login" element={<IndexLogin />} />
        <Route path="/help" element={<IndexHelp />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signup/partner" element={<Signup/>} />
        <Route path="/signup/admin" element={<Signup/>} />
        
        {/* Protected Routes */}
        {/* <Route 
          path="/user/dashboard" 
          element={
            <ProtectedRoute 
              element={<UserDashboard />} 
              allowedRoles={['user']} 
            />
          } 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute 
              element={<AdminDashboard />} 
              allowedRoles={['admin']} 
            />
          } 
        />
        <Route 
          path="/customer/dashboard" 
          element={
            <ProtectedRoute 
              element={<CustomerDashboard />} 
              allowedRoles={['customer']} 
            />
          } 
        />
        <Route 
          path="/vendor/dashboard" 
          element={
            <ProtectedRoute 
              element={<VendorDashboard />} 
              allowedRoles={['vendor']} 
            />
          } 
        /> */}
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
