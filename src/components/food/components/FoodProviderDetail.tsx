import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FoodBooking from './FoodBooking';
import { FoodTopNav } from './FoodNav';
import { useState } from 'react';
import { foodProviders, getProviderMenuItems } from '../utils/constants';

export const FoodProviderDetail = () => {
  const { providerId } = useParams<{ providerId: string }>();
  const [activeTab, setActiveTab] = useState('Food');

  const navigate = useNavigate();
  
  const provider = foodProviders.find(p => p.id === providerId);
  const menuItems = providerId ? getProviderMenuItems(providerId) : [];

  if (!provider) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Provider not found</h2>
          <button
            onClick={() => navigate('/food')}
            className="text-purple-600 hover:text-purple-700"
          >
            ← Back to Food Providers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <FoodTopNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Provider Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate('/food')}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Kitchens</span>
        </button>
        
        <div className="flex items-center gap-6">
          {/* Updated gradient to match purple theme */}
          <div className="w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center shadow-sm border border-purple-100">
            <img className="text-6xl" src={provider.image} ></img>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{provider.name}</h1>
            <p className="text-gray-600 mb-2">{provider.cuisine}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>⭐ {provider.rating}</span>
              <span>👨‍🍳 {provider.chef}</span>
              <span>📍 {provider.distance}</span>
              <span>🕐 {provider.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Food Booking Component */}
      <FoodBooking provider={provider} menuItems={menuItems} />
    </div>
  );
};