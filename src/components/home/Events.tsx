import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { events } from "./utils/constants";

export default function Events () {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});


    const nextImage = (eventId: string, totalImages: number) => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [eventId]: ((prev[eventId] || 0) + 1) % totalImages
        }));
      };
    
      const prevImage = (eventId: string, totalImages: number) => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [eventId]: ((prev[eventId] || 0) - 1 + totalImages) % totalImages
        }));
      };


    return <>
    <main className="col-span-12 lg:col-span-6">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-black text-gray-800 mb-2">
                    Discover Amazing Experiences
                  </h2>
                  <p className="text-gray-600">Curated events and activities just for you</p>
                </div>

                {/* Event Cards with Image Carousels */}
                {events.map((event) => {
                  const currentIndex = currentImageIndex[event.id] || 0;
                  return (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image Carousel */}
                      <div className="relative rounded-t-2xl overflow-hidden group">
                        <div className="relative h-80">
                          <img
                            src={event.images[currentIndex]}
                            alt={`${event.title} ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                            {event.category}
                          </div>

                          {/* Rating Badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {event.rating}
                          </div>
                        </div>

                        {/* Navigation Arrows */}
                        {event.images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(event.id, event.images.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => nextImage(event.id, event.images.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}

                        {/* Dots Indicator */}
                        {event.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {event.images.map((_:any, idx:number) => (
                              <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                                  }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <span className="text-2xl font-bold text-indigo-600">₹{event.price}</span>
                            <span className="text-sm text-gray-500 ml-2">per person</span>
                          </div>
                          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
    </>
}