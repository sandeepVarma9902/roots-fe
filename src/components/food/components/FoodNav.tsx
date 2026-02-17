import { Search, Heart, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FoodTopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const FoodTopNav: React.FC<FoodTopNavProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate()
  const tabs = [{menuName:'For you', menuValue:"/home"}, {menuName:'Food', menuValue:"/food"}, {menuName:'Events', menuValue: "/home"}, {menuName:'Activities', menuValue: "/home"}, {menuName:'Blogs', menuValue: "/home"}];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Rootszy</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for events, activities, restaurants"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 bg-purple-600 rounded-full transition-colors">
              <User className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Secondary Nav */}
        <div className="flex gap-6 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab?.menuName}
              onClick={() => {
                setActiveTab(tab?.menuName)
                navigate(tab?.menuValue)
              }}
              className={`pb-2 ${
                activeTab === tab?.menuName
                  ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              } transition-colors`}
            >
              {tab?.menuName}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};