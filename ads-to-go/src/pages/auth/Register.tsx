import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">Join Ads to Go</h2>
          <p className="text-gray-600 mt-2">Choose how you want to get started</p>
        </div>

        {/* Registration Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Driver Registration */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-car"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Register as Driver</h3>
              <p className="text-gray-600 mb-6">
                Turn your vehicle into a revenue stream by displaying advertisements
                while you drive.
              </p>
              <ul className="text-left text-gray-600 mb-8">
                <li className="flex items-center mb-3">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Multiple vehicle types supported
                </li>
                <li className="flex items-center mb-3">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Choose between vinyl or LCD displays
                </li>
                <li className="flex items-center mb-3">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Track your earnings in real-time
                </li>
              </ul>
              <Link
                to="/driver/register"
                className="btn-primary inline-block w-full"
              >
                Register as Driver
              </Link>
            </div>
          </div>

          {/* Business Registration */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Register as Business</h3>
              <p className="text-gray-600 mb-6">
                Expand your reach with mobile advertising and connect with your
                audience across the city.
              </p>
              <ul className="text-left text-gray-600 mb-8">
                <li className="flex items-center mb-3">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Wide network of vehicles
                </li>
                <li className="flex items-center mb-3">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Flexible advertising options
                </li>
                <li className="flex items-center mb-3">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Detailed campaign analytics
                </li>
              </ul>
              <Link
                to="/client/register"
                className="btn-primary inline-block w-full"
              >
                Register as Business
              </Link>
            </div>
          </div>
        </div>

        {/* Already have an account */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
