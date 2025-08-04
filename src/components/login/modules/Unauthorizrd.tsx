import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage(){
  const navigate = useNavigate()
  return(

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Access Denied</h2>
        <p className="text-gray-600 mb-6">You don't have permission to access this page.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Login
        </button>
      </div>
    </div>
  );}