import { X } from "lucide-react";

export default function AdBlock () {
    return <>
    <div className="relative rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-white/30 transition-all z-10">
                    <X className="w-4 h-4" />
                  </button>

                  <div className="p-6 text-white relative z-10">
                    <h3 className="text-2xl font-black mb-2">Special Offer!</h3>
                    <p className="text-white/90 mb-4">Exclusive deals just for you</p>

                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <div className="text-4xl mb-2">🎉</div>
                      <p className="font-bold text-lg">Up to 50% OFF</p>
                      <p className="text-sm text-white/80">Limited time offer</p>
                    </div>

                    <button className="w-full bg-white text-orange-600 font-bold border-0 hover:bg-gray-100 rounded-lg py-3 transition-all">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16" />
                </div>
    </>
}