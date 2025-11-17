import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { calendarEvents } from "./utils/constants";
import { useMemo, useState } from "react";

export default function CalenderEvents() {
    const [currentDate, setCurrentDate] = useState(new Date());


    const { monthName, year, daysInMonth, startingDayOfWeek } = useMemo(() => {
        const monthName = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
        const startingDayOfWeek = new Date(year, currentDate.getMonth(), 1).getDay();
    
        return { monthName, year, daysInMonth, startingDayOfWeek };
      }, [currentDate]);
    
      const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
      };
    
      const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
      };
    
      const isToday = (date: number) => {
        const today = new Date();
        return (
          date === today.getDate() &&
          currentDate.getMonth() === today.getMonth() &&
          currentDate.getFullYear() === today.getFullYear()
        );
      };
    
      const getEventForDate = (date: number) => {
        return calendarEvents.find(event => event.date === date);
      };
    
      const getEventColor = (type: 'live' | 'booked' | 'upcoming') => {
        switch (type) {
          case 'live':
            return 'bg-red-500';
          case 'booked':
            return 'bg-green-500';
          case 'upcoming':
            return 'bg-blue-500';
          default:
            return 'bg-gray-300';
        }
      };


    return <>
<div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calendar className="text-indigo-600 w-5 h-5" />
                      {monthName} {year}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={goToPreviousMonth}
                        className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={goToNextMonth}
                        className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </h3>

                  <div className="mb-4 space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-gray-600">Live Events</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-600">Booked Events</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-gray-600">Upcoming Events</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-center text-xs font-semibold text-gray-600">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: startingDayOfWeek }, (_, i) => (
                        <div key={`empty-${i}`} className="aspect-square" />
                      ))}

                      {Array.from({ length: daysInMonth }, (_, i) => {
                        const date = i + 1;
                        const event = getEventForDate(date);
                        const isTodayDate = isToday(date);

                        return event ? (
                          <div
                            key={i}
                            className={`relative aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-all hover:scale-110 group ${isTodayDate ? 'ring-2 ring-indigo-600' : ''
                              }`}
                            title={`${event.title} - ${event.time} at ${event.location}`}
                          >
                            <div className={`absolute inset-0 ${getEventColor(event.type)} opacity-20 rounded-lg`}></div>
                            <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${getEventColor(event.type)} ${event.type === 'live' ? 'animate-pulse' : ''}`}></div>
                            <span className={`relative z-10 font-semibold ${isTodayDate ? 'text-indigo-600' : ''}`}>{date}</span>
                          </div>
                        ) : (
                          <div
                            key={i}
                            className={`aspect-square flex items-center justify-center text-sm rounded-lg hover:bg-indigo-100 cursor-pointer transition-colors ${isTodayDate ? 'bg-indigo-600 text-white font-bold' : ''
                              }`}
                          >
                            {date}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-bold text-gray-600 mb-2">UPCOMING EVENTS</h4>
                    {calendarEvents.slice(0, 3).map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full mt-1 ${getEventColor(event.type)} ${event.type === 'live' ? 'animate-pulse' : ''}`}></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-800 truncate">{event.title}</div>
                          <div className="text-xs text-gray-500">{event.time} • {event.location}</div>
                        </div>
                        <div className="text-xs font-bold text-gray-400">{event.date}</div>
                      </div>
                    ))}
                  </div>
                </div>    
    </>
}