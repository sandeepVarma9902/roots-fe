
import './App.css'
import IndexLogin from './components/login/IndexLogin';
import IndexHelp from './components/help/IndexHelp';
import { AuthProvider } from './contexts/AuthProvider';

import Signup from './components/login/modules/Signup';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/home/indexHome';
import IndexFood from './components/food/components/IndexFood';
import { FoodProviderDetail } from './components/food/components/FoodProviderDetail';

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
          <Route 
          path="/home" 
          element={
            <Home />
            // <ProtectedRoute 
            //   element={<Home />} 
            //   allowedRoles={['user']} 
            // />
          } 
        />
        {/* Food Booking Routes */}
        <Route path="/food" element={<IndexFood />} />
        <Route path="/order" element={<IndexFood />} />
        <Route path="/menu" element={<IndexFood />} />
        <Route path="/food/provider/:providerId" element={<FoodProviderDetail />} />
        
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
