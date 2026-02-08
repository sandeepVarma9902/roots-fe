
export default function Activities() {
    return <>
     <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Your Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Events Attended</span>
                      <span className="font-bold text-indigo-600">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Upcoming Bookings</span>
                      <span className="font-bold text-green-600">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Reviews Written</span>
                      <span className="font-bold text-purple-600">8</span>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
    </>
}