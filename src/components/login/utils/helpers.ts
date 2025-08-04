import type { userType, UserTypeConfig } from "../types/LoginTypes";

export   const pageConfigs: Record<userType, UserTypeConfig> = {
    user: {
      title: 'User Login',
      subtitle: 'Access your personal dashboard',
      icon: '👤',
      gradient: 'from-blue-50 to-cyan-100',
      iconBg: 'bg-blue-100',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      focusColor: 'focus:ring-blue-500 focus:border-blue-500'
    },
    admin: {
      title: 'Admin Portal',
      subtitle: 'Manage and control system settings',
      icon: '⚙️',
      gradient: 'from-red-50 to-orange-100',
      iconBg: 'bg-red-100',
      buttonColor: 'bg-red-600 hover:bg-red-700',
      focusColor: 'focus:ring-red-500 focus:border-red-500'
    },
    customer: {
      title: 'Customer Login',
      subtitle: 'Shop and manage your orders',
      icon: '🛒',
      gradient: 'from-green-50 to-emerald-100',
      iconBg: 'bg-green-100',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      focusColor: 'focus:ring-green-500 focus:border-green-500'
    },
    vendor: {
      title: 'Vendor Dashboard',
      subtitle: 'Manage your products and sales',
      icon: '🏪',
      gradient: 'from-purple-50 to-indigo-100',
      iconBg: 'bg-purple-100',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      focusColor: 'focus:ring-purple-500 focus:border-purple-500'
    }
  };


  export const roleConfigs = {
    user: {
      label: 'User',
      icon: '👤',
      description: 'Access personal dashboard and features',
      gradient: 'from-blue-50 to-cyan-100',
      iconBg: 'bg-blue-100',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      focusColor: 'focus:ring-blue-500 focus:border-blue-500'
    },
    vendor: {
      label: 'Vendor',
      icon: '🏪',
      description: 'Manage products and sales',
      gradient: 'from-purple-50 to-indigo-100',
      iconBg: 'bg-purple-100',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      focusColor: 'focus:ring-purple-500 focus:border-purple-500'
    },
    local_promoter: {
      label: 'Local Promoter',
      icon: '📢',
      description: 'Promote local events and businesses',
      gradient: 'from-orange-50 to-amber-100',
      iconBg: 'bg-orange-100',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      focusColor: 'focus:ring-orange-500 focus:border-orange-500'
    },
    admin: {
      label: 'Admin',
      icon: '⚙️',
      description: 'Full system management access',
      gradient: 'from-red-50 to-pink-100',
      iconBg: 'bg-red-100',
      buttonColor: 'bg-red-600 hover:bg-red-700',
      focusColor: 'focus:ring-red-500 focus:border-red-500'
    }
  };