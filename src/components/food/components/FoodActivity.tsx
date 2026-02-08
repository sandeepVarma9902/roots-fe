export const ActivitySidebar: React.FC = () => (
    <div className="bg-white rounded-xl p-6 sticky top-40">
      <h3 className="font-semibold text-gray-900 mb-4">Your Activity</h3>
      <div className="space-y-4">
        {[
          { label: 'Orders Placed', value: '12' },
          { label: 'Upcoming Bookings', value: '3' },
          { label: 'Reviews Written', value: '8' }
        ].map(item => (
          <div key={item.label} className="flex justify-between items-center">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-bold text-purple-600">{item.value}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 px-4 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
        View Profile
      </button>
    </div>
  );
  