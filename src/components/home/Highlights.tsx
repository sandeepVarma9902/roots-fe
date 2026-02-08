import { useState } from "react";
import { sidebarSlides } from "./utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Highlights() {
    const [sidebarImageIndex, setSidebarImageIndex] = useState(0);

    return <>
    <div className="bg-white rounded-2xl shadow-lg p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">
                    Trending Moments
                  </h3>
                  <div className="relative rounded-xl overflow-hidden group">
                    <div className="relative h-96">
                      <img
                        src={sidebarSlides[sidebarImageIndex]}
                        alt={`Slide ${sidebarImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setSidebarImageIndex((sidebarImageIndex - 1 + sidebarSlides.length) % sidebarSlides.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setSidebarImageIndex((sidebarImageIndex + 1) % sidebarSlides.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {sidebarSlides.map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSidebarImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${idx === sidebarImageIndex ? 'bg-white w-4' : 'bg-white/50'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
    </>
}