import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';
import { foodProviders } from '../utils/constants';
import { FoodTopNav } from './FoodNav';
import { useState } from 'react';

type foodListingProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const FoodListing = (props: foodListingProps) => {
    const {activeTab, setActiveTab} = props;
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All Kitchens');
  const filters = ['All Kitchens', 'Pure Veg', 'Top Rated', 'Fastest Delivery'];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <FoodTopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Home Kitchens</h1>
          <p className="text-gray-600">Fresh, homemade food from local chefs near you</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
          <button className="px-5 py-2 rounded-full bg-green-600 text-white font-medium whitespace-nowrap">
            All Kitchens
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 whitespace-nowrap">
            Pure Veg
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 whitespace-nowrap">
            Top Rated
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 whitespace-nowrap">
            Fastest Delivery
          </button>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodProviders.map((provider) => (
  <div
    key={provider.id}
    onClick={() => navigate(`/food/provider/${provider.id}`)}
    className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
  >
    {/* Image Section with Overlay */}
    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <img 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        src={provider.image}
        alt={provider.name}
      />
      
      {/* Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Rating Badge - Floating */}
      <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform">
        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="font-bold text-gray-800 text-lg">{provider.rating}</span>
        </div>
      </div>

      {/* Cuisine Tag - Bottom Left */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg backdrop-blur-md">
          {provider.cuisine}
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6">
      {/* Provider Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
        {provider.name}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
        {provider.description}
      </p>
      
      {/* Chef Info */}
      <div className="flex items-center gap-2 mb-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-lg px-4 py-3 border border-orange-100">
        <span className="text-xl">👨‍🍳</span>
        <div>
          <p className="text-xs text-gray-500 font-medium">Chef</p>
          <p className="text-sm font-semibold text-gray-800">{provider.chef}</p>
        </div>
      </div>
      
      {/* Delivery Info - Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Delivery</p>
            <p className="text-sm font-semibold">{provider.deliveryTime}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-700">
          <div className="p-2 bg-green-50 rounded-lg">
            <MapPin className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Distance</p>
            <p className="text-sm font-semibold">{provider.distance}</p>
          </div>
        </div>
      </div>

      {/* Call to Action Indicator */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-orange-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        <span>View Menu</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};