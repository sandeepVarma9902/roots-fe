export const HelpPage = () => (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Help Center</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
              <p className="text-gray-600">Learn how to use our platform effectively.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Account Types</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">👤 User Account</h3>
                  <p className="text-sm text-gray-600">Personal dashboard and profile management</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">⚙️ Admin Account</h3>
                  <p className="text-sm text-gray-600">System administration and user management</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">🛒 Customer Account</h3>
                  <p className="text-sm text-gray-600">Shopping and order management</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">🏪 Vendor Account</h3>
                  <p className="text-sm text-gray-600">Product and sales management</p>
                </div>
              </div>
            </div>
          </div>
          <button
            // onClick={() => navigate('/')}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );