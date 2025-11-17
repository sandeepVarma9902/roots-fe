import React, { useState, useMemo } from 'react';
import { Search, User, Calendar, ChevronLeft, ChevronRight, MapPin, Star, X, CalendarDays } from 'lucide-react';
import HomeFooter from '../footer/IndexFooter';
import Activities from "../home/Activities";
import AdBlock from './Adblock';
import Highlights from './Highlights';
import Events from './Events';
import CalenderEvents from './CalenderEvents';


const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('for you');
  const [selectedFilters, setSelectedFilters] = useState({
    delivery: false,
    dineIn: false,
    diaries: false,
  });
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-6 py-4">
            <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Rootszy Logo"
                className="w-10 h-10 object-contain"
              />
              Rootszy
            </div>
            <div className="flex-1 max-w-2xl relative">
              <input
                type="text"
                placeholder="Search for events, activities, restaurants"
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border-2 border-gray-200 focus:border-indigo-400 focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              {/* <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-indigo-600" /> */}
            </div>
          </div>
          <div className="flex gap-8 border-t border-gray-200">
            {['For you', 'Food', 'Events', 'Activities', 'Blogs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab.toLowerCase())}
                className={`py-4 px-2 font-semibold transition-all duration-300 border-b-2 ${selectedTab === tab.toLowerCase()
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-600 border-transparent hover:text-indigo-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mt-44 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">

            <aside className="col-span-12 lg:col-span-3">
              <div className="sticky top-44 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Hi, Rahul</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Bengaluru
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-gray-700 mb-3">Filters</h4>
                    <div className="grid grid-cols-3">
                      <button
                        onClick={() => setSelectedFilters(prev => ({ ...prev, delivery: !prev.delivery }))}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedFilters.delivery
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        <span className="flex items-center gap-1">
                          <CalendarDays size={14} />
                          Events
                        </span>
                      </button>
                      <button
                        onClick={() => setSelectedFilters(prev => ({ ...prev, dineIn: !prev.dineIn }))}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedFilters.dineIn
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        🍽️ Dine-in
                      </button>
                      <button
                        onClick={() => setSelectedFilters(prev => ({ ...prev, diaries: !prev.diaries }))}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedFilters.diaries
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        📖 Activities
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <h4 className="font-bold text-sm text-gray-700 mb-3">More Filters</h4>

                    <div className="border-b pb-2">
                      <button
                        onClick={() => setExpandedFilter(expandedFilter === 'delivery' ? null : 'delivery')}
                        className="w-full flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm text-gray-700 flex items-center gap-2">
                        <CalendarDays size={14} /> Events
                        </span>
                        <span className="text-gray-400">{expandedFilter === 'delivery' ? '−' : '+'}</span>
                      </button>
                      {expandedFilter === 'delivery' && (
                        <div className="pl-8 pr-2 py-2 space-y-2">
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Kambala Festival | Beedu
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Kichchu Haisodu | Mysuru
                          </label>
                        </div>
                      )}
                    </div>

                    <div className="border-b pb-2">
                      <button
                        onClick={() => setExpandedFilter(expandedFilter === 'cuisines' ? null : 'cuisines')}
                        className="w-full flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm text-gray-700 flex items-center gap-2">
                          🍳 Cuisines
                        </span>
                        <span className="text-gray-400">{expandedFilter === 'cuisines' ? '−' : '+'}</span>
                      </button>
                      {expandedFilter === 'cuisines' && (
                        <div className="pl-8 pr-2 py-2 space-y-2">
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            South Indian
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            North Indian
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Chinese
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Continental
                          </label>
                        </div>
                      )}
                    </div>

                    <div className="border-b pb-2">
                      <button
                        onClick={() => setExpandedFilter(expandedFilter === 'dietary' ? null : 'dietary')}
                        className="w-full flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm text-gray-700 flex items-center gap-2">
                          🥗 Dietary
                        </span>
                        <span className="text-gray-400">{expandedFilter === 'dietary' ? '−' : '+'}</span>
                      </button>
                      {expandedFilter === 'dietary' && (
                        <div className="pl-8 pr-2 py-2 space-y-2">
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Vegetarian
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Vegan
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            Gluten-free
                          </label>
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => setExpandedFilter(expandedFilter === 'price' ? null : 'price')}
                        className="w-full flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm text-gray-700 flex items-center gap-2">
                          💰 Price Range
                        </span>
                        <span className="text-gray-400">{expandedFilter === 'price' ? '−' : '+'}</span>
                      </button>
                      {expandedFilter === 'price' && (
                        <div className="pl-8 pr-2 py-2 space-y-2">
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            ₹ Budget-friendly
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            ₹₹ Mid-range
                          </label>
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            ₹₹₹ Fine Dining
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <CalenderEvents/>
              </div>
            </aside>


            {/* Main Content - Event Cards */}
            <Events/>

            {/* Right Sidebar */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="sticky top-44 space-y-6">
                {/* Videos/Photos Carousel */}
                <Highlights/>

                {/* Promotional Advertisement */}
                <AdBlock/>

                {/* Quick Stats */}
               <Activities/>
              </div>
            </aside>
          </div>
        </div>
      </main>

     <HomeFooter/>
    </div>
  );
};

export default Home;